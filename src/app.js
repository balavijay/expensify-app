import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import moment from 'moment';


import './firebase/firebase';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';




const store = configureStore();


 
// store.subscribe(()=> {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log("Inside Subscribe");
//     console.log(visibleExpenses);
    
// });

const now = moment().valueOf();

// const expenseOne = store.dispatch(addExpense({desc:'Water Bill', amount:4500, createdAt: now }));
// const expenseTwo = store.dispatch(addExpense({desc:'Gas Bill', amount:100, createdAt: now}));
// const expenseThree = store.dispatch(addExpense({desc:'Juice', amount:104000, createdAt: now}));

store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter('bil'));
}, 1000);

setTimeout(() => {
    store.dispatch(setTextFilter(''));
}, 2000);



const jsx = (
    <Provider store={store} >
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app')); 
