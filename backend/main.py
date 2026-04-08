from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database.mongo import client
from routes.expense_routes import router as expense_router

# Create FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(expense_router)

@app.get("/")
def read_root():
    return {"message": "Expense Tracker API is running"}

@app.get("/health")
def health_check():
    try:
        # Check MongoDB connection
        client.admin.command('ping')
        return {"status": "healthy", "mongo": "connected"}
    except Exception as e:
        return {"status": "unhealthy", "error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
