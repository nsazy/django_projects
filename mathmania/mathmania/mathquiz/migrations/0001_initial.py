# Generated by Django 4.2.15 on 2024-11-24 18:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Results",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("numerator", models.IntegerField(max_length=200, null=True)),
                ("denominator", models.IntegerField(max_length=200, null=True)),
                ("userAnswer", models.IntegerField(max_length=200, null=True)),
                ("systemAnswer", models.IntegerField(max_length=200, null=True)),
                ("answerValue", models.BooleanField()),
                ("dateCreated", models.DateTimeField(auto_now_add=True, null=True)),
                (
                    "user",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
        ),
    ]
