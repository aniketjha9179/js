// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance =-325.00;
var checkBalance = false;
var isActive = false;



if(checkBalance==true)
{
    if(isActive==true && balance>0)
    console.log("your balance is $" + balance + " . ")
}
else if(isActive==true && balance===0)
{
        console.log("your balance is empty")
}
else if(isActive==true && balance < 1)
{
        console.log("your balance is  negative,please contact bank:")
}
else if(isActive==false && balance < 1 )
{
        console.log("your account is no longer active")
}

else{
    console.log("thank you for choosing us ! have a nice day   ");
}
