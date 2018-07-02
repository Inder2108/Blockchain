const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxFile = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const inboxSource = fs.readFileSync(inboxFile, 'utf8');

solc.compile(inboxSource, 1);