import React, { useContext } from 'react'
import { GlobalContext } from '../../../Configuration/Context/GobalState'
import {Transaction} from './Transaction';

export default function TransactionList() {
    const { transactions } = useContext(GlobalContext)





    return (
        <>
            <h3>History</h3>
            <ul  className="lists">
                {transactions.map(transaction => (<Transaction key={transaction.id} 
                transaction={transaction}/>))}

            </ul>
        </>
    )
}
