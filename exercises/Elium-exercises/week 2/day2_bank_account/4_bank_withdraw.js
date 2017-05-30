/*
Imagine we're a bank and we have a lot of accounts!

Write a program for an ATM machine.

Create functionality so the user can withdraw his money.

If the amount he wishes to withdraw is bigger than his available funds, 
give an error message saying: 'Insufficient funds'.

If not, display a message saying: 'Withdrawal of [amountToWithdraw] accepted'

Make sure to update the amount after the withdrawal.

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
	// the code from previous exercise
}

function withdraw(username, amountToWithdraw) {

}

console.log(showBalance('Laurens'))
// outputs 9400
console.log(withdraw('Laurens', 10000))
// outputs Insufficient funds
console.log(showBalance('Laurens'))
// outputs 9400
console.log(withdraw('Laurens', 400))
// outputs Withdrawal of 400 accepted
console.log(showBalance('Laurens'))
// outputs 9000









