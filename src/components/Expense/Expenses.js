import "./Expenses.css";
import Expenseitem from "./Expenseitem";
import React from 'react';


const Expenses=(props)=>{
return (
    <div className="expenses">
        {
            props.items.map(
                expense=>(
                    <Expenseitem 
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount} 
                     />
                    )
            )
        }
    </div>
);
}
export default Expenses;