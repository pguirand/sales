# Generated by Django 3.1.4 on 2021-11-11 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('topgaz', '0024_parametre_time'),
    ]

    operations = [
        migrations.AddField(
            model_name='parametre',
            name='time2',
            field=models.DateTimeField(blank=True, default='2021-01-01'),
        ),
    ]