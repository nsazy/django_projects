from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

# Create your views here.

def home_page(request):
  template = loader.get_template('index.html')
  return HttpResponse(template.render())

def add(request):
  print(request.POST)
  context={}
  return render(request, "addition_quiz.html", context=context)
  
def submitAdd(request):
  response="""<html><body>
  <p>Asnwer for question 1 is """ +request.GET['ansInput1']+"""</p>
  </body></html>"""
  return HttpResponse(response)

