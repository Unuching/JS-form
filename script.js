function validateForm() {
  let x = document.forms["myForm"]["fName"].value;
  if (x == "") {
    alert("Name must be filled");
    return false;
  }
}

// function validateForm() {
//   var name = document.forms["myForm"]["fName"].value;
//   if (name == "") {
//     alert("Name must be filled out");
//     return false;
//   }
//   return true;
// }
