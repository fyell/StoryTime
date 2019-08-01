function swap(id1, id2) {
  var currentElement = document.getElementById(id1);
  var nextElement = document.getElementById(id2);
  currentElement.classList.remove("active");
  currentElement.classList.add("inactive");
  nextElement.classList.add("active");
}

function playDrums() { 
  var audio = document.getElementById("drums");
  audio.play(); 
} 
