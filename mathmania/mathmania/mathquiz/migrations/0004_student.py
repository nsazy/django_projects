# Generated by Django 4.2.15 on 2024-11-28 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("mathquiz", "0003_alter_results_id"),
    ]

    operations = [
        migrations.CreateModel(
            name="Student",
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
                ("firstName", models.CharField(max_length=200, null=True)),
                ("lastName", models.CharField(max_length=200, null=True)),
                ("email", models.CharField(max_length=200, null=True)),
            ],
        ),
    ]
