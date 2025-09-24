let display = document.getElementById("display");

function appendValue(val) {
  if (display.innerText === "0") {
    display.innerText = val;
  } else {
    display.innerText += val;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  if (display.innerText.length === 1) {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculateResult() {
  try {
    let result = eval(display.innerText.replace(/x/g, "*"));
    display.innerText = result;
  } catch (error) {
    display.innerText = "Error";
  }
}
