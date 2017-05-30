/*
Imagine we're a bank and we have a lot of accounts!

Write a program for an ATM machine.

Create functionality so the user can deposit some cash.

Make sure to update the amount once the cash has been added.

Once it's been deposited, display a message saying: '[amountToDeposit] has been added to you account.'

*/

var bank = [
	{name: 'Adrian', amount: 7800},
	{name: 'Anja', amount: 14600},
	{name: 'AryAnto', amount: 5400},
	{name: 'Avery', amount: 10300},
	{name: 'Cathrin', amount: 7800},
	{name: 'Evan', amount: 13500},
	{name: 'Franklyn', amount: 15300},
	{name: 'Gabriel', amount: 5400},
	{name: 'George', amount: -5400},
	{name: 'Jarrod', amount: 7600},
	{name: 'Kirill', amount: 8600},
	{name: 'Laurens', amount: 9400},
	{name: 'Nisha', amount: 4300},
	{name: 'Ola', amount: 5400},
	{name: 'Rien', amount: 12000},
	{name: 'Simas', amount: 11500},
	{name: 'Yasir', amount: 14600},
]

function showBalance(username) {
	// the code from previous exercise
}

function deposit(username, amountToDeposit) {

}

console.log(showBalance('Laurens'))
// outputs 9400
console.log(deposit('Laurens', 600))
// outputs 600 has been added to your account.
console.log(showBalance('Laurens'))
// outputs 10000









