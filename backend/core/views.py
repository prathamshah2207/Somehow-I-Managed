from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import UserProfile

def index(request):
    return HttpResponse("Hello, world. We are at the core's index.")

@api_view(['POST'])
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