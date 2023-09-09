let result = document.getElementById("result");

function insertNumber(num) {
  result.value += num;
}

function insertSymbol(symbol) {
  result.value += symbol;
}

function clearResult() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  result.value = eval(result.value);
}
