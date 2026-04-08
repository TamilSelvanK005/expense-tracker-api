from database.mongo import collection
from utils.helpers import format_expense
from fastapi import HTTPException
 # Expense Controller: Handles business logic for expenses 
def get_all_expenses():
    try:
        data = collection.find()
        expenses = [format_expense(d) for d in data]
        return expenses
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching expenses: {str(e)}")
# Create and Delete functions
def create_expense(expense):
    try:
        result = collection.insert_one(expense)
        return {"msg": "Expense Added", "id": str(result.inserted_id)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error creating expense: {str(e)}")

def delete_expense(title):
    try:
        result = collection.delete_one({"title": title})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail=f"Expense with title '{title}' not found")
        return {"msg": "Deleted successfully"}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error deleting expense: {str(e)}")