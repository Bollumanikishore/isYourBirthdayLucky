var input_date = document.querySelector("#input");
var output_num = document.querySelector("#input-number");
var button = document.querySelector("#button");
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
    if(sum % outputNum == 0)
    {
        console.log("Lucky");
    }
}
button.addEventListener("click",clickEventHandler);