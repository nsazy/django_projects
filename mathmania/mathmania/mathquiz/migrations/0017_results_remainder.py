# Generated by Django 4.2.15 on 2024-12-15 19:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("mathquiz", "0016_alter_results_student"),
    ]

    operations = [
        migrations.AddField(
            model_name="results",
            name="remainder",
            field=models.CharField(blank=True, default=0, max_length=20),
        ),
    ]
