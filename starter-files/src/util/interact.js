require('dotenv').config();
const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require('../contract-abi.json');
const contractAddress = '0x576E54e96B1a5c5F5eC52eD0a2AC500D9CF2Eb82';

export const helloWorldContract = new web3.eth.Contract(
	contractABI,
	contractAddress
);

export const loadCurrentMessage = async () => {};

export const connectWallet = async () => {};

export const getCurrentWalletConnected = async () => {};

export const updateMessage = async (address, message) => {};
