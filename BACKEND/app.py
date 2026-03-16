from flask import Flask, render_template, request, redirect, session
import firebase_config
from firebase_admin import auth, db

app = Flask(__name__)
app.secret_key = "your_secret_key_here"  # Replace with a strong secret

# Home / Welcome Page
@app.route("/")
def home():
    return render_template("welcome.html")

# Register Route
@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "GET":
        return render_template("register.html")

    try:
        email = request.form["email"]
        password = request.form["password"]
        name = request.form["name"]

        # Create user in Firebase
        user = auth.create_user(
            email=email,
            password=password,
            display_name=name
        )

        # Store additional info in Realtime DB
        ref = db.reference("users")
        ref.push({
            "name": name,
            "email": email
        })

        # Save user session
        session["user"] = user.uid

        print("User Created Successfully:", email)
        return redirect("/dashboard")

    except Exception as e:
        print("Error occurred:", e)
        return str(e)

# Login Route
@app.route("/login", methods=["GET", "POST"])
def login():
    error = None  # Initialize error message

    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]

        try:
            # Check if user exists
            user = auth.get_user_by_email(email)

            # NOTE: Firebase Admin SDK cannot verify passwords directly
            # For now, we just check if the user exists
            session["user"] = user.uid
            print("Login successful:", email)
            return redirect("/dashboard")

        except Exception as e:
            print("Login failed:", e)
            error = "Invalid email. Please register first."
    return render_template("login.html",error=error)

# Protected Dashboard
@app.route("/dashboard")
def dashboard():
    if "user" not in session:
        return redirect("/login")
    return render_template("dashboard.html")

# Logout Route
@app.route("/logout")
def logout():
    session.pop("user", None)
    return redirect("/")

if __name__ == "__main__":
    app.run(debug=True)