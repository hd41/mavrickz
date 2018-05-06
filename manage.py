import os
from app import create_app
from flask.ext.script import Manager

from config import ProductionConfig

# app = create_app(ProductionConfig)
# if __name__ == "__main__":
#     app.run(host='0.0.0.0', port=app.config['PORT'])

app = create_app(os.getenv('FLASK_CONFIG') or 'default')
# app.config['SERVER_NAME'] = 'https://mavrickz.herokuapp.com'
manager = Manager(app)

if __name__ == '__main__':
	port = int(os.environ.get("PORT", 5000))
	app.run(debug = True, host='0.0.0.0',port = port)
	# manager.run()

# web: gunicorn manage:app --timeout 10
