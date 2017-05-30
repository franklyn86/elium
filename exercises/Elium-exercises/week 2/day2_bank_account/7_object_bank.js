/*

In order to prepare you more for this week’s project,
we're going to add an extra layer of complexity to the bank app.

Let's keep the functions in the global scope for aesthetic reasons.

Re-write your showBalance function to accommodate the new structure.
If the name entered doesn't exist, give an error message saying 'User does not exist'

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

}


console.log(bank.showBalance('Laurens'))
//outputs 9400




function deposit(username, amountToDeposit) {
	// code not needed
	// it is here to ensure there are no 'undefineds'
}

function withdraw(username, amountToWithdraw) {
	// code not needed
	// it is here to ensure there are no 'undefineds'
}

