from django.urls import path
from .views import editProfileInfo , editPassword , myListingApi , mySavedPostApi


urlpatterns = [
    path('settings/profile/', editProfileInfo , name="editProfileInfo"),
    path('settings/password/', editPassword , name="editPassword"),
    path('listing/', myListingApi , name="myListingApi"),
    path('saveditem/', mySavedPostApi , name="mySavedPostApi"),
]