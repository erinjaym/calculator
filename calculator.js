
let total = 0; 
let lastTotal = 0; 


// operator assignement with clicks of a button or ASCII assignment

function operate (operator, number1, number2) 
{
    if (operator == "addition")
    {
        lastTotal = total;
        total += add(number1, number2);
        return total;
    }
    else if (operator == "subtraction")
    {
        lastTotal = total;
        total += subtract(number1, number2);
        return total;

    }
    else if (operator == "multiplication")
    {
        lastTotal = total;
        total += multiply(number1, number2);
        return total;
        
    }
    else if (operator == "division")
    {
        lastTotal = total;
        total += divide(number1, number2);
        return total;
        
    }
    else // base case or something went wrong
    {
    return 80085;
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

    function clear()
    {
    return total = 0;
    }

