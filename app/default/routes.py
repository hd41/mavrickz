from . import default
from flask import json
from flask import request,jsonify,make_response
from flask import Flask
from flask_cors import CORS,cross_origin
import pymongo
import os
from flask import Flask, request, redirect, url_for
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = '/uploads'
ALLOWED_EXTENSIONS = set(['mp4', 'jpg', 'jpeg'])

default.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

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

@default.route('/upload',methods =['POST'])
def upload():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            return redirect(request.url)   #here we have to respond to file not found in post req
        file = request.files['file']
        # if user does not select file, browser also
        # submit a empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return redirect(url_for('uploaded_file',
                                    filename=filename))


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
                            'name':u['fname'],
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
