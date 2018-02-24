const Web3 = require('web3'),
	web3 = new Web3(Web3.givenProvider || 'http://localhost:8545'),
	fs = require('fs'),
	solc = require('solc');

const account = '0x737422b5cb0DEA4e5Dca5606c325Ac3280AE2052';
const user2 = '0x9271DE3870c1e76BC6AaD9F3299a2Eb97693aF3e';
let source = fs.readFileSync('multiply.sol', 'utf8');
let compiledContract = solc.compile(source);
	// console.log(compiledContract);
let abi = compiledContract.contracts[':ERC20Token'].interface;
	// console.log(abi);
let bytecode = compiledContract.contracts[':ERC20Token'].bytecode;
// 	console.log(bytecode);
// let gasEstimate = web3.eth.estimateGas({data: '0x' + bytecode}, function (err, gas) {
// 	console.log(gas);
// });

let MyContract = new web3.eth.Contract(JSON.parse(abi), {
    from: account,
    gas: '2000000' // default gas price in wei, 20 gwei in this case
});
MyContract.options.address = '0x30eeff16e89eA0D02Db7557f23232fB77808405e';
web3.eth.personal.unlockAccount(account, 'pass', 12000).
    then(() => {
    	console.log('Account unlocked.');
		MyContract.methods.transfer(user2, 5000000).send({from: account}, function(error, result){
		    console.log(result);
			MyContract.methods.balanceOf(account).call({from: account}, function(error, result){
			    console.log('account: ' + result);
			});

			MyContract.methods.balanceOf(user2).call({from: account}, function(error, result){
			    console.log('user2: ' + result);
			});
		});
    }).
    catch(console.error);

