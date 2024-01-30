var boxes = document.getElementsByClassName("box");

  // Loop through the boxes
  for (var i = 0; i < boxes.length; i++) {
    // Change the height and width
    boxes[i].style.height = "100px";
    boxes[i].style.width = "100px";

    // Change the color
    boxes[i].style.backgroundColor = "darkseagreen";
  }
