import React,{useContext} from 'react'
import { GlobalContext } from '../../../Configuration/Context/GobalState';

export  const Transaction=({transaction})=> {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
   
    return (

             <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
                    {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
                    <button onClick={() => deleteTransaction(transaction.id)} className="delete-btnn">x</button>
                </li>
    )
}
