function WelcomeCoder() {
  confirm("Welcome fellow coder!");
}

function VisitorBook() {
  let person = prompt("Please add your nameto the website log", "Enter Name here!");
  if (person != null) {
    document.getElementById("answer").innerHTML =
    "Welcome " + person + " Enjoy your visit!";
    changeColor('yellow');
  }
}

function CurrentDate() {
    document.getElementById("time").innerHTML =
    new Date();
}