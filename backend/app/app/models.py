
from django.db import models
from django.contrib.auth.models import User


class Account(models.Model):
    pass


class User(models.Model):
    email = models.EmailField(max_length=254, blank=True, null=True)
    first_name = models.CharField(max_length=220, blank=True, null=True)
    last_name = models.CharField(max_length=220, blank=True, null=True)
    account = models.ForeignKey(
        Account,
        on_delete=models.CASCADE)
