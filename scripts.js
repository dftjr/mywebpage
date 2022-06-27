function WelcomeCoder() {
  confirm("Welcome fellow coder!");
}

function VisitorBook() {
  let person = prompt("Please add your name to the website log");
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

function ShowSelfie() {
  var selfie = [selfie.jpg]
  let text = "";
  let i = 0;
  let count = prompt("Please enter the number you would like to see (Under 5)");
  if (count =="" || count == null || count >= 6) {
    alert("Please enter a valid number");
    return false;
  }
  
  else
  
  while (i <= count) {
    text += "<br>" + selfie + " " + i;
    i++;
  }
  document.getElementById("numbers").innerHTML = text;
}

