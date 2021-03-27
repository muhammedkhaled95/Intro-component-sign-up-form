// /*************************************************************************************************/
function validateEmptyFirstName(){
  var fName = document.form.firstName.value;

  if(fName == "" || fName == null)
  {

    document.getElementsByClassName("error-image")[0].classList.add("error");
    document.getElementsByClassName("error-message")[0].classList.add("show-error-message");
    document.getElementsByClassName("input")[0].classList.add("error-border");

    return false;
  }


}
// /*************************************************************************************/
/*validate last name if not empty*/
function validateEmptyLastName(){
  var lName = document.form.lastName.value;
  if(lName == "" || lName == null)
  {
    document.getElementsByClassName("error-image")[1].classList.add("error");
    document.getElementsByClassName("error-message")[1].classList.add("show-error-message");
    document.getElementsByClassName("input")[1].classList.add("error-border");

    return false;
  }


}
// /**********************************************************************************/
// Email field validation
// email validation rules
// ----------------------
/*
  1- at least 1 character before @  condition is atPosition < 1
  2- 5 characters between @ and .   condition is dotPosition < atPosition + 5
  3- at least 2 characters after .  condition is dotPosition + 2 >= x.length
*/
function validateEmail(){
  var x = document.form.Email.value;
  var atPosition = x.indexOf("@");
  var dotPosition = x.indexOf(".");
  if(atPosition < 1 || dotPosition < atPosition+5 || dotPosition+2 >= x.length){
    document.getElementsByClassName("error-image")[2].classList.add("error");
    document.getElementsByClassName("error-message")[2].classList.add("show-error-message");
    document.getElementsByClassName("input")[2].classList.add("error-border");

    return false;
  }


}
// /*************************************************************************************/
// /*validate missing password*/

function validateEmptyPassword(){
  var pass = document.form.Password.value;
  if(pass == "" || pass == null)
  {
    document.getElementsByClassName("error-image")[3].classList.add("error");
    document.getElementsByClassName("error-message")[3].classList.add("show-error-message");
    document.getElementsByClassName("input")[3].classList.add("error-border");
    return false;
  }
}



























/*************************************************************************************************************************/
// YOUTUBE VIDEO CODE USING SETERROR AND SETSUCCESS FUNCTIONS
// const form = document.getElementById("form");
// const fname = document.getElementById("firstname");
// const lname = document.getElementById("lastname");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
//
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   validate();
// });
//
//
// function validate(){
//   const firstName = fname.value.trim();  /*we used trim() function here to remove any whitespace entered by the user*/
//   const lastName = lname.value.trim();
//   const email = email.value.trim();
//   const password = password.value.trim();
//
//   if(firstName === ""){
//     //show error
//     //add error class
//     setErrorFor(firstName, 'First Name cannot be empty');
//   } else{
//     //add success
//     setSuccessFor(firstName);
//   }
// }
//
//
//
// function setErrorFor(input, message){
//   const formControl = input.parentElement; //form-control where error class will be added
//   const span = formControl.querySelector("span");
//   span.innerText = message;
//
//   //add error class
//   formControl.className = 'form-control error';
// }
//
//
// function setSuccessFor(input){
//   const formControl = input.parentElement;
//   formControl.className = "form-control success";
// }
/***************************************************************************************************************************************/
