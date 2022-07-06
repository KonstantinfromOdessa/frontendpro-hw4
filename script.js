let yourChoose;
let firstNumber;
let secondNumber;
let repeat;
let history = [];

do {
    do {
        yourChoose = prompt(`Enter math action (+, -, /, *, %, pow, cos, sin, history)`);
    } while (yourChoose !== '*' && 
        yourChoose !== '/' &&
        yourChoose !== '+' && 
        yourChoose !== '-' && 
        yourChoose !== '%' &&
        yourChoose !== 'cos' && 
        yourChoose !== 'sin' &&
        yourChoose !== 'pow' &&
        yourChoose !== 'history');

    if (yourChoose === 'cos' || yourChoose === 'sin') {
        do {
            firstNumber = Number(prompt (`Enter first number`));
            console.log(`Enter valid value`);
        } while (isNaN(firstNumber));
    } else if (yourChoose === 'history') {
        console.log(history);
    } else {
        do {
            firstNumber = Number(prompt (`Enter first number`)); 
            console.log(`Enter valid first value`);
        } while (isNaN(firstNumber));
        do {
            secondNumber = Number(prompt (`Enter second number`));
            console.log(`Enter valid second value`);
        } while (isNaN(secondNumber));
    }

    switch (yourChoose) {
        case "cos":
            console.log(`cos ${firstNumber} = ${Math.cos(firstNumber)}`);
            history.push(`cos ${firstNumber} = ${Math.cos(firstNumber)}`);
            break;  
        case "sin":
            console.log(`sin ${firstNumber} = ${Math.sin(firstNumber)}`);
            history.push(`cos ${firstNumber} = ${Math.sin(firstNumber)}`);
            break;  
        case "*":
            console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
            history.push(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
            break;
        case "/":
            console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
            history.push(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
            break;
        case "+":
            console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
            history.push(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
            break;
        case "-":
            console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
            history.push(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
            break;
        case "%":
            console.log(`${firstNumber}% від ${secondNumber} = ${firstNumber / 100 * secondNumber}`);
            history.push(`${firstNumber}% від ${secondNumber} = ${firstNumber / 100 * secondNumber}`);
            break;
        case "pow":
            console.log(`${firstNumber} exponent -> ${secondNumber} = ${Math.pow(firstNumber,secondNumber)}`);
            history.push(`${firstNumber} exponent -> ${secondNumber} = ${Math.pow(firstNumber,secondNumber)}`);
            break;   
    }

    repeat = confirm("Повторити операцію?");
} while (repeat);


