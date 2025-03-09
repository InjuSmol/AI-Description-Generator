from flask import Blueprint, request, jsonify
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
from AI_Gen.generate_description import generate_description

description_bp = Blueprint('description', __name__)

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads/'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

@description_bp.route('/generate', methods=['POST'])
def generate_description_route():
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided"}), 400
    image = request.files['image']
    # TODO: add handling empty metadata: 
    '''
    material = request.form['material']
    type = request.form['type']
    id = request.form['id']
    brand = request.form['brand']
    gem = request.form['gem']
    '''
    metadata = {
    "material": request.form.get("material", ""),
    "type": request.form.get("type", ""),
    "id": request.form.get("id", ""),
    "brand": request.form.get("brand", ""),
    "gem": request.form.get("gem", "")
}
    # Save the image temporarily
    image_filename = secure_filename(image.filename)
    image_path = os.path.join(app.config['UPLOAD_FOLDER'], image_filename)
    image.save(image_path)
    description = generate_description(image_path, metadata) #material, type, id, brand, gem)

    return jsonify({"description": description})
