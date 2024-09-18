import React from 'react'
import Weather from './components/Weather'
import Header from './components/Header'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Weather />
    </div>
  )
}

export default App