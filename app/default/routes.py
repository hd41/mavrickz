from . import default
from flask import json

@default.route('/')
def home():
    # return "Its working!!"
    return default.send_static_file('index.html')

@default.route('/home')
def home1():
    hell_msg={'a':'asd','b':'qwe'}
    return json.dumps(hell_msg) #we can use jsonify here as well
