import {React, useContext, useState} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
    // Hooks
    // We need component levelstate here because we have input tags that will change as we enter data. 
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);
    

    // Functions
    const onSubmit = e => {
        e.preventDefault();

        // on submit the function must create a new transaction for us, and this is just an object. 
        const newTransaction = {
            id:  Math.floor(Math.random() * 100000000),
            text, 
            amount: +amount
        };
        // Fires the addTransaction dispatch function. 
        addTransaction(newTransaction);
    };

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit= {onSubmit}>
                <div className= "form-control">
                    <label htmlFor="text"> Text</label>
                    <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} placeholder= "Add text../"/>
                </div>
                <div className= "form-control">
                    <label htmlFor="amount"> Amount</label>
                    <input type="number" value={amount} onChange={(e) => {setAmount(e.target.value)}} placeholder= "Enter amount../"/>
                </div>
                <div>
                    <button className= "btn">Add transaction</button>
                </div>
                
            </form>
            

        </div>
    )
}
