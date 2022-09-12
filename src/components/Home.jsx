import { useEffect, useState } from 'react';
import Card from './Card';
import Loader from './Loader';

const Home = ({ marketPlace, nft }) => {
    
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const loadMarketplaceItems = async () => {

    const itemCount = await marketPlace.itemCount()
    let items = []
    for (let i = 1; i <= itemCount; i++) {
      const item = await marketPlace.items(i)
      if (!item.sold) {
      
        const totalPrice = await marketPlace.getTotalPrice(item.itemId)

        items.push({
          totalPrice,
          itemId: item.itemId,
          seller: item.seller,
          name: item.name,
          desc: item.desc,
          image: item.image
        })
      }
    }
    setLoading(false)
    setItems(items)
  }

  const buyMarketItem = async (item) => {
    await (await marketPlace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
    loadMarketplaceItems()
  }

  useEffect(() => {
    loadMarketplaceItems()
  }, [])

  if (loading) return (
    <Loader />
  )
  return (
    <>
      { items.length > 0 ? 
        <div className="flex flex-wrap justify-center items-center mt-10">
          { items.map((item, ind) => (
            <Card item = {item} key={ind} buyMarketItem={buyMarketItem} />
          ))}
        </div>
    : (
          <main className="flex justify-center items-center text-xl mt-[100px]">
            <h1>No listed assets</h1>
          </main>
    )
    }
    </>

  );
}
export default Home