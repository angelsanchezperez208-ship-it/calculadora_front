import React from 'react'
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import Balance from './components/Balance';

export const App = () => {
  return (
    <GlobalProvider>
      <Header />
        <div className='container'>
          <Balance />
        </div>
    </GlobalProvider>
  )
}
