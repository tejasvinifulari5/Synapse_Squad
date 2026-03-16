import os
import firebase_admin
from firebase_admin import credentials, db

base_dir = os.path.dirname(__file__)
cred_path = os.path.join(base_dir, "serviceAccountKey.json")

cred = credentials.Certificate(cred_path)

firebase_admin.initialize_app(cred, {
    "databaseURL": "https://synapse-squad-default-rtdb.firebaseio.com/"
})