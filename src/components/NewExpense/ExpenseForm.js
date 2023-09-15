
import './ExpenseForm.css';
 
import React, {useState} from 'react';

const ExpenseForm=(props)=>{

    const [enteredtitle, setenteredtitle]=useState();
    const [enteredamount, setenteredamount]=useState();
    const [entereddate, setentereddate]=useState();

const titlechangehandler=(event)=>{
    setenteredtitle(event.target.value);
}
const amountchangehandler=(event)=>{
    setenteredamount(event.target.value);
}
const datechangehandler=(event)=>{
    setentereddate(event.target.value);
}

const submithandler=(event)=>{
event.preventDefault();

const expenseData={
    title:enteredtitle,
    amount:enteredamount,
    date:new Date(entereddate)
}
props.onSaveExpenseData(expenseData);
console.log(expenseData);

setenteredtitle('');
setenteredamount('');
setentereddate('');
}

return (
    <form onSubmit={submithandler}>
        <div className="new-expense-controls">
            <div className="new-expense-control">
                <label>Title</label>
                <input type="text" value={enteredtitle} onChange={titlechangehandler} />
            </div>
            <div className="new-expense-control">
                <label>Amount</label>
                <input type="number" value={enteredamount} onChange={amountchangehandler} min="0.01" step="0.01"/>
            </div>
            <div className="new-expense-control">
                <label>Date</label>
                <input type="date" value={entereddate} onChange={datechangehandler} />
            </div>
        </div>
        <div className="new-expense-action">
          <button type="submit">Add Expense</button>  
        </div>
    </form>
);
}
export default ExpenseForm;