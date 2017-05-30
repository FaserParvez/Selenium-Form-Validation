//Jquery for form validation
// Created by Faser Parvez
// u1167937
// Web Design and Programming

$(document).ready(function() {
  
  //This is giving the field a name to set. 
  var firstName = $("#firstName");
  var firstNameErrorMsg = $("#firstNameErrorMsg");
  //This will trigger an onblur event on the function called/
  firstName.blur(validatefirstname);
  firstName.blur(validatewrongfirstname);

  //This is giving the field a name to set.   
  var lastName = $("#lastName");
  var lastNameErrorMsg = $("#lastNameErrorMsg");
  //This will trigger an onblur event on the function called/
  lastName.blur(validatelastname);
  lastName.blur(validatewronglastname);
 
  //This is giving the field a name to set.  
  var email = $("#email");
  var emailErrorMsg = $("#emailErrorMsg");
  //This will trigger an onblur event on the function called/
  email.blur(validateemail);
 
  //This is giving the field a name to set.   
  var userName = $("#userName");
  var userNameErrorMsg = $("#userNameErrorMsg");
  //This will trigger an onblur event on the function called/
  userName.blur(validateusername);
  userName.blur(validateshortusername);
  userName.blur(validateuseremail);  
 
  //This is giving the field a name to set. 
  var password1 = $("#password");
  var passwordErrorMsg = $("#passwordErrorMsg");
  //This will trigger an onblur event on the function called/
  password1.blur(validatepassword1);
  password1.blur(validatepassword1long);
  password1.blur(validatepasswordexp);
  
  //This is giving the field a name to set.  
  var password2 = $("#confirmPassword");
  var confirmPasswordErrorMsg = $("#confirmPasswordErrorMsg");
  //This will trigger an onblur event on the function called/  
  password2.blur(validatepasswordexp2);
  password2.blur(validatebothpass);;
  
  //This is giving the field a name to set.
  var acceptTerms = $("#acceptTerms");
  var termsErrorMsg = $("#termsErrorMsg");
  //This will trigger an onblur event on the function called/    
  acceptTerms.click(validateterms);

  //This function will check how many letters have been entered.
  function validatefirstname() {
      if(firstName.val().length < 1) {
      firstNameErrorMsg.text("Please enter your first name.");
      return false;
    } else {
      firstNameErrorMsg.text("OK");
      // This will toggle a slide for the error message.
      $('#firstNameErrorMsg').slideToggle(1500);
      return true;
    }
  }

  //This function will check the type of letters, numbers and other characters entered.  
  function validatewrongfirstname() {
      var a = $("#firstName").val();
      var regexp = /^[A-Za-z]+$/; 
      var regexp2 = /[A-Za-z0-9\s\[\]\.\-#']+$/; //check references document.
  if(regexp.test(a)) {
      firstNameErrorMsg.text("OK");
      // This will toggle a slide for the error message.
      $('#firstNameErrorMsg').slideToggle(1500);
    } else {
  if(regexp2.test(a)) { 
      firstNameErrorMsg.text("First name can only contain letters.");
     
       }
    }
  }
  
  //This function will check how many letters have been entered. 
  function validatelastname() {
    if(lastName.val().length < 1) {
      lastNameErrorMsg.text("Please enter your last name.");
      return false;
    } else {
      lastNameErrorMsg.text("OK");
      // This will toggle a slide for the error message.
      $('#lastNameErrorMsg').slideToggle(1500);
      return true;
    }
  }

  //This function will check the type of letters, numbers and other characters entered.    
  function validatewronglastname() {
      var b = $("#lastName").val();
      var regexp3 = /^[A-Za-z]+$/;
      var regexp4 = /[A-Za-z0-9\s\[\]\.\-#']+$/; //check references document.
  if(regexp3.test(b)) {
      lastNameErrorMsg.text("OK");
      // This will toggle a slide for the error message.
       $('#lastNameErrorMsg').slideToggle(1500);
    } else {
  if(regexp4.test(b)) { 
      lastNameErrorMsg.text("Last name can only contain letters.");    
       }
    }
  }
  
  //This function will validate the email that is been entered.
  function validateemail() {
      var c = email.val();
      var regexp5 = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/; //check references document. 
  if(regexp5.test(c)) {
      emailErrorMsg.text("OK");
      // This will toggle a slide for the error message.
      $('#emailErrorMsg').slideToggle(1500);
      $('#emailErrorMsg').slideToggle(1500);
      return true
    } else {
      emailErrorMsg.text("Please enter a valid email address.");
      return false;
    }
  }
  
  // This function will validate the user name by what characters have been entered.
  function validateusername() {
      var d = $("#userName").val();
      var regexp6 = /^\s*[a-zA-Z0-9_.]+\s*$/; //check references document.
    if(regexp6.test(d)) {
      userNameErrorMsg.text("OK");
      // This will toggle a slide for the error message.
      $('#userNameErrorMsg').slideToggle(1500);
      $('#userNameErrorMsg').slideToggle(1500);
    } else
      userNameErrorMsg.text("Your username must be a minimum of 6 characters (letters, numbers, full-stops and underscores only). It can't be your email address.");
  }

  // This function will display a error message if less than 5 letters have been entered.  
  function validateshortusername() {
    if(userName.val().length < 6) {
      userNameErrorMsg.text("Your username must be a minimum of 6 characters (letters, numbers, full-stops and underscores only). It can't be your email address.");
    }
  }
 
   // This function will check to see if the username is the same as the email.   
  function validateuseremail() {
      var email = $("#email").val();
      var userName = $("#userName").val();
    if (userName === email.split('@')[0]) {
      userNameErrorMsg.text("Your username is too similar to your email address.");
    }
  }

  //This function will check to see if less than 6 characters have been entered.  
  function validatepassword1() {
    if(password1.val().length < 6) {
      passwordErrorMsg.text("Your password must be between 6 and 20 characters. It must contain a mixture of upper and lower case letters, and at least one number or symbol.");
    }
  } 
 
   //This function will check to see if more than 20 characters have been entered.    
  function validatepassword1long() {
    if(password1.val().length > 20) {
      passwordErrorMsg.text("Your password must be between 6 and 20 characters. It must contain a mixture of upper and lower case letters, and at least one number or symbol.");
    }
  }

   //This function will check the password expression that has been entered.    
  function validatepasswordexp() {
      var e = $("#password").val();
      var regexp7 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; 	
    //check references document.
    if(regexp7.test(e))  {
      passwordErrorMsg.text("OK");
      // This will toggle a slide for the error message.     
      $('#passwordErrorMsg').slideToggle(1500);
      $('#passwordErrorMsg').slideToggle(1500);
    } else { 
      passwordErrorMsg.text("Your password must be between 6 and 20 characters. It must contain a mixture of upper and lower case letters, and at least one number or symbol.");
    }
  }

  //This function will check the password expression that has been entered.
  function validatepasswordexp2() {
      var e = $("#password2").val();
      var regexp7 = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z]))/; //check references document.
    if(regexp7.test(e))  {
      confirmPasswordErrorMsg.text("OK");
    } else { 
      confirmPasswordErrorMsg.text("Your password must be between 6 and 20 characters. It must contain a mixture of upper and lower case letters, and at least one number or symbol.");
    }
  }
  // This function will check to see if both the passwords are right.
  function validatebothpass() {
    if(password2.val() !== password1.val()) {
      confirmPasswordErrorMsg.text("The passwords don't match.");
      passwordErrorMsg.text("The Passwords don't match.");
    } else if (password2.val() == password1.val()){
      confirmPasswordErrorMsg.text("OK");
      passwordErrorMsg.text("OK");
      // This will toggle a slide for the error message. 
      $('#confirmPasswordErrorMsg').slideToggle(1500);
      $('#confirmPasswordErrorMsg').slideToggle(1500);
    }
  }
  
  //This function will check to see if the checkbox has been ticked or not.
  function validateterms() {
    if ($(acceptTerms).is(':checked')) {
      termsErrorMsg.text("OK");
      // This will toggle a slide for the error message. 
      $('#termsErrorMsg').slideToggle(1500);
      $('#termsErrorMsg').slideToggle(1500);
    } else {
      termsErrorMsg.text("You must accept the terms and conditions before signing up.");
    }
  }
});
