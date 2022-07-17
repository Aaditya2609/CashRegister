var inputBillAmt= document.querySelector("#bill-amt");
var inputCashRecieved=document.querySelector("#cash-recieved");
var error=document.querySelector("#errorMsg");
var button=document.querySelector("#button");

function clickEventHandler()
{
    console.log(inputBillAmt.value)
    console.log(inputCashRecieved.value)
    if(inputBillAmt.value>0)
    {
        console.log(inputBillAmt.value)
        console.log(inputCashRecieved.value)
        if(inputBillAmt.value>inputCashRecieved.value)
        {
            console.log(inputBillAmt.value)
            console.log(inputCashRecieved.value)
          var change=inputCashRecieved.value-inputBillAmt.value;
          console.log(change); 
          showError("WELLDONE")
        }
        else showError("Cash recieved less than bill amount, ")
    }
    else showError("Bill amount should be greater than 0")
}
function showError(message)
{
    error.innerText=message;
}
button.addEventListener("click", clickEventHandler)
