from rest_framework import viewsets

from app.serializers import UserSerializer, AccountSerializer
from app.models import User, Account


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
