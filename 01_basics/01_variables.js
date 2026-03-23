const accountId = 12521707
let accountEmail = "Dss@gmail.com"
var accountPass = "12345"
accountCity = "Bikaner"

// account id =2 // not allowed 

let accountState;

/*
never user var variable issue in scope resulation and function scope
*/

accountEmail = "Devender@gmail.com"
accountPass = "22222"

console.log("accountId");
console.table([accountId,accountEmail,accountCity,accountPass])