import uuid from 'uuid';

//ADD_EXPENSE 
export const addExpense = ({
    desc='', 
    note='', 
    amount=0,
    createdAt=0
    } = {}
) => ({
type: 'ADD_EXPENSE',
expense: {
    id: uuid(),
    desc,
    note,
    amount,
    createdAt
}

});

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