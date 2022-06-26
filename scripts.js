function WelcomeCoder() {
  confirm("Welcome fellow coder!");
}

function VisitorBook() {
  let person = prompt("Please add your nameto the website log");
  if (person =="" || person == null) {
    alert("Please enter your name");
    return false;
  }
  
  else
  
  document.getElementById("answer").innerHTML =
    "Welcome " + person + " Enjoy your visit!";
    changeColor('yellow');
  }

function CurrentDate() {
    document.getElementById("time").innerHTML =
    new Date();
}