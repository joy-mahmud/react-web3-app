import React from 'react'
import { FaEthereum } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
const Welcome = () => {
    return (
        <div className='flex items-center p-20 gap-10'>
            <div className='text-white  flex flex-col gap-5'>
                <h2 className='text-5xl font-bold'>Send Crypto across the world</h2>
                <p>Explore the crypto world. Buy and sell cryptocurrencies on Krypto</p>
                <button type='button' className='w-2/3 text-xl py-2 px-10 rounded-full bg-blue-500 hover:bg-blue-400'>Connect wallet</button>
                <div className='grid grid-cols-3 cursor-pointer'>
                    <div className='border-[2px] border-amber-700 p-5 rounded-tl-xl'>Reliabality</div>
                    <div className='border-[2px] border-amber-700 p-5'>Security</div>
                    <div className='border-[2px] border-amber-700 p-5 rounded-tr-xl'>Etherium</div>
                    <div className='border-[2px] border-amber-700 p-5 rounded-bl-xl'>Web 3.0</div>
                    <div className='border-[2px] border-amber-700 p-5 '>Low fees</div>
                    <div className='border-[2px] border-amber-700 p-5 rounded-br-xl'>Blockchain</div>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='eth-card h-[200px] w-[380px] rounded-3xl p-5 text-white flex flex-col justify-between'>
                    <div className='flex justify-between items-center'>
                        <div className='h-10 w-10 border-2 border-white rounded-full flex justify-center items-center'>
                            <FaEthereum className='h-8' />
                        </div>

                        <IoMdInformationCircleOutline size={30} />

                    </div>
                    <div className='space-y-1'>
                        <span className='text-xl font-medium'>Address</span>
                        <h2 className='text-4xl font-semibold'>Etherium</h2>
                    </div>

                </div>
                <div className='text-white bg-slate-700 p-5 w-2/3 mt-10 rounded-md space-y-2'>
                    <input type="text" placeholder='Address to' className='outline-none p-2 rounded-md bg-slate-600 w-full'/>
                    <input type="number" placeholder='Amount(ETH)' className='outline-none p-2 rounded-md bg-slate-600 w-full'/>
                    <input type="text" placeholder='Keyword' className='outline-none p-2 rounded-md bg-slate-600 w-full'/>
                    <input type="text" placeholder='Enter message' className='outline-none p-2 rounded-md bg-slate-600 w-full'/>
                    <button className='border-2 border-white bg-slate-800 hover:bg-slate-600 rounded-full w-full p-2 mt-5'>Send Now</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome