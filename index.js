let decimal;
let binary;
let hexadecimal;

function submitDecimal() {
  decimal = Number(document.getElementById("decimal-box").value);
  binary = decimal_to_binary(decimal);
  hexadecimal = decimal_to_hexadecimal(decimal);

  document.getElementById("decimal-results").innerHTML = "Decimal: " + decimal;
  document.getElementById("binary-results").innerHTML = "Binary: " + binary;
  document.getElementById("hexadecimal-results").innerHTML = "Hexadecimal: " + hexadecimal;
}
function submitBinary() {
  binary = document.getElementById("binary-box").value;
  decimal = binary_to_decimal(binary);
  hexadecimal = decimal_to_hexadecimal(decimal);

  document.getElementById("decimal-results").innerHTML = "Decimal: " + decimal;
  document.getElementById("binary-results").innerHTML = "Binary: " + binary;
  document.getElementById("hexadecimal-results").innerHTML = "Hexadecimal: " + hexadecimal;
}

function submitHexadecimal() {
  hexadecimal = document.getElementById("hexadecimal-box").value;
  decimal = hexadecimal_to_decimal(hexadecimal);
  binary = decimal_to_binary(decimal);

  document.getElementById("decimal-results").innerHTML = "Decimal: " + decimal;
  document.getElementById("binary-results").innerHTML = "Binary: " + binary;
  document.getElementById("hexadecimal-results").innerHTML = "Hexadecimal: " + hexadecimal;
}

function decimal_to_binary(decimal){
  return decimal.toString(2)
}
function decimal_to_hexadecimal(decimal){
  return decimal.toString(16);
}
function binary_to_decimal(binary){
  return parseInt(binary,2)
}
function hexadecimal_to_decimal(hexadecimal) {
  return parseInt(hexadecimal,16);
}
