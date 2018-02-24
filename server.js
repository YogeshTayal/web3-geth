// const Web3 = require('web3');
//     // web3 = new Web3();
// web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));
// var coinbase = web3.eth.coinbase;
// var balance = web3.eth.getBalance(coinbase);
// console.log(balance);
// var yogitokenContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"version","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"ERC20Token","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"},{"name":"_extraData","type":"bytes"}],"name":"approveAndCall","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]);
// var yogitoken = yogitokenContract.new({
// 	from: web3.eth.accounts[0], 
// 	data: '0x60606040526040805190810160405280600481526020017f48312e3000000000000000000000000000000000000000000000000000000000815250600690805190602001906200005192919062000064565b5034156200005e57600080fd5b62000113565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620000a757805160ff1916838001178555620000d8565b82800160010185558215620000d8579182015b82811115620000d7578251825591602001919060010190620000ba565b5b509050620000e79190620000eb565b5090565b6200011091905b808211156200010c576000816000905550600101620000f2565b5090565b90565b61116e80620001236000396000f3006060604052600436106100ba576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100ca578063095ea7b31461015857806318160ddd146101b257806323b872dd146101db578063313ce5671461025457806354fd4d501461028357806370a08231146103115780637a80760e1461035e57806395d89b4114610373578063a9059cbb14610401578063cae9ca511461045b578063dd62ed3e146104f8575b34156100c557600080fd5b600080fd5b34156100d557600080fd5b6100dd610564565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011d578082015181840152602081019050610102565b50505050905090810190601f16801561014a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561016357600080fd5b610198600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610602565b604051808215151515815260200191505060405180910390f35b34156101bd57600080fd5b6101c56106f4565b6040518082815260200191505060405180910390f35b34156101e657600080fd5b61023a600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106fa565b604051808215151515815260200191505060405180910390f35b341561025f57600080fd5b610267610973565b604051808260ff1660ff16815260200191505060405180910390f35b341561028e57600080fd5b610296610986565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102d65780820151818401526020810190506102bb565b50505050905090810190601f1680156103035780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561031c57600080fd5b610348600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a24565b6040518082815260200191505060405180910390f35b341561036957600080fd5b610371610a6c565b005b341561037e57600080fd5b610386610b71565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103c65780820151818401526020810190506103ab565b50505050905090810190601f1680156103f35780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561040c57600080fd5b610441600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610c0f565b604051808215151515815260200191505060405180910390f35b341561046657600080fd5b6104de600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610d75565b604051808215151515815260200191505060405180910390f35b341561050357600080fd5b61054e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611016565b6040518082815260200191505060405180910390f35b60038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105fa5780601f106105cf576101008083540402835291602001916105fa565b820191906000526020600020905b8154815290600101906020018083116105dd57829003601f168201915b505050505081565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60025481565b6000816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156107c6575081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b80156107d25750600082115b1561096757816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905061096c565b600090505b9392505050565b600460009054906101000a900460ff1681565b60068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a1c5780601f106109f157610100808354040283529160200191610a1c565b820191906000526020600020905b8154815290600101906020018083116109ff57829003601f168201915b505050505081565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b620186a06000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061c3506002819055506040805190810160405280600a81526020017f594f474920544f4b454e0000000000000000000000000000000000000000000081525060039080519060200190610b0692919061109d565b506000600460006101000a81548160ff021916908360ff1602179055506040805190810160405280600381526020017f594f47000000000000000000000000000000000000000000000000000000000081525060059080519060200190610b6e92919061109d565b50565b60058054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c075780601f10610bdc57610100808354040283529160200191610c07565b820191906000526020600020905b815481529060010190602001808311610bea57829003601f168201915b505050505081565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410158015610c5f5750600082115b15610d6a57816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a360019050610d6f565b600090505b92915050565b600082600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925856040518082815260200191505060405180910390a38373ffffffffffffffffffffffffffffffffffffffff1660405180807f72656365697665417070726f76616c28616464726573732c75696e743235362c81526020017f616464726573732c627974657329000000000000000000000000000000000000815250602e01905060405180910390207c01000000000000000000000000000000000000000000000000000000009004338530866040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828051906020019080838360005b83811015610fb6578082015181840152602081019050610f9b565b50505050905090810190601f168015610fe35780820380516001836020036101000a031916815260200191505b5094505050505060006040518083038160008761646e5a03f192505050151561100b57600080fd5b600190509392505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106110de57805160ff191683800117855561110c565b8280016001018555821561110c579182015b8281111561110b5782518255916020019190600101906110f0565b5b509050611119919061111d565b5090565b61113f91905b8082111561113b576000816000905550600101611123565b5090565b905600a165627a7a72305820debab395ab99285562464e0c4bed6604ad3237df29ee4f76924efdb404b3745d0029',
// 	gas: '4700000'
// }, function (e, contract){
// 	console.log(e, contract);
// 	if (typeof contract.address !== 'undefined') {
// 	     console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
// 	}
// });

