from rest_framework import serializers
from api.models import Post
from django.contrib.auth.models import User

class PostSerializer(serializers.Serializer):
    title = serializers.CharField(required=False, allow_blank=True, max_length=255)
    content = serializers.CharField(required=False, allow_blank=True, max_length=255)


