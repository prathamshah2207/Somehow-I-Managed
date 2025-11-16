from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .models import UserProfile
from django.contrib.auth import login as auth_login, logout as auth_logout
from django.middleware.csrf import get_token
from rest_framework.decorators import permission_classes
from rest_framework.permissions import AllowAny

def index(request):
    return HttpResponse("Hello, world. We are at the core's index.")


@api_view(['GET'])
@permission_classes([AllowAny])
def crsf(request):
    token = get_token(request)
    return Response({'crsfToken': token})


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
    return Response({'message': 'Login successful!', 'User': display_name})
