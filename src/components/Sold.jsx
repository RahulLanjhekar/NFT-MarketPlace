import React from 'react'
import Card from './Card'

const Sold = ({soldItems}) => {
  return (
   <>
     {soldItems.length > 0 && <div className="flex flex-wrap justify-center items-center mt-10">
          { soldItems.map((item, ind) => (
            <Card item = {item} key={ind} />
          ))}
        </div>}
   </>
  )
}

export default Sold