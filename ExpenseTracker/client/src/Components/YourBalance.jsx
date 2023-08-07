import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const YourBalance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className='text-center'>
            <h1 className="font-bold text-2xl text-green-900">
                Expense Tracker
            </h1>
            <div className='justify-start mt-10 text-center'>
                <p className='text-gray-500 bold'>YOUR BALANCE</p>
                <p className='text-gray-900'>${total}</p>
            </div>

        </div>
    )
}

export default YourBalance