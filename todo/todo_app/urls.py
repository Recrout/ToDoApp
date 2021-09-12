from django.urls import path
from . import views
# from . import api

from django.urls import include, path
from rest_framework import routers

router = routers.DefaultRouter()
# router.register('', views.index)
router.register(r'todo', views.TodoViewSet)
router.register(r'todolist', views.TodoListViewSet)

urlpatterns = [
    # path('api/todos/', views.TodoListViewSet.as_view()),
    # path('api/todos/<int:pk>', views.TodoViewSet.as_view()),

    # path('', views.index, name='index'),
    path('', views.index, name='index'),
    path('api/', include(router.urls)),
    # path('', views.index, name='index')
    # path('index/', views.index, name='index'),
]
