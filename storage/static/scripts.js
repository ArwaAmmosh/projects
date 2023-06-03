/*var email=document.forms['form']['email'];
var password=document.forms['form']['password'];

var email_error=document.getElementById('email_error');
var pass_error=document.getElementById('pass_error');

email.addEventListener('textinput',email_Verify);
email.addEventListener('textinput',email_Verify);

/*function validemail(){
    if(email.value.length < 9){
        email.style.border ="1px solid red";
        email_error.style.display="block";
        email.focus();
        return false;
    }
    
}

function email_Verify(){
    if(email.value.length >=8 ){
        email.style.border ="1px solid silver";
        email_error.style.display="none";
        return true;
    }
    
    
}*/
function sign() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    if (email=== "user@example.com" && password === "123") {
      window.open("home.html");
       }
    else {
        document.getElementById('pass_error').style.display="block"
    
       }
  }
  
