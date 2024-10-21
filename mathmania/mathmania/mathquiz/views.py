from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import datetime
import json

userData ={}
# Create your views here.

def home_page(request):
  template = loader.get_template('index.html')
  return HttpResponse(template.render())

def add(request):
  print(request.POST)
  context={
     
  }
  return render(request, "addition_quiz.html", context=context)

@csrf_exempt  
def submitSingAdd(request):
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
    context = {'problemList' : parsedData}
    
    return render(request, 'addition_answers.html', context)

