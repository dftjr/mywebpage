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
  }

function CurrentDate() {
    document.getElementById("time").innerHTML =
    new Date();
}

function ShowSelfie() {
  let count = prompt("Please enter the number you would like to see (Under 5)");
  if (count =="" || count == null || count >= 6) {
    alert("Please enter a valid number");
    return false;
  }
  
  else
  
  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");
    img.src = "./selfie.jpg";
    document.body.appendChild(img);
  }
  document.getElementById("number");
}
