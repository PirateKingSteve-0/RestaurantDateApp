var slider = 0;
slider = document.getElementById("myRange");
var output = "";
output = document.getElementById("travDist");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

