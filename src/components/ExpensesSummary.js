import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


const ExpensesSummary = ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense': 'expenses';
    const formattedExpensesTotal = numeral(expenseTotal).format('$0,0.00');
    return(
        <div>
            <h2>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal} </h2>
        </div>
    )

};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);