# Generated by Django 3.2.7 on 2021-09-12 01:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo_app', '0002_auto_20210912_0430'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='priority',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]