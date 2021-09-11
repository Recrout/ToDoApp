# Generated by Django 3.2.7 on 2021-09-11 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ToDo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('text_todo', models.TextField(max_length=300)),
                ('priority', models.IntegerField(unique=True)),
                ('completed', models.BooleanField(blank=True)),
            ],
            options={
                'ordering': ['name'],
            },
        ),
    ]
