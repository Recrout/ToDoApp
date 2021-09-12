from django.contrib.auth.models import User, Group
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import TodoSerializer
    # TodoListSerializer
from .models import ToDo
from rest_framework import generics


def index(request):
    return render(request, 'index.html')


# class TodoListViewSet(viewsets.ModelViewSet):
#     """
#     Туды лист
#     """
#     queryset = ToDo.objects.all()
#     serializer_class = TodoListSerializer
#     permission_classes = [permissions.AllowAny]


#     # queryset = ToDo.objects.all()
#     serializer_class = TodoListSerializer
#     permission_classes = [permissions.AllowAny]
#
#     def get_queryset(self):
#         todos = ToDo.objects.all()
#         return ToDo


# class TodoViewSet(generics.RetrieveAPIView):
class TodoViewSet(viewsets.ModelViewSet):
    """
    Туда одна
    """
    queryset = ToDo.objects.filter()
    serializer_class = TodoSerializer
    # permission_classes = [permissions.AllowAny]
    permission_classes = [permissions.IsAuthenticated]
#     queryset = ToDo.objects.filter()
#     serializer_class = TodoSerializer
#     permission_classes = [permissions.AllowAny]
