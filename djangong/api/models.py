from __future__ import unicode_literals

from django.db import models
from django.db.models import permalink

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()

    def __str__(self):
        return self.title

    def __unicode__(self):
        return '%s' % self.title
