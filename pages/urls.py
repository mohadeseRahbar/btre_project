from django.urls import path

from . import views

# want url for homepage
urlpatterns = [
    path('', views.index, name='index'),
    path('about', views.about, name='about'),
]