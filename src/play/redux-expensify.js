import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

console.log('redux-expensify.js');

//ADD_EXPENSE 
const addExpense = ({
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
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    expense:{
        id
    }
})

// Edit Expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE', 
    id,
    updates
    
})

// Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE' :
           return [
               ...state,
               action.expense
           ];


        case 'REMOVE_EXPENSE' :
            const newState =  state.filter((item) => action.expense.id !== item.id);
            return newState;

        case 'EDIT_EXPENSE' :
           
           return state.map((item)=> {
                if(item.id === action.id) {
                    return {
                        ...item,
                        ...action.updates
                    }

                } else{
                    return item;
                }
           })
            
        default:
            return state;
    }
};

const setTextFilter = (text='') => ({
    type:'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT',
    sortBy:'amount'
});
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})



// Filter Reducer 
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            }

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy
            }

        case 'SET_START_DATE' :
            return {
                ...state,
                startDate: action.startDate
            }

        case 'SET_END_DATE' :
            return {
                ...state,
                endDate: action.endDate
            }
            
        default:
            return state;
    }
};

// Get visible expense 

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {

    return expenses.filter((expense)=>{

        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.desc.toLowerCase().includes(text.toLowerCase());



        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    })

}

// Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
    );


store.subscribe(()=> {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log("Inside Subscribe");
    console.log(visibleExpenses);
    
});

const expenseOne = store.dispatch(addExpense({desc:'Rent', amount:200, createdAt: -1000 }));
const expenseTwo = store.dispatch(addExpense({desc:'Juice', amount:100, createdAt: 1000}));



//store.dispatch(removeExpense({ id: expenseOne.expense.id }));

//store.dispatch(editExpense(expenseTwo.expense.id, {desc:'Salad', note:'Filling & Tasty', amount: 20 } ));

//store.dispatch(setTextFilter('re'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
store.dispatch(sortByAmount());
 store.dispatch(sortByDate());


// store.dispatch(setStartDate(0));
//  store.dispatch(setStartDate(10));
// store.dispatch(setEndDate(900));
// store.dispatch(setStartDate( ));

const demoState = {
    expenses : [{
        id:'poi',
        desc: 'Jan Month',
        note: 'This was the final',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent', 
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'Jen',
    age: 25
};

const user1 = {
    ...user,
    loc: 'Blr',
    age: 10
}; 

//console.log({user1});
