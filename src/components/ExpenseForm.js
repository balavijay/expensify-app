import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log(now.format('Do MMM, YYYY'));

class ExpenseForm extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            desc: props.expense ? props.expense.desc : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused:false,
            error: ''
        };

    }
   
    onDescChange = (e) => {
        const desc = e.target.value;
        this.setState(()=> ({ desc }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({ amount  }));
        }
        
    }

    onNoteChange = (e) => {
        e.persist();
        this.setState(()=> ({ note: e.target.value }));
    }

    onDateChange = (createdAt) => {
        if(createdAt) {
            this.setState(()=> ({  createdAt  }));
        }
        
    };

    onFocusChange = ({focused}) => {
        this.setState(()=> ({
            calenderFocused: focused
        }))

    }
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.desc || !this.state.amount){
            this.setState(()=>({error: 'Please provide description n/or amout'}));
        }
        else {
            console.log('Submit it ');
            this.setState(()=> ({error:''}));

            this.props.onSubmit({
                desc: this.state.desc,
                amount: parseFloat(this.state.amount, 10 ),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
            <div>
               {this.state.error && <p> {this.state.error} </p> } 
                <form onSubmit={this.onSubmit }>
                    <input type="text" placeholder="Enter Descrpition  "
                    autoFocus="" value={this.state.desc} onChange={this.onDescChange} />

                    <input type="text" placeholder="Amount " value={this.state.amount} onChange={this.onAmountChange}  />

                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=> false }
                    />

                    <textarea placeholder="Add a note" value={this.state.note} onChange={this.onNoteChange}></textarea>

                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;