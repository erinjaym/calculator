let total = 0;
let operator = "none";
let currentNumber = 0;
let lastNumber = null;
let displayNumber = "0";

function execute() {
  if (operator === "none") {
    display();
  } else {
    operate(operator, lastNumber, currentNumber);
    operator = "none";
  }
}

function operate(operator, number1, number2) {
  if (operator == "+") {
    total = add(number1, number2);
    displayNumber = total.toString();
    display();
    currentNumber = total;
    return total;
  } else if (operator == "-") {
    total = subtract(number1, number2);
    displayNumber = total.toString();
    display();
    currentNumber = total;
    return total;
  } else if (operator == "*") {
    total = multiply(number1, number2);
    displayNumber = total.toString();
    display();
    currentNumber = total;
    return total;
  } else if (operator == "/") {
    total = divide(number1, number2);
    displayNumber = total.toString();
    display();
    currentNumber = total;
    return total;
  } // something went wrong
  else {
    displayNumber = "OOPS!";
    display();
    return "Error";
  }
}

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  if (number1 == 0 || number2 == 0) {
    return "Duh, 0";
  } else {
    return number1 * number2;
  }
}
divide(5, 2);
function divide(number1, number2) {
  if (number2 == 0) {
    return "LOL";
  } else {
    if ((number1 / number2).toString().length >= 10) {
      // too big for screen
      return Math.round((number1 / number2 + Number.EPSILON) * 100) / 100;
    } else {
      return number1 / number2;
    }
  }
}

function setNumber(number) {
  if (number == 0 && displayNumber == 0) {
    display();
  } else if (
    displayNumber == 0 ||
    displayNumber == operator ||
    displayNumber == total
  ) {
    displayNumber = number.toString();
    display();
  } else {
    displayNumber += number.toString();
    display();
  }
  currentNumber = parseInt(displayNumber);
}

function setOperator(string) {
  if (operator != "none") {
    // equals was not pushed but there is an operator selected
    operate(operator, lastNumber, currentNumber);
    lastNumber = currentNumber;
    currentNumber = 0;
    operator = string;
  } else {
    // equals was pushed or no operator selected

    operator = string;
    lastNumber = currentNumber;
    currentNumber = 0;
    displayNumber = operator;
    display();
  }
}

function reset() {
  total = 0;
  currentNumber = 0;
  lastNumber = null;
  operator = "none";
  displayNumber = "0";
  display();
}

function display() {
  if (displayNumber.length < 9) {
    document.getElementById("onScreen").lastChild.textContent = displayNumber;
  } else {
    document.getElementById("onScreen").lastChild.textContent =
      angryPhraseSelector();
  }
}

function angryPhraseSelector() {
  let angryPhrase = "";
  let gamble = Math.floor(Math.random() * 7);
  if (gamble == 1) {
    angryPhrase = "Really?";
  } else if (gamble == 2) {
    angryPhrase = "HATE U!";
  } else if (gamble == 3) {
    angryPhrase = "GROWL";
  } else if (gamble == 4) {
    angryPhrase = "NOPE!";
  } else if (gamble == 5) {
    angryPhrase = "NO!";
  } else if (gamble == 6) {
    angryPhrase = "GO AWAY";
  } else {
    angryPhrase = "WHY?";
  }
  total = 0;
  currentNumber = 0;
  lastNumber = null;
  operator = "none";
  displayNumber = "0";
  console.log("Number is too big! Calculator is mad!");
  return angryPhrase;
}

// listen for the keyboard commands
window.addEventListener("keydown", function (e) {
  //numbers and numpad
  if (e.keyCode == 48 || e.keyCode == 96) {
    setNumber(0);
  } else if (e.keyCode == 49 || e.keyCode == 97) {
    setNumber(1);
  } else if (e.keyCode == 50 || e.keyCode == 98) {
    setNumber(2);
  } else if (e.keyCode == 51 || e.keyCode == 99) {
    setNumber(3);
  } else if (e.keyCode == 52 || e.keyCode == 100) {
    setNumber(4);
  } else if (e.keyCode == 53 || e.keyCode == 101) {
    setNumber(5);
  } else if (e.keyCode == 54 || e.keyCode == 102) {
    setNumber(6);
  } else if (e.keyCode == 55 || e.keyCode == 103) {
    setNumber(7);
  } else if (e.keyCode == 56 || e.keyCode == 104) {
    setNumber(8);
  } else if (e.keyCode == 57 || e.keyCode == 105) {
    setNumber(9);
  }
  // operators and execute
  else if (e.keyCode == 106) {
    // multiply
    setOperator("*");
  } else if (e.keyCode == 107) {
    //add
    setOperator("+");
  } else if (e.keyCode == 109) {
    //subtract
    setOperator("-");
  } else if (e.keyCode == 111) {
    //divide
    setOperator("/");
  } else if (e.keyCode == 67) {
    //clear
    reset();
  } else if (e.keyCode == 187 || e.keyCode == 13) {
    // equals or enter
    execute();
  } else {
  }
});
