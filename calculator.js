
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
        return operate (operator, lastNumber, currentNumber); 

    }
}

// operator assignement with clicks of a button or ASCII assignment

function operate (operator, number1, number2) 
{
    if (operator == "addition")
    {
        total = add(number1, number2);
        displayNumber = total.toString();
        display();
        currentNumber = total;
        operator = "none";
        return total;
    }
    else if (operator == "subtraction")
    {
        total = subtract(number1, number2);
        displayNumber = total.toString();
        display();
        currentNumber = total;
        lastNumber = 0;
        operator = "none";
        return total;

    }
    else if (operator == "multiplication")
    {
        total = multiply(number1, number2);
        displayNumber = total.toString();
        display();
        currentNumber = total;
        lastNumber = 0;
        operator = "none";
        return total;
        
    }
    else if (operator == "division")
    {

        total = divide(number1, number2);
        displayNumber = total.toString();
        display();
        currentNumber = total;
        lastNumber = 0;
        operator = "none";
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
    return number1 * number2;
    }

    function divide (number1, number2)
    {
    return number1 / number2;
    } 


// need base case for if there is a current total so you cannot add to number
    function setNumber (number)
    {
        if (number == 0 && displayNumber == 0 )
        {
        display();
        }
        else if(displayNumber == 0 || displayNumber == "+*-/")
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

        lastNumber = currentNumber;
        currentNumber = 0; 
        displayNumber = "+*-/";
        display();
        operator = string; 
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
        document.getElementById("onScreen").lastChild.textContent = displayNumber;
    }

