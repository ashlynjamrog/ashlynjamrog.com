var i = 0;
var j = 0;
var txt = ["Hello! Welcome to my website..", "My name is Ashlyn and I am about to graduate from Washington State Univeristy with a BS in Computer Science..",
    "I am currently looking for full time employment. Feel free to reach out by email.."];
var speed = 50;

function typeWriter() {
    if ( j < txt.length) {
    if ((i === (txt[j].length-1)) && j < txt.length) {
        document.getElementById("bio").innerHTML += '<br>';
        j++;
        i = 0;
    }
    if (i < txt[j].length) {
      document.getElementById("bio").innerHTML += txt[j].charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  }