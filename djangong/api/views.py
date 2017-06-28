from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Post
from api.serializes import PostSerializer
import pdb

@api_view(['GET', 'PUT', 'DELETE'])
def post_list(request):
    print(request)
    if request.method = 'GET':
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        pdb.set_trace()
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method = 'DELETE':
        posts.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


