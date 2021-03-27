from django.shortcuts import render
from rest_framework.views import APIView
# Create your views here.
import twint
import nest_asyncio
from django.conf import settings
import pandas as pd
import json
from rest_framework.response import Response
class TwitterScrapper(APIView):

    def get(self,request,topic):
        c = twint.Config()
        nest_asyncio.apply()
        c.Search = topic
        c.Min_likes = 1000
        c.Limit=200
        c.Store_csv = True
        c.Output = settings.MEDIA_ROOT + topic+ ".csv"
        c.Lang="en"
        twint.run.Search(c)
        df=pd.read_csv(settings.MEDIA_ROOT+ topic+ ".csv")
        json_records=df["tweet"].reset_index().to_json(orient='records')
        data = []
        data = json.loads(json_records)
        return Response({'data':data})