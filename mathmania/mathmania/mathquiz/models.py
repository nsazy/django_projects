from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.conf import settings


# Create your models here.
User = settings.AUTH_USER_MODEL

class Results(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    numerator = models.IntegerField(default=0)
    sign = models.CharField(max_length=1, null=True)
    denominator = models.IntegerField(default=0)
    userAnswer = models.IntegerField(default=0)
    systemAnswer = models.IntegerField(default=0, null=True)
    answerValue = models.BooleanField()
    dateCreated = models.DateTimeField(auto_now_add=True, null=True)

    
