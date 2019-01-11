import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import {Link} from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';


const ExpensesSummary = ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense': 'expenses';
    const formattedExpensesTotal = numeral(expenseTotal).format('$0,0.00');
    return(
        <div className="page-header">
            <div className="content-container">
                <h2 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span> </h2>
                <div className="page-header__actions">
                    <Link to="/create" className="button" > Add Expense </Link>
                </div>
            </div>
            
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