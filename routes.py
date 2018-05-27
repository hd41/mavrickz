from project import app
from flask import json,render_template
from flask import request,jsonify,make_response,send_from_directory
from flask import Flask
from flask_cors import CORS,cross_origin
import pymongo
import os
from flask import Flask, request, redirect, url_for
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = '/uploads'
ALLOWED_EXTENSIONS = set(['mp4'])

connection = pymongo.MongoClient('mongodb://jarvis:tiger@ds213229.mlab.com:13229/jarvis1', 123456)
mongo = connection['jarvis1']
mongo.authenticate('jarvis', 'tiger')
#//////////////////////////////////////////

CORS(app)

# @app.route('/')
# def home():
#     return "jasdajs"
#     # return render_template('main2.html')

@app.route('/home')
def home1():
    hell_msg={'a':'asd','b':'qwe'}
    return json.dumps(hell_msg) #we can use jsonify here as well

@app.route('/get_data_for_upload')
def get_data():
    items= mongo.items
    u = items.distinct('parent')
    tmp= []
    for i in u:
        tmp2=[]
        for ind in items.find({'parent':i}):
            tmp2.append(ind['sequence'])
        tmp.append(max(tmp2))
    responseObject={
        "data":u,
        "max_ser":tmp
    }
    return jsonify(responseObject)

@app.route('/upload', methods = ['POST'])
def upload():
    if request.method == 'POST':
        if 'item_raw' not in request.files:
            return redirect(request.url)

        file = request.files['item_raw']
        name = request.form['name']
        des = request.form['description']
        cat = request.form['category']
        par = request.form['parent']
        seq = request.form['seq']
        aut = request.form['author']

        if file.filename == '':
            flash('No selected file')
            return "no file selected"
        if file:
            filename = secure_filename(file.filename)
            env_add = "D:\Cultures12\uploads"
            url = os.path.join(env_add,filename)
            file.save(os.path.join(env_add,filename))
            # inserting into mongo
            try:
                item= mongo.items
                item.insert({'name':name,'description':des,'category':cat,'parent':par,'sequence':seq,'author':aut,'url':url})
                print "mongo document inserted"
                responseObject = {
                        'status': 'success',
                        'message': 'Successfully entered.'
                    }
            except Exception as e:
                print "Exception: "+str(e)
        return jsonify(responseObject)

@app.route('/login', methods = ['POST'])
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

@app.route('/register', methods = ['POST'])
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
