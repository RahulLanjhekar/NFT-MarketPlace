import { createContext, useEffect, useState } from "react";
import {MarketPlaceAddress, NFTAddress} from "../utils/contractAddress"
import MarketPlace from "../utils/Marketplace.json"
import NFT from "../utils/NFT.json"
import {ethers} from 'ethers'

export const NftContext = createContext();

const {ethereum} = window;


export const NftProvider = ({children}) => {
    const [marketPlaceContract, setMarketPlaceContract] = useState({})
    const [nftContract, setNftContract] = useState({})
    let nft;
    let marketPlace;
    const getContract = () => {
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
    // setNftContract()
}
    return (
        <NftContext.Provider value={{
            marketPlace,
            nft
        }}>
            {children}
        </NftContext.Provider>
    )
}