import "./Expenseitem.css";
import Expensedate from "./Expensedate";
import React from 'react';

const Expenseitem=(props)=>{
   return (
    
    < div className="expense-item">
        <Expensedate date={props.date} />
        <div className="expense-item-desc">
            <h2>{ props.title }</h2>
            <div className="expense-item-price">${props.amount}</div>
        </div>
    </div>
);
}
export default Expenseitem;