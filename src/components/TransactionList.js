import {React, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {Transaction} from './Transaction'

export const TransactionList = () => {
    // Hooks
    const { transactions } = useContext(GlobalContext)

    // Functions

    // If we pass in a component to another componenet we need to give a key? It works fine though without a key. ..

    // The important thing here was to pass transaction as props so we can use it elsewhere to render other properties of transaction such and 'amount and 'text' or even id because thats what each transaction has. 
    return (
        <div>
            <h3>History</h3>
            <ul className= 'list'>
                {transactions.map(transaction => (<Transaction transaction={transaction} />))}
            </ul>
            
        </div>
    )
}
