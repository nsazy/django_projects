from django.http import HttpResponse
from django.template import loader
from django.http import HttpResponseRedirect
from django.shortcuts import render, redirect
from django.urls import reverse, reverse_lazy
from django.views.decorators.csrf import csrf_exempt
from django.utils.safestring import mark_safe
import json
import datetime
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
from . forms import CreateUserForm, Loginform
# - Authentication models and functions
from django.contrib.auth.models import auth
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .decorators import unauthenticated_user
from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django.template.loader import render_to_string

from .models import Results




userData ={}
# Create your views here.

# - Create a User
@unauthenticated_user
def register(request):
   
   form = CreateUserForm()

   if request.method == "POST":
      
      form = CreateUserForm(request.POST)

      if form.is_valid():
         
         form.save()

         return redirect("my_login")
    
   context = {'registerform': form}

   return render(request, "mathquiz/register.html", context=context)

# - Authenticate User
@unauthenticated_user
def my_login(request):

   form = Loginform()

   if request.method == 'POST':

      form = Loginform(request, data=request.POST)#data is sent to server as a post request

      if form.is_valid():

         username = request.POST.get('username')
         password = request.POST.get('password')

         user = authenticate(request, username=username, password=password)

         #if user exists
         if user is not None:

            #allow user to login with the request
            auth.login(request, user)
            return redirect("index")
         else:
            messages.info(request, "Usernmae and/or password not correct.")
            return render(request, "mathquiz/my_login.html", context=context)
   
   context = {'loginform':form}

   return render(request, "mathquiz/my_login.html", context=context)

def user_logout(request):

   auth.logout(request)

   return redirect("home")


def home(request):

   return render(request, 'mathquiz/home.html')

@login_required(login_url='my_login')
def index(request):
  context={'user':request.user}
  #template = loader.get_template('mathquiz/index.html')
  #return HttpResponse(template.render())
  return render(request, 'mathquiz/index.html', context=context)

@login_required(login_url='my_login')
def add(request):
  print(request.POST)
  add = "One"
  context ={
     'add': add
  }
  
  return render(request, "mathquiz/addition_quiz.html", context=context)

@login_required(login_url='my_login')
def addTwo(request):
  print(request.POST)
  add = "Two"
  context ={
     'add': add
  }
  
  return render(request, "mathquiz/addition_quiz.html", context=context)

@login_required(login_url='my_login')
def addThree(request):
   add = "Three"
   context = {
      'add':add
   }
   return render(request, "mathquiz/addition_quiz.html", context=context)

#Subtraction quiz views 1-3
@login_required(login_url='my_login')
def subOne(request):
  print(request.POST)
  sub = "One"
  context ={
     'sub': sub
  }
  
  return render(request, "mathquiz/subtraction_quiz.html", context=context)
@login_required(login_url='my_login')
def subTwo(request):
  print(request.POST)
  sub = "Two"
  context ={
     'sub': sub
  }
  
  return render(request, "mathquiz/subtraction_quiz.html", context=context)
@login_required(login_url='my_login')
def subThree(request):
  print(request.POST)
  sub = "Three"
  context ={
     'sub': sub
  }
  
  return render(request, "mathquiz/subtraction_quiz.html", context=context)



@csrf_exempt  
def submitSingAdd(request):
    
    parsedData = []
    current_time = datetime.datetime.now()
    if request.method == 'POST':
         user_id = request.user.id
         user = User.objects.get(id=user_id)
         #print(user)
           
       #data = json.loads(request.body)
         data = json.loads(request.body.decode('utf-8'))
       
         for item in data:
         
            numerator = item.get('numerator')
            sign = item.get('sign')
            denominator = item.get('denominator')
            answer = item.get('answer')
            systemAnswer = item.get('systemAnswer')
            answerValue = item.get('answerValue')
            Results.objects.create(student=user, numerator=numerator, sign=sign, denominator=denominator, userAnswer=answer, systemAnswer=systemAnswer, answerValue=answerValue)
            
          
    return JsonResponse({"redirect":'/index'}, status=200)
