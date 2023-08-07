import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({ transaction }) => {
    const { deleteTrasaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className='flex flex-row w-full mt-2'>
            <div className="flex space-x-2 mt-2 p-2 justify-center">
                <div>
                    <button onClick={() => deleteTrasaction(transaction.id)} type="button" className="inline-block px-2 py-1 border-1 bg-red-100 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 hover:border-1 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">X</button>
                 </div>
            </div>
            <div className='flex flex-row w-full mt-2 bg-gray-200 rounded'>
                <div className=' mr-auto justify-start p-2'>
                    <span className=''>{transaction.text}</span>
                </div>
                <div className=' ml-auto justify-end p-2'>
                    <span>{sign}${Math.abs(transaction.amount)}</span>
                </div>
                <div className={transaction.amount < 0 ? 'bg-red-400' : 'bg-green-400'}>
                    <span className='ml-2'></span>
                </div>
            </div>
            
        </li>
    )
}

export default Transaction