var input_date = document.querySelector("#input");
var output_num = document.querySelector("#input-number");
var button = document.querySelector("#button");
var outputId = document.querySelector("#output-id");
function clickEventHandler()
{
    var sum=0;
    var outputNum = output_num.value;
    const val = input_date.value;
    var val1=val.replaceAll('-','0');
    var val2=parseInt(val1);
    while(val2 != 0)
    {
        var n = Math.floor(val2%10);
        sum = sum+n;
        val2=Math.floor(val2/10);
    }
    var mesg1 = " is a lucky number 🥳 🥳";
    var mesg2 = " is not lucky number";
    if(sum % outputNum == 0)
    {
        // console.log(mesg1);
        outputId.innerText =outputNum + mesg1;
    }
    else{
        // console.log(mesg2);
        outputId.innerText = outputNum + mesg2;
    }
    
}
button.addEventListener("click",clickEventHandler);