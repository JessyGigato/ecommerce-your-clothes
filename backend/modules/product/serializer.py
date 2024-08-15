from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        #campos a serializar
        #fields = ('id','name')#,'code', 'size')
        fields = '__all__' # serializa todos los campos