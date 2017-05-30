/*

If you haven't done so already, rewrite you program, using the keyword 'this'

E.g.: instead of using bank.userdata.name use this.userdata.name.

This way we can use another bank object, while still using the same functions.

*/


var bank = {
	userdata: [
		{name: 'Adrian', amount: 7800, pincode: 2345},
		{name: 'Anja', amount: 14600, pincode: 5630},
		{name: 'AryAnto', amount: 5400, pincode: 9395},
		{name: 'Avery', amount: 10300, pincode: 2355},
		{name: 'Cathrin', amount: 7800, pincode: 3436},
		{name: 'Evan', amount: 13500, pincode: 3745},
		{name: 'Franklyn', amount: 15300, pincode: 4969},
		{name: 'Gabriel', amount: 5400, pincode: 3906},
		{name: 'George', amount: -5400, pincode: 2123},
		{name: 'Jarrod', amount: 7600, pincode: 1205},
		{name: 'Kirill', amount: 8600, pincode: 3402},
		{name: 'Laurens', amount: 9400, pincode: 3060},
		{name: 'Nisha', amount: 4300, pincode: 3583},
		{name: 'Ola', amount: 5400, pincode: 2873},
		{name: 'Rien', amount: 12000, pincode: 7323},
		{name: 'Simas', amount: 11500, pincode: 5321},
		{name: 'Yasir', amount: 14600, pincode: 4382},
	],
	showBalance: showBalance,
	withdraw: withdraw,
	deposit: deposit
}

var foreignBank = {
	userdata: [
		{name: 'Adrian', amount: 3000, pincode: 2345},
		{name: 'Anja', amount: 5000, pincode: 5630},
		{name: 'AryAnto', amount: 10000, pincode: 9395},
		{name: 'Avery', amount: 15000, pincode: 2355},
		{name: 'Cathrin', amount: 10000, pincode: 3436},
		{name: 'Evan', amount: 7000, pincode: 3745},
		{name: 'Franklyn', amount: 8000, pincode: 4969}
	],
	showBalance: showBalance,
	withdraw: withdraw,
	deposit: deposit
}


function showBalance(username) {
 // adjust previous code using the keyword 'this'
}


function deposit(username, amountToDeposit) {
 // adjust previous code using the keyword 'this'
}



function withdraw(username, amountToWithdraw) {
 // adjust previous code using the keyword 'this'
}


console.log(bank.withdraw('Laurens', 10000))
//outputs Insufficient funds
console.log(bank.withdraw('Laurens', 1500))
//outputs Withdrawal of 1500 accepted
console.log(bank.showBalance('Laurens'))
//outputs 7900
console.log(foreignBank.showBalance('Adrian'))




