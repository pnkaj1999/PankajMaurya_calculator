function valuebutton(e)
{
    calculatorform.screen.value += e.value;
    
}
function calculate()
{
    
    var amount = document.getElementById("result").value; 
    if(amount.includes("%")){
    perCheck();
    }
    else if(amount.includes("xy")){
        powcheck();
    }
    else{
        calculatorform.screen.value = eval(calculatorform.screen.value);
    }
}
function Clear()
{
    calculatorform.screen.value = null;
}
function Backspace()
{
    calculatorform.screen.value=calculatorform.screen.value.slice(0,-1);
}
function square()
{
    calculatorform.screen.value = (calculatorform.screen.value*calculatorform.screen.value);
}
function cube()
{
    calculatorform.screen.value = (calculatorform.screen.value*calculatorform.screen.value*calculatorform.screen.value);
}
function sqrt()
{
    calculatorform.screen.value= Math.sqrt(calculatorform.screen.value);   
}
// function for percentage
function perCheck(){
    var answer = 0;
    var amount = document.getElementById("result").value; 
    if(amount.includes("%")){
        var perAmount = amount.split("%");
        if(perAmount.length == 2  && perAmount[0] != '' && perAmount[1] != ''){
            answer = perAmount[0]*perAmount[1]/100;
            document.getElementById("result").value = answer;       
        }
        else{
            return false;
        }
    }else{
        return false;
    }
}
// function for x to y
function powcheck()
{
    var answer = 0;
    var amount = document.getElementById("result").value; 
    if(amount.includes("xy")){
        var perAmount = amount.split("xy");
        if(perAmount.length == 2  && perAmount[0] != '' && perAmount[1] != ''){
            answer = Math.pow(perAmount[0],perAmount[1]);
            document.getElementById("result").value = answer;       
        }
        else{
            return false;
        }
    }else{
        return false;
    }
}

