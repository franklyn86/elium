/*

Back to the basics!

Write a function checkBalance that returns the amount you have on your bank account.
Write a function deposit that deposits or adds an amount onto your account.
Write a function withdraw that withdraws or subtracts a given amount from your account.

*/

var amount = 0

function checkBalance() {
	return amount
}

function deposit(n) {
	amount += n
}

function withdraw(n) {
	amount -= n
}

console.log(checkBalance())
// outputs 0
deposit(1000)
console.log(checkBalance())
// outputs 1000
withdraw(500)
console.log(checkBalance())
// outputs 500