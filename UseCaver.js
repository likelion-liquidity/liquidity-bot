import dotenv from "dotenv";
import Caver from 'caver-js';
import KIP17TokenABI from './abi/KIP17TokenABI.json'

dotenv.config();
const option = {
    headers : [
      {
        name: "Authorization",
        value: "Basic " + Buffer.from(process.env.ACCESS_KEY_ID + ":" + process.env.SECRET_ACCESS_KEY).toString("base64")
      },
      {
        name: "x-chain-id", value: process.env.CHAIN_ID
      }
    ]
  }
  
const caver = new Caver(new Caver.providers.HttpProvider("https://node-api.klaytnapi.com/v1/klaytn", option))
const KIP17TokenContract = new caver.contract(KIP17TokenABI, process.env.NFT_CONTRACT_ADDRESS)

export const ownerOf = async(tokenId) => {
    const owner = await KIP17TokenContract.methods.ownerOf(tokenId).call()
    return owner
}