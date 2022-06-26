function WelcomeCoder() {
  confirm("Welcome fellow coder!");
}

function VisitorBook() {
  let person = prompt("Please add your nameto the website log", "Enter Name here!");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Welcome " + person + " Enjoy your visit!";
    input.style.backgroundColor = 'lime';
  }
  requestIdleCallback
}