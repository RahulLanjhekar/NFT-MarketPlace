import React, { useEffect, useState } from 'react'
import Card from './Card'
import Loader from './Loader'

const ListedItems = ({accounts, marketPlace, setSoldItems}) => {
    const [loading, setLoading] = useState(true)
  const [listedItems, setListedItems] = useState([])
  const loadListedItems = async () => {
    // Load all sold items that the user listed
    const itemCount = await marketPlace.itemCount()
    let listedItems = []
    let soldItems = []
    for (let index = 1; index <= itemCount; index++) {
      const i = await marketPlace.items(index)
      if (i.seller.toLowerCase() === accounts) {
       
        const totalPrice = await marketPlace.getTotalPrice(i.itemId)

        let item = {
          totalPrice,
          price: i.price,
          itemId: i.itemId,
          name: i.name,
          desc: i.desc,
          image: i.image
        }
        listedItems.push(item)
        
        if (i.sold) soldItems.push(item)
      }
    }
    setLoading(false)
    setListedItems(listedItems)
    setSoldItems(soldItems)
  }
  useEffect(() => {
    loadListedItems()
  }, [])

  if (loading) return (
    <Loader />
  )
  return (
    <>
      { listedItems.length > 0 ? 
        <div className="flex flex-wrap justify-center items-center mt-10">
          { listedItems.map((item, ind) => (
            <Card item = {item} key={ind} />
          ))}
        </div>
    : (
          <main className="flex justify-center items-center text-xl mt-[100px]">
            <h2>No listed NFTs</h2>
          </main>
    )
    }
    </>
  )
}

export default ListedItems