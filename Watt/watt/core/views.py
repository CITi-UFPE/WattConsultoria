from django.shortcuts import render, redirect
from .forms import *
from .models import *
from django.http import HttpResponseRedirect, HttpResponse
from templated_email import send_templated_mail

from django.views.generic import (
    FormView,
)
from django.core.urlresolvers import reverse_lazy
from django.conf import settings

# Create your views here.
'''class ContatoView(FormView):
    template_name = 'index.html'
    success_url = reverse_lazy('core:index')
    form_class = contatoForm

    def form_valid(self, form):
        nome = form.cleaned_data['nome']
        telefone = form.cleaned_data['telefone']
        email = form.cleaned_data['email']
        assunto = form.cleaned_data['assunto']
        mensagem = form.cleaned_data['mensagem']
        
        mail = EmailMultiAlternatives(
            subject=assunto,
            body=mensagem,
            from_email=email,
            to=[settings.RECIPIENT_EMAIL],
        )
        mail.send()
        return super(ContatoView, self).form_valid(form)'''

def index(request):
    if request.method == 'POST':
        
        nome = request.POST.get('nome')
        telefone = request.POST.get('telefone')
        email = request.POST.get('email')
        assunto = request.POST.get('assunto')
        mensagem = request.POST.get('mensagem')
        send_templated_mail(
        template_name='email',
        from_email=email,
        recipient_list=['victor_aguiar97@hotmail.com'],
        context={
            'nome': nome,
            'telefone': telefone,
            'email': email,
            'assunto': assunto,
            'mensagem': mensagem
        },
        )  
    return render(
        request, 'index.html',
    )