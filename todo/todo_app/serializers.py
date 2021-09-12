from rest_framework import serializers

from .models import ToDo


# class TodoListSerializer(serializers.ModelSerializer):
#     """Вывод списка ТУДУ"""
#
#     class Meta:
#         model = ToDo
#         fields = "__all__"


class TodoSerializer(serializers.ModelSerializer):
    """Вывод одного ТУДУ"""

    class Meta:
        model = ToDo
        fields = "__all__"

