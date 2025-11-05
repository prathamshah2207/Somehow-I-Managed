from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
	user_credentials = models.OneToOneField(User, on_delete=models.CASCADE)
	user_email = models.EmailField()
	display_name = models.CharField(max_length=100)
	age = models.PositiveIntegerField(null=True, blank=True)
	
	def __str__(self):
		return self.display_name
