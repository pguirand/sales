# Generated by Django 3.1.4 on 2022-01-18 05:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('topgaz', '0054_auto_20220118_0536'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='secteur',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='compagnie', to='topgaz.secteur'),
        ),
    ]