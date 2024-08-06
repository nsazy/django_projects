from django.http import HttpResponse,HttpResponseRedirect
from django.template import loader
from django.urls import reverse
from .models import Member

#def members(request):
 #template = loader.get_template('myfirst.html')
 # return HttpResponse(template.render())
#  mymembers = Member.objects.all().values()
 # template = loader.get_template('all_members.html')
 # context = {
  #  'mymembers': mymembers,
 # }
 # return HttpResponse(template.render(context, request))

def index(request):
  mymembers = Member.objects.all().values()
  template = loader.get_template('all_members.html')
  context = {
    'mymembers': mymembers,
  }
  return HttpResponse(template.render(context, request))
  
def add(request):
  template = loader.get_template('add.html')
  return HttpResponse(template.render({}, request))

def addrecord(request):
  x = request.POST['first']
  y = request.POST['last']
  a = request.POST['phone']
  b = request.POST['joineddate']
  member = Member(firstname=x, lastname=y, phone=a, joined_date=b)
  member.save()
  return HttpResponseRedirect(reverse('index'))

def details(request, id):
  mymember = Member.objects.get(id=id)
  template = loader.get_template('details.html')
  context = {
    'mymember': mymember,
  }
  return HttpResponse(template.render(context, request))

def main(request):
  template = loader.get_template('main.html')
  return HttpResponse(template.render())

def testing(request):
  mymembers = Member.objects.all().values()
  template = loader.get_template('template.html')
  context = {
    'mymembers': mymembers,   
  }
  return HttpResponse(template.render(context, request))
