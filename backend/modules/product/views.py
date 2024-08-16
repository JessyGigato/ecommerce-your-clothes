'''from rest_framework.views import APIView
from .models import Product
from .serializer import ProductSerializer
from rest_framework.response import Response

class ProductViewSet(APIView):
    def get(self, request):
        output = [{"name": output.name,
                   "code": output.code,
                   "size": output.size,
                   "color":output.color,
                   "description": output.description,
                   "price": output.price}
                  for output in Product.objects.all()
                  ]
        return Response(output)
    
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
        

'''
from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ProductSerializer
from .models import Product

# Create your views here.
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
