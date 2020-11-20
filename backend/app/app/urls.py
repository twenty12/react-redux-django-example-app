from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from app import views

router = routers.DefaultRouter()
router.register(r'user', views.UserViewSet, basename='user')
router.register(r'accounts', views.AccountViewSet, basename='accounts')
# router.register(r'note', logger_views.NoteViewSet, basename='note')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
