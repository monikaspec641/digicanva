# app.py
from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)
client = MongoClient('mongodb://localhost:27017/')
db = client['digicanva']
collection = db['Blogs']

@app.route('/blog/<blog_name>', methods=['GET'])
def get_blog(blog_name):
    blog = collection.find_one({'name': blog_name})
    if blog:
        response = {
            'name': blog['name'],
            'tag': blog['tag']
        }
        return jsonify(response)
    else:
        return jsonify({'error': 'Blog not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
