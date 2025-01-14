function appendValue(value) {
    const result = document.getElementById('result');
    result.value += value;
}

function clearResult() {
    const result = document.getElementById('result');
    result.value = '';
}

function backspace() {
    const result = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    const result = document.getElementById('result');
    try {
        result.value = eval(result.value) || 0; // Use eval cautiously
    } catch (error) {
        result.value = 'Error';
    }
}

function calculatePercentage() {
    const result = document.getElementById('result');
    try {
        result.value = parseFloat(result.value) / 100; // Convert input to percentage
    } catch (error) {
        result.value = 'Error';
    }
}
