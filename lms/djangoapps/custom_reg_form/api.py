# -*- coding:utf-8 -*-
import logging
from django.conf import settings
from django.db import models
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_http_methods
from .models import ExtraInfo
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt
from django.contrib.auth.decorators import login_required
from util.json_request import JsonResponse
from django.http.response import HttpResponseBadRequest
from zeep import Client
from bs4 import BeautifulSoup
import re

log = logging.getLogger(__name__)

def validate_rut_caja(request,rut):
	if request.method == 'GET':
		try:
			#client = Client('http://wservicesqa.cajalosandes.cl/wsConvenios/services/WebServiceConvenios?wsdl')
			client = Client('http://wservices.cajalosandes.cl/wsConvenios/services/WebServiceConvenios?wsdl')
			#data = client.service.requestPrestador(rutPrestador='609100001',tipoPrestador='2',usuario='user',clave='pass',rutConsulta=re.sub('\D', '', rut))
			data = client.service.requestPrestador(rutPrestador='609100001',tipoPrestador='2',usuario='wsConvenios',clave='L0s1nd3s',rutConsulta=re.sub('\DKk', '', rut))
			result = BeautifulSoup(data,'xml').find('codigoMensaje').string
			return JsonResponse({'result':True if result == '100' else False})
		except Exception as e:
			return HttpResponseBadRequest(u'Ha ocurrido un error')
	else:
		return HttpResponseBadRequest(u'Ha ocurrido un error')
