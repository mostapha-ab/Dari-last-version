# Generated by Django 3.2.6 on 2022-07-05 16:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homeApp', '0004_housepost_transaction'),
    ]

    operations = [
        migrations.AddField(
            model_name='housepost',
            name='status',
            field=models.CharField(choices=[('Active', 'Active'), ('Desactive', 'Desactive')], default='Vente', max_length=50),
        ),
    ]
