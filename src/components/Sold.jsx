import React from 'react'
import Card from './Card'

const Sold = ({soldItems}) => {
  return (
   <>
     {soldItems.length > 0 ? <div className="flex flex-wrap justify-center items-center mt-10">
          { soldItems.map((item, ind) => (
            <Card item = {item} key={ind} />
          ))}
        </div>
      : 
      ( <main className="flex justify-center items-center text-xl mt-[100px]">
            <h2>No Sold NFTs</h2>
          </main>  )
      }
   </>
  )
}

export default Sold