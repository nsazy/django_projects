# Generated by Django 4.2.15 on 2024-12-01 11:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("mathquiz", "0005_student_date_created"),
    ]

    operations = [
        migrations.RemoveField(model_name="results", name="user",),
    ]
