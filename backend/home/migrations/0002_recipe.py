# Generated by Django 2.2.28 on 2023-04-17 12:24

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256)),
                ('instructions', models.TextField()),
                ('cook_time', models.BigIntegerField()),
                ('prep_time', models.BigIntegerField()),
                ('rating', models.BigIntegerField()),
                ('image', models.CharField(max_length=256)),
            ],
        ),
    ]
