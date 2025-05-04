from django.shortcuts import render

# Create your views here.
def nomee(req):
   return render(req, 'jobs/home.html', {}) 