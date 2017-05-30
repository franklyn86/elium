/*

Same stuff as previous exercise.

Rewrite your previous function deposit to accomodate the new structure.

If the funds are succesfully added, display a message: '[amountToDeposit] has been added to you account.'
If the user does not exist give an error message 'User does not exist'

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


function showBalance(username) {

	for (var i = 0; i < bank.userdata.length; i++) {
		if (bank.userdata[i].name === username) {
			return bank.userdata[i].amount
		}
	}
	return 'User does not exist'

}


function deposit(username, amountToDeposit) {

	for (var i = 0; i < bank.userdata.length; i++) {
		if (bank.userdata[i].name === username) {
			bank.userdata[i].amount += amountToDeposit
			return amountToDeposit + ' has been added to your account'
		}
	}
	return 'User does not exist'

}

console.log(bank.deposit('Laurens', 600))
//outputs 600 has been added to your account
console.log(bank.showBalance('Laurens'))
//outputs 10000






function withdraw(username, amountToWithdraw) {
	// code not needed
	// it is here to ensure there are no 'undefineds'
}


