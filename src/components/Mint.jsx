  import { useState } from 'react'
  import { ethers } from "ethers"
const commonStyles = 'glass-window outline-none p-2 w-[300px] mb-8 rounded'

const Mint = ({ marketPlace, nft }) => {
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(null)
  const [name, setName] = useState('')
  const [desc, setDescription] = useState('')


  const mintThenList = async () => {
    const uri = `${name}`

    await(await nft.mint(uri)).wait()

    const id = await nft.tokenCount()

    await(await nft.setApprovalForAll(marketPlace.address, true)).wait()

    const listingPrice = ethers.utils.parseEther(price.toString())
    await(await marketPlace.makeItem(nft.address, id, listingPrice, name, image, desc)).wait()
  }
    
  return (
      <div className="mt-8 w-screen text-center">
            <div className="flex flex-col justify-center items-center glass-window w-[400px] h-[500px] rounded-xl mx-auto">  
              <input className={commonStyles} onChange={(e) => setName(e.target.value)} size="lg" required type="text" placeholder="Name" />
              <input className={commonStyles} onChange={(e) => setImage(e.target.value)} size="lg" required type="text" placeholder="Image URL" />
              <input className={commonStyles} onChange={(e) => setDescription(e.target.value)} size="lg" required as="textarea" placeholder="Description" />
              <input className={commonStyles} onChange={(e) => setPrice(e.target.value)} size="lg" required type="number" placeholder="Price in ETH" />
              <div className="d-grid px-0">
                <button onClick={mintThenList} className='bg-black p-3 px-5 w-max rounded-3xl shadow-2xl text-[#37c7da] font-bold'>Create & List NFT!</button>
              </div>
              </div>
           
      </div>
  );
}

export default Mint