from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .models import UserProfile
from django.contrib.auth import login as auth_login, logout as auth_logout
from django.middleware.csrf import get_token
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny
from rest_framework import status

def index(request):
    return HttpResponse("Hello, world. We are at the core's index.")


@api_view(['GET'])
@ensure_csrf_cookie
@permission_classes([AllowAny])
def csrf(request):
    token = get_token(request)
    return Response({'csrfToken': token})


@api_view(['GET'])
def debug(request):
    print("USER:", request.user)
    print("IS AUTH:", request.user.is_authenticated)
    
    if request.user.is_authenticated:
        user_data = {
            "id": request.user.id,
            "username": request.user.username,
            "email": request.user.email,
        }
    else:
        user_data = None

    return Response({
        "debug": True,
        "user": user_data,
        "is_authenticated": request.user.is_authenticated,
    })


@api_view(['POST'])
@permission_classes([AllowAny])
def signup(request):
    uname = request.data.get('username')
    email = request.data.get('email')
    pwd = request.data.get('password')
    d_name = request.data.get('display_name')
    
    if User.objects.filter(username=uname).exists():
        return Response({'error': 'Username already exists.'}, status=400)
    
    if User.objects.filter(email=email).exists():
        return Response({'error': 'Email already exists.'}, status=400)
    
    if len(pwd) < 8:
        return Response({'error':'Password must be at least 8 characters'}, status=400)
    
    #Create the user
    user = User.objects.create_user(username=uname, email=email, password=pwd)
    UserProfile.objects.create(user_credentials=user, display_name=d_name)
    
    return Response({'message': 'Signup Successful!'})


@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    email_name = request.data.get('email_name')
    pwd = request.data.get('password')
    
    if not email_name or not pwd:
        return Response({'error': 'Provide both email/username and password'}, status=400)
    
    # 1) Find user by username OR email
    try:
        user = User.objects.filter(username=email_name).first() or User.objects.filter(email=email_name).first()
    except User.DoesNotExist:
        user = None
        
    if not user:
        return Response({'error': 'Account not registered with those credentials.'}, status=404)
    
    # 2) Authenticate with the resolved username
    user = authenticate(username=user.username, password=pwd)
    if not user:
        return Response({'error': 'Incorrect password'}, status=401)
    
    # 3) Create session
    auth_login(request=request, user=user)
    
    # 4) Get profile data
    try:
        profile = UserProfile.objects.get(user_credentials=user)
        display_name = profile.display_name
    except UserProfile.DoesNotExist:
        display_name = user.username
    return Response({
        'message': 'Login successful!', 
        'user': {
            'id': user.id,
            'username': user.username,
            'email': user.email,
            'display_name': display_name,
        },
    })


@api_view(['POST'])
@permission_classes([AllowAny])
def logout(request):
    if request.user.is_authenticated:
        auth_logout(request=request)
        return Response({'message': 'Logged out'}, status=status.HTTP_200_OK)
    return Response({'message': 'user not authenticated to logout'}, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['GET'])
@permission_classes([AllowAny])
def me(request):
    if not request.user.is_authenticated:
        return Response({'isAuthenticated': False})
    
    try:
        profile = UserProfile.objects.get(user_credentials=request.user)
        display_name = profile.display_name
        age = profile.age
    except UserProfile.DoesNotExist:
        display_name = request.user.username
        age = None
    
    return Response({
        'isAuthenticated': True,
        'user': {
            'username': request.user.username,
            'email': request.user.email,
            'display_name': display_name,
            'age': age,
        }
    })