@csrf_exempt  
def subSubmit(request):
     
    parsedData = []
    current_time = datetime.datetime.now()
    if request.method == 'POST':
         user_id = request.user.id
         user = User.objects.get(id=user_id)
         #print(user)
           
       #data = json.loads(request.body)
         data = json.loads(request.body.decode('utf-8'))
       
         for item in data:
         
            numerator = item.get('numerator')
            sign = item.get('sign')
            denominator = item.get('denominator')
            answer = item.get('answer')
            systemAnswer = item.get('systemAnswer')
            answerValue = item.get('answerValue')
            Results.objects.create(student=user, numerator=numerator, sign=sign, denominator=denominator, userAnswer=answer, systemAnswer=systemAnswer, answerValue=answerValue)
            
          
    return JsonResponse({"redirect":'/index'}, status=200)
@login_required(login_url='my_login')
def mulOne(request):
  print(request.POST)
  mul = "One"
  context ={
     'mul': mul
  }
  
  return render(request, "mathquiz/multiplication_quiz.html", context=context)
@login_required(login_url='my_login')
def mulTwo(request):
  print(request.POST)
  mul = "Two"
  context ={
     'mul': mul
  }
  
  return render(request, "mathquiz/multiplication_quiz.html", context=context)
@login_required(login_url='my_login')
def mulThree(request):
  print(request.POST)
  mul = "Three"
  context ={
     'mul': mul
  }
  
  return render(request, "mathquiz/multiplication_quiz.html", context=context)
@csrf_exempt  
def mulSubmit(request):
     
    parsedData = []
    current_time = datetime.datetime.now()
    if request.method == 'POST':
         user_id = request.user.id
         user = User.objects.get(id=user_id)
         #print(user)
           
       #data = json.loads(request.body)
         data = json.loads(request.body.decode('utf-8'))
       
         for item in data:
         
            numerator = item.get('numerator')
            sign = item.get('sign')
            denominator = item.get('denominator')
            answer = item.get('answer')
            systemAnswer = item.get('systemAnswer')
            answerValue = item.get('answerValue')
            Results.objects.create(student=user, numerator=numerator, sign=sign, denominator=denominator, userAnswer=answer, systemAnswer=systemAnswer, answerValue=answerValue)
            
          
    return JsonResponse({"redirect":'/index'}, status=200)

@login_required(login_url='my_login')
def divOne(request):
  print(request.POST)
  div = "One"
  context ={
     'div': div
  }
  
  return render(request, "mathquiz/division_quiz.html", context=context)
@login_required(login_url='my_login')
def divTwo(request):
  print(request.POST)
  div = "Two"
  context ={
     'div': div
  }
  
  return render(request, "mathquiz/division_quiz.html", context=context)
@login_required(login_url='my_login')
def divThree(request):
  print(request.POST)
  div = "Three"
  context ={
     'div':div
  }
  
  return render(request, "mathquiz/division_quiz.html", context=context)
@csrf_exempt  
def divSubmit(request):
     
    parsedData = []
    current_time = datetime.datetime.now()
    if request.method == 'POST':
         user_id = request.user.id
         user = User.objects.get(id=user_id)
         #print(user)
           
       #data = json.loads(request.body)
         data = json.loads(request.body.decode('utf-8'))
       
         for item in data:
         
            numerator = item.get('numerator')
            sign = item.get('sign')
            denominator = item.get('denominator')
            answer = item.get('answer')
            systemAnswer = item.get('systemAnswer')
            answerValue = item.get('answerValue')
            Results.objects.create(student=user, numerator=numerator, sign=sign, denominator=denominator, userAnswer=answer, systemAnswer=systemAnswer, answerValue=answerValue)
    request.session['data'] = data
    #return JsonResponse({"redirect":'/index'}, status=200)
    return JsonResponse({"redirect":'/displayDivAnswers/'})


def displayDivAnswers(request):
   #json_data = request.session.get('json_data')
   data = request.session.get('data')
   print(data)
   #data = json.loads(json_data)
   return render(request, 'mathquiz/answers.html', {'data':data})

def getResults(request):
   # user = request.user
   # results = Results.objects.filter(student_id = user)
   # context= {
   #    'results': results
   # }
   # for x in results:
   #    print(x.userAnswer)
   #    print(x.denominator)
   

   return render(request, "mathquiz/math_results.html")
   #return HttpResponse("Hello")