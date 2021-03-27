from django.urls import path, include

from users.views import APILoginView, APILogoutView,signup
urlpatterns = [
    path('login/', APILoginView.as_view(), name='api_login'),
    path('logout/', APILogoutView.as_view(), name='api_logout'),
    path('signup/',signup.as_view(),name='api_signup')
]