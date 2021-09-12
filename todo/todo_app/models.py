from django.db import models
from django.urls import reverse


# Create your models here.

class ToDo(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    text_todo = models.TextField(max_length=300)
    priority = models.IntegerField(blank=True, null=True)
    completed = models.BooleanField(blank=True, null=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('todo_detail', kwargs={"slug": self.name})

    class Meta:
        ordering = ['name']
