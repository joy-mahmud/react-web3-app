import React from 'react'
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
const Header = () => {
  return (
    <nav className='w-full md:justify-center justify-between items-center py-5'>
      <div className='flex w-full justify-between items-center px-20'>
        <h2 className='text-white font-semibold text-3xl'>krypto</h2>
        <div>
          <ul className='text-white flex items-center gap-5 cursor-pointer'>
            <li className='text-xl'>Market</li>
            <li className='text-xl'>Exchange</li>
            <li className='text-xl'>Tutorials</li>
            <li>Wallet</li>
            <button type='button' className='text-xl py-2 px-10 rounded-full bg-blue-400 hover:bg-blue-300'>Login</button>
          </ul>
        </div>
      </div>
      

    </nav>
  )
}

export default Header