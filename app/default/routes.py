from . import default
from flask import json
from flask import request,jsonify,make_response
from flask import Flask
from flask_cors import CORS,cross_origin
#///////////////////////////////////////////////
# for mongo
import pymongo
connection = pymongo.MongoClient('mongodb://jarvis:tiger@ds213229.mlab.com:13229/jarvis1', 123456)
mongo = connection['jarvis1']
mongo.authenticate('jarvis', 'tiger')
#//////////////////////////////////////////

CORS(default)

@default.route('/')
def home():
    # return "Its working!!"
    return default.send_static_file('index.html')

@default.route('/home')
def home1():
    hell_msg={'a':'asd','b':'qwe'}
    return json.dumps(hell_msg) #we can use jsonify here as well

@default.route('/login', methods = ['POST'])
def login():
    if request.method == 'POST':
        responseObject ={}
        json_data = request.get_json()
        email=json_data.get('email')
        password=json_data.get('password')
        #here comes the algo for login
        users= mongo.users
        u = users.find_one({'name': email})
        try:
            if u is not None:
                if u['pwd'] == password:
                    responseObject = {
                            'status': 'success',
                            'message': 'Successfully logged in.'
                        }
                else:
                    responseObject = {
                            'status': 'failure',
                            'message': 'Username or Password Incorrect'
                        }
            else:
                responseObject = {
                        'status': 'failure',
                        'message': 'Username or Password Incorrect'
                    }
        except Exception as e:
            print str(e)
        return jsonify(responseObject)

@default.route('/register', methods = ['POST'])
def register():
    if request.method == 'POST':
        responseObject={}
        json_data = request.get_json()
        fname = json_data.get('fname')
        lname = json_data.get('lname')
        email=json_data.get('email')
        password=json_data.get('password')
        try:
            user= mongo.users
            user.insert({'fname':fname,'lname':lname,'name':email,'pwd':password})
            print "mongo document inserted"
            responseObject = {
                    'status': 'success',
                    'message': 'Successfully registered.'
                }
        except Exception as e:
            print "Exception: "+str(e)

        return jsonify(responseObject)
