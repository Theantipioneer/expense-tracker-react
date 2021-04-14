import {React, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Balance = () => {

    // At this point we need our money figuers, this means we need to go do the global context and pass through here. 

    const {transactions} =useContext(GlobalContext);

    const amounts = transactions.map((transaction) => transaction.amount);

    const total = amounts
            .reduce((acc, item) => (acc += item), 0)
            .toFixed(2)

    return (
        <div>
            <h2>Your Balance</h2>
            <h1>${total}</h1>

        </div>
    )
}
