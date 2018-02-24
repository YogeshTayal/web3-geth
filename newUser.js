const Web3 = require('web3'),
	web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');

let account;
web3.eth.personal.newAccount('pass', function (err, res) {
	console.log(res);
	account = res;
	web3.eth.getAccounts().then(console.log);
});