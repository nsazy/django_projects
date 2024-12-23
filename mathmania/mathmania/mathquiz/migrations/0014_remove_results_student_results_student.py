# Generated by Django 4.2.15 on 2024-12-03 12:01

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("mathquiz", "0013_alter_results_student"),
    ]

    operations = [
        migrations.RemoveField(model_name="results", name="student",),
        migrations.AddField(
            model_name="results",
            name="student",
            field=models.ManyToManyField(blank=True, to=settings.AUTH_USER_MODEL),
        ),
    ]
