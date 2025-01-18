const accountId = 1234
let accountEmail = "m@gmail.com"
var accountpassword = 69
accountCity = "Bdesh" // ok, but poor!
let accountState; // value of accountState is undefined! 

// accountId = 2  (not possible)=> to comment and uncomment: Ctrl + /

accountEmail = "h@gmail.com"
accountpassword = 610
accountCity = "Bamgladesh"

/*
  prefer not use var
   bacause of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountpassword, accountCity, accountState]) // new command  to print in Batch