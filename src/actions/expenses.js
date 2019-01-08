import uuid from 'uuid';
import db from '../firebase/firebase';

//ADD_EXPENSE 
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            desc='', 
            note='', 
            amount=0,
            createdAt=0
        } = expenseData;

        const expense = { desc, note, amount, createdAt };

        db.ref('expenses').push(expense).then((ref)=> {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })

    };
};

// REMOVE_EXPENSE 
export const removeExpense = ({ id } = {}) => ({
type: 'REMOVE_EXPENSE',
expense:{
    id
}
});

// Edit Expense
export const editExpense = (id, updates) => ({
type: 'EDIT_EXPENSE', 
id,
updates

});