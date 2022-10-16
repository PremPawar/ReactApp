import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeAndExpense = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return (    
            <div className="flex flex-col justify-center items-center">
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    <div className="flex items-center justify-center rounded-xl bg-green-300 p-2 shadow-lg">
                        <div className="p-5">
                            <h2 className="font-semibold justify-center">INCOME</h2>
                            <p className="mt-2 text-sm text-gray-900 bold">${income}</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-center rounded-xl bg-red-300 p-2 shadow-lg">
                        <div className="p-5">
                            <h2 className="font-semibold">EXPENSES</h2>
                            <p className="mt-2 text-sm text-gray-900">${expense}</p>
                        </div>
                    </div>
                </div>
            </div>
        

    )
}

export default IncomeAndExpense