from django.urls import path
from . import views

urlpatterns = [
    # Base
    path('', views.index, name="index"),
    
    # Auth and Sessions
    path("csrf/", views.crsf, name="csrf"),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('profile/', views.me, name='profile'),
]