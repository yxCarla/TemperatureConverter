var tempOutputCelsius = document.getElementById('celsius_output');
var tempOutputFahrenheit = document.getElementById('fahrenheit_output');
var tempInput = document.getElementById('temp_input');
var convertCelsiusButton = document.getElementById('convert_celsius');
var convertFahrenheitButton = document.getElementById('convert_fahrenheit')

var fahrenheitBox = document.getElementById('fahrenheit_box');
var celsiusBox = document.getElementById('celsius_box');

var chooseCButton = document.getElementById('chooseC');
var chooseFButton = document.getElementById('chooseF');

var mainBox = document.getElementById('main_box');

function hideAll() {
    mainBox.style.display = 'none';
}

function convertC() {
    var celsiusOutput = tempInput.value;
    var celsiusOutput = ((tempInput.value) - 32) / 1.8;

    tempOutputCelsius.innerHTML = celsiusOutput.toFixed(1);
}

convertCelsiusButton.addEventListener('click', convertC);

function convertF() {
    var fahrenheitOutput = tempInput.value;
    var fahrenheitOutput = ((tempInput.value) * 1.8) + 32;

    tempOutputFahrenheit.innerHTML = fahrenheitOutput.toFixed(1);
}

convertFahrenheitButton.addEventListener('click', convertF);

function chooseC() {
    fahrenheitBox.style.display = 'none';
    celsiusBox.style.display = 'block';
    mainBox.style.display = 'block';
    chooseCButton.style.border = '0.2vw solid black';
    chooseFButton.style.border = 'none';
}

chooseCButton.addEventListener('click', chooseC);

function chooseF() {
    celsiusBox.style.display = 'none';
    fahrenheitBox.style.display = 'block';
    mainBox.style.display = 'block';
    chooseFButton.style.border = '0.2vw solid black';
    chooseCButton.style.border = 'none';
}

chooseFButton.addEventListener('click', chooseF);