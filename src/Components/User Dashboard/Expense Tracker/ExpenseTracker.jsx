import React from 'react'
import Navigation from '../Navigation/Navigation';
import ETHeader from './ETHeader';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';

import './ExpenseTracker.css'
import { GlobalProvider } from '../../../Configuration/Context/GobalState';
function ExpenseTracker() {
    return (
        <GlobalProvider>
            <Navigation />
            <div className="containers">
                <ETHeader />
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />

            </div>
        </GlobalProvider>
    )
}
export default ExpenseTracker;