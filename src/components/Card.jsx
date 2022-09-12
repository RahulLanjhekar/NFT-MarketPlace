import React from 'react'
import {ethers} from 'ethers'

const Card = ({item,buyMarketItem}) => {
  return (
    
        <div className="glass-window m-4 flex flex-1
        2xl:min-w-[450px]
        2xl:max-w-[500px]
        sm:min-w-[270px]
        sm:max-w-[300px]
        min-w-full
        flex-col p-3 rounded-md hover:shadow-2xl"
        >
        <div className="flex flex-col items-center w-full ">
            <div className="display-flex justify-start w-full mb-4 p-2">
                <p className="text-black text-xl text-center">{item.name}</p>
            </div>

            <img
            src={item.image}
            className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
            />

            <div className="display-flex justify-start w-full mb-4 p-2">
                <p className="text-black text-xl text-center">{item.desc}</p>
            </div>
        
            { buyMarketItem && <button 
            onClick={() => buyMarketItem(item)}
            className='bg-black p-3 px-5 w-max rounded-3xl shadow-2xl text-[#37c7da] font-bold'>
                Buy for {ethers.utils.formatEther(item.totalPrice)} ETH</button>}
        </div>
        </div>
  )
}

export default Card