# Generated by Django 2.2.28 on 2023-04-25 16:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_recipe'),
    ]

    operations = [
        migrations.CreateModel(
            name='RecipeCategory',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
            ],
        ),
    ]
