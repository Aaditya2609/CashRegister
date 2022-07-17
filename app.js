var inputBillAmt= document.querySelector("#bill-amt");
var inputCashRecieved=document.querySelector("#cash-recieved");
var error=document.querySelector("#errorMsg");
var button=document.querySelector("#button");

var denominations=[2000,500,100,20,10,5,1];
var tableNoOfNotes=document.querySelectorAll(".noOfNotes")


function clickEventHandler()
{

    if(inputBillAmt.value>0)
    {
        if(inputBillAmt.value<=inputCashRecieved.value)
        {
          var change=inputCashRecieved.value-inputBillAmt.value;
          console.log(change);
          changeCalculate(change);
        }
        else showError("Cash recieved less than bill amount, ")
    }
    else showError("Bill amount should be greater than 0")
}

function showError(message)
{

    error.innerText=message;
}
function changeCalculate(change)
{
    for(i=0;denominations.length;i++)
    {
        var noOfNotes=Math.trunc(change/denominations[i])
        change=change%denominations[i];
        tableNoOfNotes[i].innerText=noOfNotes;
    }

}
button.addEventListener("click", clickEventHandler)
