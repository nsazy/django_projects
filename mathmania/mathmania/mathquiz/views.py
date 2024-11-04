from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render, redirect
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




userData ={}
# Create your views here.

# - Create a User
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
   
   context = {'loginform':form}

   return render(request, "mathquiz/my_login.html", context=context)

def user_logout(request):

   auth.logout(request)

   return redirect("home")


def home(request):

   return render(request, 'mathquiz/home.html')

def index(request):
  template = loader.get_template('mathquiz/index.html')
  return HttpResponse(template.render())

def add(request):
  print(request.POST)
  add = "One"
  context ={
     'add': add
  }
  
  return render(request, "addition_quiz.html", context=context)
def addTwo(request):
  print(request.POST)
  add = "Two"
  context ={
     'add': add
  }
  
  return render(request, "addition_quiz.html", context=context)

@csrf_exempt  
def submitSingAdd(request):
    print(request)
    parsedData = []
    current_time = datetime.datetime.now()
    if request.method == 'POST':
       #data = json.loads(request.body)
       data = json.loads(request.body.decode('utf-8'))
    
    
       for item in data:
            numerator = item.get('numerator')
            denominator = item.get('denominator')
            answer = item.get('answer')
            answerValue = item.get('answerValue')
            userData = {'numerator':item.get('numerator'), 'denominator':item.get('denominator'), 'answer':item.get('answer'), 'answerValue':item.get('answerValue')}
            parsedData.append(userData)    
           #userData['numerator'] = item.get('numerator')
           #userData['denominator'] = item.get('denominator')
          # userData['answer'] = item.get('answer')
           #rint(f"Numerator: {userData['numerator']}, Denom: {userData['denominator']}, Answer: {userData['answer']}")
                ##print(f"Numerator: {'numerator'}, Denom: {'denominator'}, Answer: {'answer'}")
           
               
           
            print(parsedData)
            
            #json_array = JsonResponse(parsedData, encoder=DjangoJSONEncoder,safe=False)
            #print("JSON array: ", json_array)
            
    context = {'problemList' : parsedData}
    
    return render(request, 'addition_answers.html', context)

