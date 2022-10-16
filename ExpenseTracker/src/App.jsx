import { useState } from 'react'
import './App.css'

import YourBalance from './Components/YourBalance'
import IncomeAndExpense from './Components/IncomeAndExpense'
import TransactionHistory from './Components/TransactionHistory'
import AddTransaction from './Components/AddTransaction'

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <div className="flex flex-col">
        <YourBalance />
        <IncomeAndExpense />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
