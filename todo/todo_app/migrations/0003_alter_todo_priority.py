# Generated by Django 3.2.7 on 2021-09-11 23:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo_app', '0002_alter_todo_priority'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='priority',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
