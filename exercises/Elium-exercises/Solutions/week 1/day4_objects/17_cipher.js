/*

Build a simple cipher.

*/
var sample = "hello class, how are you? this text is going to be encrypted in few seconds."

var characters = "abcdefghijklmnopqrstuvwxyz.?,' "
var encription = "1234567890-=!@#$%^&*()_+<>HG:DQ"

var charArr = characters.split('');
var encrArr = encription.split('');

// object with keys = decrypted chars, values = encrypted chars
var encriptionMap = {};
for (var i = 0; i < charArr.length; i++) {
	encriptionMap[charArr[i]] = encrArr[i];
}

// object with keys = encrypted chars, values = decryped chars
var decryptionMap = {};
for (var i = 0; i < charArr.length; i++) {
	decryptionMap[encrArr[i]] = charArr[i];
}


function encrypt(s) {
	var stringArray = s.split('');
	var encryptedArray = [];
	for (i = 0; i < stringArray.length; i++) {
		encryptedArray[i] = encriptionMap[stringArray[i]];
	}
	return encryptedArray.join('');
}

function decrypt(s) {
	var stringArray = s.split('');
	var decryptedArray = [];
	for (i = 0; i < stringArray.length; i++) {
		decryptedArray[i] = decryptionMap[stringArray[i]];
	}
	return decryptedArray.join('');
}

console.log(encrypt(sample));
// outputs 85==#Q3=1&&:Q8#_Q1^5Q<#(GQ*89&Q*5+*Q9&Q7#9@7Q*#Q25Q5@3^<$*54Q9@Q65_Q&53#@4&H
console.log(decrypt(encrypt(sample)));
// outputs hello class, how are you? this text is going to be encrypted in few seconds.
