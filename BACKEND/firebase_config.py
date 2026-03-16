import firebase_admin
from firebase_admin import credentials, db
import os

cred_path = os.path.join(os.path.dirname(__file__), "serviceAccountKey.json")

cred = credentials.Certificate(cred_path)

firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://synapse-squad-default-rtdb.firebaseio.com/'
})