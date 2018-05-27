from flask import Flask
from flask import session, render_template, jsonify, url_for, flash, request, redirect
import os

import string, random, json
import requests
from routes import *



UPLOAD_FOLDER = '/static/uploads'
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'mp4'])

app= Flask(__name__, static_url_path='/static')
#for uploading a file
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def home():
    # return "jasdajs"
    return render_template('main2.html')


if __name__ == '__main__':
    app.secret_key = 'super secret key'
    app.debug = True
    port = int(os.environ.get('PORT',5000))
    app.run(host = '0.0.0.0', port = port)
