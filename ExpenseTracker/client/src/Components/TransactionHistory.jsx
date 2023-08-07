import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext);


    return (
        <div className='mt-10'>
            <div className='text-xl font-bold text-gray-600'>History</div>
            <ul className='list m-auto max-w-xs'>
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction}/>
                ))}

            </ul>
            {/* <div className="flex items-center justify-center">
                <div className="col-span-12">
                    <div className="overflow-auto lg:overflow-visible ">
                        <table className="table text-gray-400 border-separate space-y-6 text-sm">
                            <thead className="bg-gray-800 text-gray-500">
                            </thead>
                            <tbody>
                                <tr className="bg-gray-800">
                                    <td className="p-3">
                                        <div className="flex align-items-center">
                                            <div className="ml-3">
                                                <div className="">Appple</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className="p-3 font-bold">
                                        200.00$
                                    </td>

                                    <td className="p-3 ">
                                        <a href="#" className="text-gray-400 hover:text-gray-100  ml-2">
                                            <i className="material-icons-round text-base">delete_outline</i>
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-800">
                                    <td className="p-3">
                                        <div className="flex align-items-center">
                                            <div className="ml-3">
                                                <div className="">Realme</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-3 font-bold">
                                        200.00$
                                    </td>
                                    <td className="p-3">
                                        <a href="#" className="text-gray-400 hover:text-gray-100 ml-2">
                                            <i className="material-icons-round text-base">delete_outline</i>
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-800">
                                    <td className="p-3">
                                        <div className="flex align-items-center">
                                            <div className="ml-3">
                                                <div className="">Samsung</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-3 font-bold">
                                        200.00$
                                    </td>
                                    <td className="p-3">

                                        <a href="#" className="text-gray-400 hover:text-gray-100 ml-2">
                                            <i className="material-icons-round text-base">delete_outline</i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> */}
        </div>

    )
}

export default TransactionHistory