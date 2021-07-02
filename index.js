//Modal for ADD starts here        
// Get the modal
var modalAdd = document.getElementById("AddModal");

// Get the button that opens the modal
var btnAdd = document.getElementById("myAdd");

// Get the <span> element that closes the modal
var spanAdd = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnAdd.onclick = function () {
  modalAdd.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanAdd.onclick = function () {
  modalAdd.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalAdd) {
    modalAdd.style.display = "none";
  }
}

//Modal for ADD ends here  



//Modal for EDIT starts here  

// Get the modal
var modalEdit = document.getElementById("EditModal");

// Get the button that opens the modal
var btnEdit = document.getElementById("myEdit");

// Get the <span> element that closes the modal
var spanEdit = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btnEdit.onclick = function () {
  modalEdit.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanEdit.onclick = function () {
  modalEdit.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalEdit) {
    modalEdit.style.display = "none";
  }
}

//Modal for EDIT ends here  