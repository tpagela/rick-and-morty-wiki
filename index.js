

window.onload = function() {
    // Add the animation class to the image-container elements
    var containers = document.querySelectorAll(".image-container");
    containers.forEach(function(container) {
      container.classList.add("animation");
    });
  };