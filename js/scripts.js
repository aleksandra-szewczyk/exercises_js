var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
console.log('Tablica zawiera następujące imiona: ' + allNames);

var newName ='Franek';
var newName = prompt('Podaj nowe imię');

if (allNames.indexOf(newName) === -1) {
  allNames.push(newName);
} else {
  console.log('Podane imię znajduje się już w tablicy: ' + newName);
}

console.log('Ostatecznie tablica zawiera następujące imiona: ' + allNames)