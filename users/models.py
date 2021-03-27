from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class User(AbstractUser):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    email=models.EmailField(unique=True)
    username = models.CharField(null=True,unique=True,max_length=150)
    profile_picture=models.ImageField(upload_to="profile_pics")
    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    phone=models.CharField(max_length=20)
    REQUIRED_FIELDS = ['phone','password','username','first_name','last_name']

