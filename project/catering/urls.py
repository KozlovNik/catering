from django.urls import path
from catering import views

urlpatterns = [
    path('', views.index, name='index'),
]
