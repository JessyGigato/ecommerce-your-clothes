from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=50)
    code = models.IntegerField()
    size = models.CharField(max_length=2)
    color =  models.CharField(max_length=20)
    gender =  models.CharField(max_length=1, null=True)
    description = models.CharField(max_length=250)
    price = models.FloatField()