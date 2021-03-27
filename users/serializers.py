from rest_framework import serializers
from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer
from django.contrib.auth import get_user_model
from .models import User



class UserCreateSerializer(BaseUserCreateSerializer):

    class Meta(BaseUserCreateSerializer.Meta):
        fields=("first_name","last_name","username","password","email","phone",)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=("id","email","username","phone","first_name","last_name","password","profile_picture")
        extra_kwargs = {
            'password': {'write_only': True},
        }
        read_only_fields = ('id',)
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            phone=validated_data['phone'],
            profile_picture=validated_data['profile_picture']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user

class CustomTokenSerializer(serializers.Serializer):
    token = serializers.CharField()