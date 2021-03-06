# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2017-12-16 00:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Contato',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100, verbose_name='Nome')),
                ('telefone', models.CharField(max_length=100, verbose_name='Telefone')),
                ('email', models.EmailField(max_length=100, verbose_name='Email')),
                ('assunto', models.CharField(max_length=100, verbose_name='Assunto')),
                ('mensagem', models.CharField(max_length=100, verbose_name='Mensagem')),
            ],
        ),
    ]