const Web3 = require('web3'),
	web3 = new Web3(Web3.givenProvider || 'http://localhost:8545'),
	// web3 = new Web3();
	// web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/')),
	// web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545')),
	fs = require('fs'),
	solc = require('solc');

	// var Accounts = require('web3-eth-accounts');
	// var accounts = new Accounts('http://localhost:8545');
	// var newAccount = web3.eth.accounts.create(['pass']);
	// let account;
	// web3.eth.personal.newAccount('pass', function (err, res) {
		// console.log(res);
		// account = res;
		// console.log(web3.eth.accounts);
		// web3.eth.getAccounts().then(console.log);
	// });
	// web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io/'));

// web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io/'));
const account = '0x737422b5cb0DEA4e5Dca5606c325Ac3280AE2052';
// console.log(web3.eth);
// const account = '0xab6d197c18c6bd1e345b06adbb6f4a0f71ae2112';
// const account = '0xd4540a1e5bde7d454686fb511d2f095dfb7d086a';
// var originalBalance = web3.eth.getBalance(account, function (error, data) {
// 	console.log(data);
// });
// web3.eth.filter('latest').watch(function() {
//     var currentBalance = web3.eth.getBalance(coinbase).toNumber();
//     console.log('current: ' + currentBalance);
//     console.log('diff:    ' + (currentBalance - originalBalance));
// });

// var Web3 = require('web3');
// var web3 = new Web3();
// web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io/'));
// solidity code code
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
// console.log(MyContract);
// web3.eth.personal.unlockAccount(account, 'pass', 12000).
//     then(() => { console.log('Account unlocked.'); }).
//     catch(console.error);
// MyContract.deploy({
//     data: '0x' + bytecode
// }).send({
//     from: account,
//     gas: '2000000'
// }, function(error, transactionHash){
// 	console.log('-1-');
// 	console.log(error);
// 	console.log(transactionHash);
// })
// .on('error', function(error){
// 	console.log('-2-');
// 	console.log(error);
// })
// .on('transactionHash', function(transactionHash){
// 	console.log('-3-');
// 	console.log(transactionHash);
// })
// .on('receipt', function(receipt){
// 	console.log('-4-');
// 	console.log(receipt.contractAddress) // contains the new contract address
// })
// .on('confirmation', function(confirmationNumber, receipt){
// 	console.log('-5-');
// 	console.log(receipt.contractAddress) // contains the new contract address
// })
// .then(function(newContractInstance){
// 	console.log('-6-');
//     console.log(newContractInstance.options.address) // instance with the new contract address
// });

MyContract.options.address = '0x30eeff16e89eA0D02Db7557f23232fB77808405e';

MyContract.methods.balanceOf(account).call({from: account}, function(error, result){
    console.log(result);
});

// const exec = MyContract.methods.multiply(20);
// console.log(exec);

// MyContract.deploy({data: '0x' + bytecode})

// var testcontractContract = web3.eth.contract([{"constant":true,"inputs":[{"name":"a","type":"uint256"}],"name":"multiply","outputs":[{"name":"d","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]);
// var testcontract = testcontractContract.new(
//    {
//      from: web3.eth.accounts[0], 
//      data: '0x6060604052341561000f57600080fd5b60b18061001d6000396000f300606060405260043610603f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063c6888fa1146044575b600080fd5b3415604e57600080fd5b606260048080359060200190919050506078565b6040518082815260200191505060405180910390f35b60006007820290509190505600a165627a7a723058208a8bdeecdf2a01d259fb0b759ce2661bb85ac2d8bbb9af3960af582eabcd27610029', 
//      gas: '4700000'
//    }, function (e, contract){
//     console.log(e, contract);
//     if (typeof contract.address !== 'undefined') {
//          console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
//     }
// });

// web3.eth.compile.solidity(source, function (compiled) {
	// var code = compiled.code;
	// console.log(compiled);
	// var abi = compiled.info.abiDefinition;
// });
// contract json abi, this is autogenerated using solc CLI
// var myContract;
// console.log(web3.eth.accounts);
// function createExampleContract() {
//     // let's assume that coinbase is our account
//     web3.eth.defaultAccount = '0x6a3b291a12924Fb8D4ACA56cEa25C5fE7d5fF72e';
//     // create contract
//     document.getElementById('status').innerText = "transaction sent, waiting for confirmation";
//     web3.eth.contract(abi).new({data: code}, function (err, contract) {
//         if(err) {
//             console.error(err);
//             return;
//         // callback fires twice, we only want the second call when the contract is deployed
//         } else if(contract.address){
//             myContract = contract;
//             console.log('address: ' + myContract.address);
//             document.getElementById('status').innerText = 'Mined!';
//             document.getElementById('call').style.visibility = 'visible';
//         }
//     });
// }
// function callExampleContract() {
//     // this should be generated by ethereum
//     var param = parseInt(document.getElementById('value').value);
//     // call the contract
//     var res = myContract.multiply(param);
//     document.getElementById('result').innerText = res.toString(10);
// }