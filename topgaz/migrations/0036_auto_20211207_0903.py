# Generated by Django 3.1.4 on 2021-12-07 09:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('topgaz', '0035_auto_20211207_0816'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employe',
            old_name='username',
            new_name='utilisateur',
        ),
    ]