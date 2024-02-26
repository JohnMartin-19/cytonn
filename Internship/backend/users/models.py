from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class CustomUser(AbstractUser):
    name = models.CharField(max_length = 50)
    email= models.EmailField(('email address'), unique=True)
    password = models.CharField(max_length =12)
