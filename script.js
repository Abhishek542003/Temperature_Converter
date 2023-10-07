// Get input elements
const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

// Add input event listeners for Celsius
celsiusInput.addEventListener("input", convertFromCelsius);

function convertFromCelsius() {
  const celsius = parseFloat(celsiusInput.value);
  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;

  fahrenheitInput.value = fahrenheit.toFixed(2);
  kelvinInput.value = kelvin.toFixed(2);
}

// Add input event listeners for Fahrenheit
fahrenheitInput.addEventListener("input", convertFromFahrenheit);

function convertFromFahrenheit() {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  const celsius = ((fahrenheit - 32) * 5) / 9;
  const kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;

  celsiusInput.value = celsius.toFixed(2);
  kelvinInput.value = kelvin.toFixed(2);
}

// Add input event listeners for Kelvin
kelvinInput.addEventListener("input", convertFromKelvin);

function convertFromKelvin() {
  const kelvin = parseFloat(kelvinInput.value);
  const celsius = kelvin - 273.15;
  const fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;

  celsiusInput.value = celsius.toFixed(2);
  fahrenheitInput.value = fahrenheit.toFixed(2);
}
