from fastapi import APIRouter
from models.expense_model import Expense
from controllers.expense_controller import *

router = APIRouter()

@router.get("/expenses")
def get_expenses():
    return get_all_expenses()

@router.post("/expenses")
def add_expense(expense: Expense):
    return create_expense(expense.dict())

@router.delete("/expenses/{title}")
def remove_expense(title: str):
    return delete_expense(title)