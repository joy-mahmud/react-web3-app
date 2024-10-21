import { useState } from 'react'
import {Loader,Header,Welcome,Footer,Services,Transactions} from './components'

function App() {
  
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Header></Header>
        <Welcome></Welcome>
      </div>
      <Services></Services>
      <Transactions></Transactions>
      <Footer></Footer>
      
    </div>
  )
}

export default App
