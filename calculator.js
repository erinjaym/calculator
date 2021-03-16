let total = 0; 
let operator = "none";
let currentNumber = 0;
let lastNumber = null;
let displayNumber = "0";

function execute ()
{   // only works when new start or after reset. Not after operator call. 
    if (operator === "none")
    {
        display();
        console.log('worked');
    }
    else 
    {
        console.log(operator.toString() + lastNumber + currentNumber);
        operate (operator, lastNumber, currentNumber); 
        operator = "none";
    }
}

// operator assignement with clicks of a button or ASCII assignment

function operate (operator, number1, number2) 
{
    if (operator == "+")
    {
        total = add(number1, number2);
        displayNumber = total.toString();
        display();
        currentNumber = total;
        return total;
    }
    else if (operator == "-")
    {
        total = subtract(number1, number2);
        displayNumber = total.toString();
        display();
        currentNumber = total;
        return total;

    }
    else if (operator == "*")
    {
        total = multiply(number1, number2);
        displayNumber = total.toString();
        display();
        currentNumber = total;
        return total;
        
    }
    else if (operator == "/")
    {

        total = divide(number1, number2);
        displayNumber = total.toString();
        display();
        currentNumber = total;
        return total;
        
    }
    else // base case or something went wrong
    {
    return 404;
    }
}




// operation functions 
    function add (number1, number2) 
    {
    return number1 + number2;
    }
        
    function subtract (number1, number2) 
    {
    return number1 - number2; 
    }

    function multiply (number1, number2) 
    {
    
        if (number1 == 0 || number2 == 0)
        {
        return "Duh, 0" ;
        }
        else
        {
        return number1 * number2;
        }
    }

    function divide (number1, number2)
    {
        if (number2 == 0)
        {
        return "LOL";
        }
        else 
        {
         return number1 / number2;
        }


    } 


// need base case for if there is a current total so you cannot add to number
    function setNumber (number)
    {
        if (number == 0 && displayNumber == 0 )
        {
        display();
        }
        else if(displayNumber == 0 || displayNumber == operator || displayNumber == total)
        {
        displayNumber = number.toString();
        display();
        }
        else 
        {
        displayNumber += number.toString();
        display();
        }
    currentNumber = parseInt(displayNumber);
    }

    function setOperator (string)  
    {
        if (operator != "none")
        {
            operate (operator, lastNumber, currentNumber); 
            console.log("dosomeshit");
            lastNumber = currentNumber;
            currentNumber = 0; 
        }
        else {

            operator = string; 
            console.log("only 2 numbers");
            lastNumber = currentNumber;
            currentNumber = 0; 
            displayNumber = operator;
            display();
        }

     
    }

    function reset()
    {
        total = 0;
        currentNumber = 0;
        lastNumber = null;
        operator = "none";
        displayNumber = "0";
        display();
    }

    display();
    function display ()
    {
        if (displayNumber.length < 9) 
        {
        document.getElementById("onScreen").lastChild.textContent = displayNumber;
        }
        else
        {
        document.getElementById("onScreen").lastChild.textContent = angryPhraseSelector();
        }
    }

function angryPhraseSelector ()
    {
    let angryPhrase = "";
    let gamble = Math.floor(Math.random() * 7);
    console.log("gamble" + gamble);
    if (gamble == 1)
    {
        angryPhrase = "Really?";
    }
    else if (gamble == 2)
    {
        angryPhrase = "HATE U!";
    }
    else if (gamble == 3)
    {
        angryPhrase = "Growl";
    }
    else if (gamble == 4)
    {
        angryPhrase = "NOPE!";
    }
    else if (gamble == 5)
    {
        angryPhrase = "NO!";
    }
    else if (gamble == 6)
    {
        angryPhrase = "GO AWAY";
    }
    else 
    {
        angryPhrase = "Really?";
    }

return angryPhrase;
}
