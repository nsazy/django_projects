# Generated by Django 4.2.15 on 2024-12-05 10:43

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("mathquiz", "0015_delete_student_remove_results_student_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="results",
            name="student",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL
            ),
        ),
    ]
