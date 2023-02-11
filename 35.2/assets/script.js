document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('waitButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = illuminateGreen;

function illuminateRed() {
  noLight();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateYellow() {
  noLight();
  document.getElementById('waitLight').style.backgroundColor = "yellow";
}

function illuminateGreen() {
    noLight();
    document.getElementById('goLight').style.backgroundColor = "green";
  }

function noLight() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('waitLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}