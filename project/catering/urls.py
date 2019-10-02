from django.conf.urls import url
from catering import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^contacts$', views.contacts, name='contacts')
]
