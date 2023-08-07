import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTrasaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 10000000),
            text,
            amount: +amount
        }

        addTrasaction(newTransaction);
    }

    return (
        <div className='mt-10 items-center justify-center'>
            <div className='font-bold text-xl text-gray-500'>Add New Transaction</div>
            <div className="block p-6 ml-80 mr-80 rounded-lg shadow-lg bg-orange-200 min-w-min">
                <form onSubmit={onSubmit}>
                    <div className= "form-group mb-6">
                        <label htmlFor="exampleInputName1" className="form-label inline-block mb-2 text-gray-700">Transaction Name</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Enter Name"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            />
                    </div>
                    <div className="form-group mb-6">
                        <label htmlFor="exampleInputAmount1" className="form-label inline-block mb-2 text-gray-700">Amount</label>
                        <input type="number" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1"
                            placeholder="Amount" 
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            />
                    </div>
                    <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddTransaction