const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi There'] })
        .send({ from: accounts[0], gas: '1000000' })
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        // address is not undefined implies contract was deployed successfully
        assert.ok(inbox.options.address);
    });
    // Calling a function
    it('has a default message', async() => {
        // Message should be the same set during deployment of contract
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Hi There');
    });
    // Making a transaction with a function
    it('sets a new message', async() => {
        await inbox.methods.setMessage('Bye There !').send({ from: accounts[0] });
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Bye There !');
    });

});