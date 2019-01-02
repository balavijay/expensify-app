import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, desc, amount, createdAt} , props) =>  (
       <div>
         <Link to={`/edit/${id}`}><h3> {desc}</h3></Link> 
         <p>{numeral(amount).format('$0,0.00')} - {moment(createdAt).format('Do-MMMM-YYYY')}  </p>
         
       </div>
   ); 

export default ExpenseListItem;

