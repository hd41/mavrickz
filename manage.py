import os
from app import create_app
from flask.ext.script import Manager

app = create_app(os.getenv('FLASK_CONFIG') or 'default')
manager = Manager(app)

if __name__ == '__main__':
	port = int(os.environ.get('PORT',5000))
	app.run(port=port)
	# manager.run()
