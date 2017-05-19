/*

Build a simple cipher.

*/
var sample = "hello class, how are you? this text is going to be encrypted in few seconds."

var characters = "abcdefghijklmnopqrstuvwxyz.?,' "
var encription = "1234567890-=!@#$%^&*()_+<>HG:DQ"

function encrypt(s) {

}

function decrypt(s) {

}

console.log(encrypt(sample));
// outputs 85==#Q3=1&&:Q8#_Q1^5Q<#(GQ*89&Q*5+*Q9&Q7#9@7Q*#Q25Q5@3^<$*54Q9@Q65_Q&53#@4&H
console.log(decrypt(encrypt(sample)));
// outputs hello class, how are you? this text is going to be encrypted in few seconds.
