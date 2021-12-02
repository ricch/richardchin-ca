var today = new Date();
var birthDate = new Date("09/18/2020");
var age = today.getFullYear() - birthDate.getFullYear();
var m = today.getMonth() - birthDate.getMonth();
age = age * 12 + m - 1;

var emilyAge = document.getElementById('emilyAge');
emilyAge.innerHTML = age;