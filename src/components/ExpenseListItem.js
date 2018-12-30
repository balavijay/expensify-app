import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({ id, desc, amount, createdAt} , props) =>  (
       <div>
         <Link to={`/edit/${id}`}><h3> {desc}</h3></Link> 
         <p>{amount} -  created on ({createdAt}) </p>
         
       </div>
   ); 

export default ExpenseListItem;

