import Expenses from './components/Expense/Expenses';
import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';

let DummyExpense=[{
    id:"e1",
    title: "school fee",
     amount: 250,
     date: new Date(2023,5,23)
},
{
    id:"e2",
    title: "House Rent",
     amount: 2250,
     date: new Date(2023,5,23)
},
{
    id:"e3",
    title: "Food",
     amount: 450,
     date: new Date(2023,5,23)
},
{
    id:"e4",
    title: "Bus fare",
     amount: 550,
     date: new Date(2023,5,23)
}
];

const App=()=>{

    const [expenses, setExpense]=useState(DummyExpense);
    
const addExpenseHandler=(expense)=>{
const updatedExpense=[expense,...expenses];
setExpense(updatedExpense);
}
    return(
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses}/>
    </div>

    );
}
export default App;