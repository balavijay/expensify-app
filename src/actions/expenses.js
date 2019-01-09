import uuid from 'uuid';
import db from '../firebase/firebase';

//ADD_EXPENSE 
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        const {
            desc='', 
            note='', 
            amount=0,
            createdAt=0
        } = expenseData;

        const expense = { desc, note, amount, createdAt };

        db.ref(`users/${uid}/expenses`).push(expense).then((ref)=> {
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

export const startRemoveExpense = ({ id }) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

         db.ref(`users/${uid}/expenses/${id}`).remove().then(() =>{
             dispatch(removeExpense({ id }));
         })
    }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
type: 'EDIT_EXPENSE', 
id,
updates

});

export const startEditExpense = (id, updates) => {
    return(dispatch, getState) => {
        const uid = getState().auth.uid;
        return db.ref(`users/${uid}/expenses/${id}`).update(updates).then(() =>  {
            dispatch(editExpense( id, updates ));
        })
    }
}

// SET_EXPENSE
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSE',
    expenses
});


export const startSetExpenses = () => {

    return (dispatch, getState) => {

        const uid = getState().auth.uid;

        return db.ref(`users/${uid}/expenses`).once('value')
        .then((snapshot) => {
            const expenses = [];

            snapshot.forEach((expense) => {

                expenses.push({
                    id: expense.key,
                    ...expense.val()
                });
            });

            dispatch(setExpenses(expenses));

        })
    }

}