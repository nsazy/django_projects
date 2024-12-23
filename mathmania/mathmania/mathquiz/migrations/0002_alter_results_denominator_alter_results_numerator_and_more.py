# Generated by Django 4.2.15 on 2024-11-24 18:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("mathquiz", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="results",
            name="denominator",
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name="results",
            name="numerator",
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name="results",
            name="systemAnswer",
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name="results",
            name="userAnswer",
            field=models.IntegerField(default=0),
        ),
    ]
