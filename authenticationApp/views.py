from email import message
from http.client import REQUEST_URI_TOO_LONG
import imp
import profile
from winreg import HKEY_PERFORMANCE_DATA
import django
from django.shortcuts import render , redirect
from django.http import HttpResponse
from .forms import CreateUserForm
from django.contrib import messages
from django.contrib.auth import authenticate , login , logout
from django.contrib.auth.models import User
from django.contrib.auth.models import Group
from .decorators import userAlreadyAuthenticated , onlyUserAcess , userAllowedChangePassword
from django.contrib.auth.decorators import login_required
from .models import ProfileAccount , InboxMessages
from django.core.mail import send_mail
from django.conf import settings
from .forms import CreateProfile
from .models import *
import json
from django.views.decorators.csrf import csrf_exempt




#*/> Login EndPoint API
@userAlreadyAuthenticated
def loginPage(request):
    if request.method == "POST":
        name = request.POST.get("username")
        user_password = request.POST.get("password")
        user = authenticate(request,username=name,password=user_password)
        if user is not None:
            login(request,user)
            msg = "Authenticated Succefully"
            return HttpResponse(msg)
        else:
            return HttpResponse("Authenticated unSuccefully")
    return render(request,"login.html")








#*/> Register EndPoint API
@csrf_exempt
@userAlreadyAuthenticated
def registerPage(request):
    myForm = CreateUserForm()
    profileForm = CreateProfile() 

    if request.method == "POST":
        username = request.POST.get("username",None)
        password = request.POST.get("password1",None)
        password_conf = request.POST.get("password2",None)
        user_email = request.POST.get("email",None)
        user_phoneNumber = request.POST.get("phoneNumber",None)
        user_city = request.POST.get("city",None)

        if (username and password and password_conf and user_email and user_phoneNumber and user_city) and (password == password_conf) and (len(password) >= 8) and (len(username) >= 5):
            try:
                user = User.objects.create_user(username=username,email=user_email,password=password)
                user_profile = ProfileAccount.objects.create(username=user,phoneNumber=user_phoneNumber,email=user_email,city=user_city)
                user_profile.avatar = user_profile.getAvatar()
                user_profile.save()
                user.groups.add(1)
                user.save()
                return HttpResponse("User Created Succefully")
            except:
                user_found = User.objects.get(username=username)
                if user_found is not None:
                    return HttpResponse("User Alreay Exist")
                else:
                    return HttpResponse("User Not Created Successfully")    
        else:
            return HttpResponse("User Not Created Successfully Form Input Not Valid")  

    context = {"myForm":myForm,"profileForm":profileForm}
    return render(request,"registerPage.html",context)








#*/> Logout EndPoint API
@login_required(login_url='loginPage')
def logoutPage(request):
    msg = "Logged as {} Succefully"
    msg = msg.format(request.user.username)
    logout(request)
    return redirect("loginPage")






#*/> Change password Reset EndPoint API
@userAlreadyAuthenticated
@userAllowedChangePassword
def ChangePassword(request,pk):
    if request.method == "POST":
        new_password = request.POST.get("new_password")
        new_password1 = request.POST.get("new_password1")
        
        if new_password == new_password1:
            user = User.objects.get(last_login=str(pk))
            user.set_password(new_password)
            user.save()
            login(request,user)
            return redirect("logoutPage")
        #/ Not Submitting The Form Until The Passwords Matches    
    return render(request,"changePassword.html")





#*/> Contact Page EndPoint API
def contactPage(request):
    if request.method == "POST":
        username_msg = request.POST.get("username_msg")
        email_msg = request.POST.get("email_msg")
        subject_msg = request.POST.get("subject_msg")
        content_msg = request.POST.get("content_msg")
        try:
            msg = InboxMessages.objects.create(username=username_msg,email=email_msg,subject=subject_msg,message=content_msg)
            msg.save()
            return HttpResponse("Your Message Has Been Sent Succefully")
        except:
            return HttpResponse("Your Message Hasn't Been Sent")
    return render(request,"contactPage.html")






#*/> Send Mail EndPoint API
def sendMail(request):
    return HttpResponse("Good")