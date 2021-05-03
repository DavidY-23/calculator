/*
function operate(num1, num2, operator)
{
    const calculated;
    return calculated
}
*/

let a = "";
let b = "";
let c = "";

function display(time) {
    console.log(time);
    if (time === "c")
    {
        a = "";
        b = "";
        c = "";
        document.getElementById("display").innerHTML = "";

    }
    else if (time === "-")
    {
        b = a;
        a = "";
        c = "-";
        document.getElementById("display").innerHTML += time;

    }

    else if (time === "+")
    {
        b = a;
        a = "";
        c = "+";
        document.getElementById("display").innerHTML += time;

    }

    else if (time === "x")
    {
        b = a;
        a = "";
        c = "x";
        document.getElementById("display").innerHTML += time;


    }
    else if (time === "/")
    {
        b = a;
        a = "";
        c = "/";
        document.getElementById("display").innerHTML += time;
    }
    else if (time === "=")
    {
        if (c === "+")
        {
            let calculated = parseFloat(a) + parseFloat(b);
            document.getElementById("display").innerHTML = calculated;
            a = calculated;
            c = "";

            return;
    
        }
        else if (c === "-")
        {
            let calculated = parseFloat(b) - parseFloat(a);
            document.getElementById("display").innerHTML = calculated;
            a = -calculated;
            console.log(calculated);
            c = "";

            return;
    
        }
        else if (c === "x")
        {
            let calculated = parseFloat(a) * parseFloat(b);
            document.getElementById("display").innerHTML = calculated;
            a = calculated;
            c = "";
            return;
    
        }
        else if (c === "/")
        {
            if ((a) == 0)
            {
                document.getElementById("display").innerHTML = "You cannot divide by 0."
                return;
            }
            let calculated = parseFloat(b) / parseFloat(a);
            document.getElementById("display").innerHTML = calculated;
            a = calculated;
            c = "";
            return;
    
        }
        else
        {
            return;
        }
    }
    else
    {
        a += String(time);
        document.getElementById("display").innerHTML += time;
    
    }
    
    
  }