const HDWalledProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'account mnemonic paste here',
    'https://rinkeby.infura.io/onbsdlfjhmlKJLknkjBDFJBkjbkjzbdv'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    const contractHashAddress = new web3.eth.contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi There!'] })
        .send({ gas: '1000000', from: accounts[0] });
    console.log('Contract deployed to address', result.options.address);
};
deploy();