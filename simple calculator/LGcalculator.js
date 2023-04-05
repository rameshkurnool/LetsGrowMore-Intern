let result = document.getElementById('result');

function appendToResult(value) {
    result.value += value;
}

function clearResult() {
    result.value = '';
}

function backspace() {
    result.value = result.value.slice(0, -1);
}

function operate(operator) {
    if (operator === '=') {
        result.value = eval(result.value);
    } else {
        result.value += operator;
    }
}
