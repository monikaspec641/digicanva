# app.py
from flask import Flask, jsonify
from flask_cors import CORS  # Allow Cross-Origin Resource Sharing
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
client = MongoClient('mongodb://localhost:27017/')
db = client['digicanva']  # Replace 'your_database' with your actual database name
collection = db['blogs']  # Replace 'blogs' with your actual collection name

@app.route('/blog/<blog_id>', methods=['GET'])
def get_blog(blog_id):
    blog = collection.find_one({'_id': blog_id})
    if blog:
        response = {
            'id': str(blog['_id']),
            'name': blog['name'],
            'tag': blog['tag']
        }
        return jsonify(response)
    else:
        return jsonify({'error': 'Blog not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)
