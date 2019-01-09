// Expenses Reducer
const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
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
           });

           case 'SET_EXPENSE' :
               
                return action.expenses

            
        default:
            return state;
    }
};