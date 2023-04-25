from django.conf import settings
from django.db import models
class Recipe(models.Model):
    'Generated Model'
    title = models.CharField(max_length=256,)
    instructions = models.TextField()
    cook_time = models.BigIntegerField()
    prep_time = models.BigIntegerField()
    rating = models.BigIntegerField()
    image = models.CharField(max_length=256,)
class RecipeCategory(models.Model):
    'Generated Model'
    name = models.CharField(max_length=256,)
