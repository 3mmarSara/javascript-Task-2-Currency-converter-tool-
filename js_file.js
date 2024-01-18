

var exchangeSelect = document.getElementsByName("exchange");
var amount = document.getElementsByName("amount");
var resValue = document.querySelector(".result"); 

document.querySelector(".registerForm").onsubmit = function(e){
    e.preventDefault();
    var selectedOption = exchangeSelect[0].value;
    console.log(selectedOption);
    var res;
    if(selectedOption == "dollar"){
        res = amount[0].value * 3.77 + " $";
    }else if(selectedOption == "dinar"){
        res = amount[0].value * 5.3 + " JOD";
    }else if(selectedOption == "nis"){
        res = amount[0].value + " ILS"
    }
    resValue.innerHTML = res;

}