import React from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
const  ExpenseItem = (props) => {
   //const expenseDate = new Date(2021, 4, 13);
   //const expenseTitle = 'Car Insurance';
   //const expenseAmount = 294.67;
    return (
        <li>
            <Card className="expense-item"> 
                <ExpenseDate date={props.date}/>       
                <div className="expense-item__description">  
                    <h2>{props.title}</h2>
                <div className ="expense-item__price">${props.amount}</div>
                </div>
  
            </Card>
        </li>
    );
};

export default ExpenseItem;