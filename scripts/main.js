// Academics
var gradText = document.getElementById('academics_text');
gradText.style.display = "none";
var grad_tile = document.getElementById('academics');

grad_tile.onmouseover = function() {
  gradText.style.display = "block";
}

grad_tile.onmouseout = function() {
  gradText.style.display = "none";
}

// Experience
var expText = document.getElementById('exp_text');
expText.style.display = "none";
var exp_tile = document.getElementById('exp');

exp_tile.onmouseover = function() {
  expText.style.display = "block";
}

exp_tile.onmouseout = function() {
  expText.style.display = "none";
}

// Skills
var skillText = document.getElementById('skills_text');
skillText.style.display = "none";
var skill_tile = document.getElementById('skills');

skill_tile.onmouseover = function() {
  skillText.style.display = "block";
}

skill_tile.onmouseout = function() {
  skillText.style.display = "none";
}

// Achievements
/*var achieveText = document.getElementById('achieve_text');
achieveText.style.display = "none";
var achieve_tile = document.getElementById('achieve');

achieve_tile.onmouseover = function() {
  achieveText.style.display = "block";
}

achieve_tile.onmouseout = function() {
  achieveText.style.display = "none";
}*/

// Projects
var projectText = document.getElementById('projects_text');
projectText.style.display = "none";
var project_tile = document.getElementById('projects');

project_tile.onmouseover = function() {
  projectText.style.display = "block";
}

project_tile.onmouseout = function() {
  projectText.style.display = "none";
}

// Co-curricular Activities
var extraText = document.getElementById('extra_text');
extraText.style.display = "none";
var extra_tile = document.getElementById('extra');

extra_tile.onmouseover = function() {
  extraText.style.display = "block";
}

extra_tile.onmouseout = function() {
  extraText.style.display = "none";
}




/*var myHeading = document.querySelector('h1');
myHeading.innerHTML = 'Hello world!';

/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/stars.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}*/
