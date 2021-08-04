//a is the first value, b is the sign, c is the 2nd number 
let a = "";
let b = "";
let c = "";

function keyCode(event) {
    if(['0', '1', '2', '3', '4', '5','6','7','8','9', '+', '-', '/', '*', 'Enter', 'c'].includes(event.key)) {
        display(event.key)
    }
} 
function display(time) {
    if (time === "c") {
        a = "";
        b = "";
        c = "";
        document.getElementById("display").innerHTML = "";
    }
    else if (time === "-") {
        if (c != "") {
            calculating(a, b, c);
        }
        b = a;
        a = "";
        c = "-";
        document.getElementById("display").innerHTML += time;
    }

    else if (time === "+") {
        if (c != "") {
            calculating(a, b, c);
        }
        b = a;
        a = "";
        c = "+";
        document.getElementById("display").innerHTML += time;
    }

    else if (time === "x") {
        if (c != "") {
            calculating(a, b, c);
        }
        b = a;
        a = "";
        c = "x";
        document.getElementById("display").innerHTML += time;
    }
    else if (time === "/") {
        if (c != "") {
            calculating(a, b, c);
        }
        b = a;
        a = "";
        c = "/";
        document.getElementById("display").innerHTML += time;
    }
    else if (time === "=" || time === "Enter") {
        calculating(a, b, c);
        return;
    }
    else {
        a += String(time);
        document.getElementById("display").innerHTML += time;
    }
  }

  function calculating(firstNum, secondNum, operator)
  {
        if (operator === "+") {
            let calculated = parseFloat(firstNum) + parseFloat(secondNum);
            document.getElementById("display").innerHTML = calculated;
            a = calculated;
            c = "";
            return;
    
        }
        else if (operator === "-") {
            let calculated = parseFloat(secondNum) - parseFloat(firstNum);
            document.getElementById("display").innerHTML = calculated;
            a = calculated;
            console.log(calculated);
            c = "";

            return;
    
        }
        else if (operator === "x") {
            let calculated = parseFloat(firstNum) * parseFloat(secondNum);
            document.getElementById("display").innerHTML = calculated;
            a = calculated;
            c = "";
            return;
    
        }
        else if (operator === "/") {
            if ((firstNum) == 0)
            {
                document.getElementById("display").innerHTML = "You cannot divide by 0."
                return;
            }
            let calculated = parseFloat(secondNum) / parseFloat(firstNum);
            document.getElementById("display").innerHTML = calculated;
            a = calculated;
            c = "";
            return;
        }
        else {
            return;
        }
    }