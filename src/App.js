import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Mint from './components/Mint';
import Navbar from './components/Navbar';
import { createContext, useEffect, useState } from "react";
import {MarketPlaceAddress, NFTAddress} from "./utils/contractAddress"
import MarketPlace from "./utils/Marketplace.json"
import NFT from "./utils/NFT.json"
import {ethers} from 'ethers'
import ListedItems from './components/ListedItems';
import Sold from './components/Sold';

const {ethereum} = window;
function App() {
  const [accounts, setAccounts] = useState();
  const [soldItems, setSoldItems] = useState([])

  let nft;
  let marketPlace;

  const connectWallet = async () => {
    const accounts = await ethereum.request({method: "eth_requestAccounts"});
    setAccounts(accounts[0]);
  }

  const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    marketPlace = new ethers.Contract(
        MarketPlaceAddress,
        MarketPlace.abi,
        signer
    )
    // setMarketPlaceContract(marketPlace)

     nft = new ethers.Contract(
        NFTAddress,
        NFT.abi,
        signer
    )
    useEffect(() => {
      connectWallet()
    }, [])
    

  return (
    <div className='bg min-h-screen'>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home marketPlace={marketPlace} nft={nft}/>} />
          <Route path='/mint' element={<Mint marketPlace={marketPlace} nft={nft}/>} />
          <Route path='/my-items' element={<ListedItems setSoldItems={setSoldItems} marketPlace={marketPlace} nft={nft} accounts={accounts} />} />
          <Route path='/sold-nfts' element={<Sold soldItems={soldItems} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
