from flask import Flask
#from flask_sqlalchemy import SQLAlchemy
from routes.description import description_bp 
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

# App Configuration:
#app.config.from_object('config.Config')

# to initialize database:
#db = SQLAlchemy(app)

# to register blueprints (routes):
app.register_blueprint(description_bp, url_prefix='/description')

if __name__ == '__main__':
    app.run(debug=True)
