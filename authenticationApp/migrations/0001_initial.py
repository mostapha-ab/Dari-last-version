# Generated by Django 4.0.5 on 2022-06-15 22:12

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
            name='ProfileAccount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phoneNumber', models.IntegerField(blank=True, default=212, null=True)),
                ('email', models.EmailField(max_length=254)),
                ('city', models.CharField(choices=[('Casablanca', 'Casablanca'), ('Rabat', 'Rabat'), ('Marrakech', 'Marrakech'), ('Agadir', 'Agadir'), ('Sale', 'Sale'), ('Kenitra', 'Kenitra'), ('Meknes', 'Meknes'), ('Oujda', 'Oujda'), ('Temara', 'Temara'), ('El Jadida', 'El Jadida'), ('Mohammedia', 'Mohammedia'), ('Tetouan', 'Tetouan'), ('Nador', 'Nador'), ('Safi', 'Safi'), ('Beni Mellal', 'Beni Mellal'), ('Khouribga', 'Khouribga'), ('Bouznika', 'Bouznika'), ('Settat', 'Settat'), ('Abadou', 'Abadou'), ('Abaynou', 'Abaynou'), ('Agadir', 'Agadir'), ('Agadir Melloul', 'Oujda')], default='Casablanca', max_length=50)),
                ('avatar', models.URLField(default='')),
                ('username', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
