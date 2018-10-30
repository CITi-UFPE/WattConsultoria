from django.shortcuts import render, redirect
from .models import *
from django.http import HttpResponseRedirect, HttpResponse
from templated_email import send_templated_mail
#from django.core.urlresolvers import reverse_lazy
from django.urls import reverse_lazy #(substituir por este, caso nao execute corretamente pelo cmd)
from django.conf import settings

# Create your views here.
def index(request):
    if request.method == 'POST':
        if 'geral' in request.POST:
            nome = request.POST.get('nome')
            telefone = request.POST.get('telefone')
            email = request.POST.get('email')
            assunto = request.POST.get('assunto')
            mensagem = request.POST.get('mensagem')
            send_templated_mail(
            template_name='email',
            from_email=email,
            recipient_list=['marketing@wattconsultoria.com.br'],
            context={
                'nome': nome,
                'telefone': telefone,
                'email': email,
                'assunto': assunto,
                'mensagem': mensagem
            },
            )
            return HttpResponseRedirect(reverse_lazy("home"))
        elif 'especifico' in request.POST:
            nome = request.POST.get('nomeModal')
            telefone = request.POST.get('telModal')
            email = request.POST.get('emailModal')
            assunto = request.POST.get('assuntoModal')
            send_templated_mail(
            template_name='modal',
            from_email=email,
            recipient_list=['marketing@wattconsultoria.com.br'],
            context={
                'nome': nome,
                'telefone': telefone,
                'email': email,
                'assunto': assunto,
            },
            )
            return HttpResponseRedirect(reverse_lazy("home"))
    return render(
        request, 'index.html',
    )