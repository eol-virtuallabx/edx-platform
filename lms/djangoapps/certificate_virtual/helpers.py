# -*- coding:utf-8 -*-
from .models import CertificateVirtual
from opaque_keys.edx import locator

def get_cert_adic_text(course_id):
    try:
        course = locator.CourseLocator.from_string(course_id)
        custom_cert =  CertificateVirtual.objects.get(course_id=course)
        return custom_cert.AdicText
    except CertificateVirtual.DoesNotExist:
        return ''

