# Generated by Django 4.2.15 on 2024-12-01 13:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("mathquiz", "0007_results_student_alter_results_id"),
    ]

    operations = [
        migrations.AddField(
            model_name="results",
            name="sign",
            field=models.CharField(max_length=1, null=True),
        ),
    ]
