def login_user(username, password):
    if username == "admin" and password == "1234":
        return {"msg": "Login success"}
    return {"error": "Invalid credentials"}