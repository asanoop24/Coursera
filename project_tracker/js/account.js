document.addEventListener("DOMContentLoaded", function(event){

  var loginPage = document.getElementById('loginPage');
  var registerPage = document.getElementById('registerPage');
  var loginButton = document.getElementById('loginButton');
  var registerButton = document.getElementById('registerButton');

  loginButton.style.backgroundColor = 'RGB(66,171,151)';
  registerButton.style.backgroundColor = 'RGB(27,40,57)';
  
  document.getElementById('loginButton').addEventListener('click', function(event){
    loginPage.style.left = '0%';
    registerPage.style.left = '100%';
    loginPage.style.visibility = 'visible';
    registerPage.style.visibility = 'hidden';
    loginButton.style.backgroundColor = 'RGB(66,171,151)';
    registerButton.style.backgroundColor = 'RGB(27,40,57)';
  });
  document.getElementById('registerButton').addEventListener('click', function(event){
    loginPage.style.left = '-100%';
    registerPage.style.left = '0%';
    loginPage.style.visibility = 'hidden';
    registerPage.style.visibility = 'visible';
    loginButton.style.backgroundColor = 'RGB(27,40,57)';
    registerButton.style.backgroundColor = 'RGB(66,171,151)';
  });

  document.getElementById('rememberMe').addEventListener('click', function(event){
    if(document.getElementById('rememberMeCheckBox').style.backgroundColor == 'rgb(66, 171, 151)'){
      console.log('clicked');
      document.getElementById('rememberMeCheckBox').style.backgroundColor = 'RGBA(252, 253, 253, 0.1)';
      document.getElementById('rememberMeCheckBox').style.borderColor = 'RGBA(27, 40, 57, 0.5)';
    }
    else {
      document.getElementById('rememberMeCheckBox').style.backgroundColor = 'RGB(66, 171, 151)';
      document.getElementById('rememberMeCheckBox').style.borderColor = 'RGB( 66, 171, 151)';
    }
  });


});
