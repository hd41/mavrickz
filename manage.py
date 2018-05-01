import os
from app import create_app
from flask.ext.script import Manager

app = create_app(os.getenv('FLASK_CONFIG') or 'default')
manager = Manager(app)

if __name__ == '__main__':
	port = int(os.environ.get("PORT", 5000))
	# app.run(host='127.0.0.1',port = port)
	manager.run()