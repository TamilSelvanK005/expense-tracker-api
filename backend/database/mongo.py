from pymongo import MongoClient
from pymongo.errors import ServerSelectionTimeoutError

try:
    client = MongoClient("mongodb://localhost:27017", serverSelectionTimeoutMS=5000)
    # Verify connection
    client.admin.command('ping')
    db = client["expense_db"]
    collection = db["expenses"]
    print("✅ MongoDB Connected Successfully!")
except ServerSelectionTimeoutError as e:
    print(f"❌ MongoDB Connection Error: {e}")
    print("⚠️  Make sure MongoDB is running on localhost:27017")
    raise
except Exception as e:
    print(f"❌ Unexpected Error: {e}")
    raise