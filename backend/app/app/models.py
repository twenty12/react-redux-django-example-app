
from django.db import models
from django.contrib.auth.models import User


class Account(models.Model):
    pass


class Profile(models.Model):
    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE)
    account = models.ForeignKey(
        Account,
        on_delete=models.CASCADE)
