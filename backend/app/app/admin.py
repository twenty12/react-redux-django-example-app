from django.contrib import admin
from app.models import User, Account


class AccountAdmin(admin.ModelAdmin):
    list_display = '__all__'

class UserAdmin(admin.ModelAdmin):
    list_display = '__all__'


admin.site.register(User)
admin.site.register(Account)
