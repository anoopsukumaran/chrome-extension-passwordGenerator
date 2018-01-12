

function randomPassword()
{
  lowerCase = "abcdefghijklmnopqrstuvwxyz";
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  numbers = "1234567890";
  symbols = "!@#$%^&*()_+";
  password = "";
  pattern = "";
  
  length = document.getElementById('passwordLength').value;
  
  if(document.getElementById('hasLowerCase').checked) {
			pattern = pattern + lowerCase;
  }
  
  if(document.getElementById('hasUpperCase').checked) {
			pattern = pattern + upperCase;
  }
  
  if(document.getElementById('hasNumbers').checked) {
			pattern = pattern + numbers;
  }
		
  if(document.getElementById('hasSymbols').checked) {
			pattern = pattern + symbols;
  }
  
  for(x=0;x<length;x++)
  {
    i = Math.floor(Math.random() * pattern.length);
    password += pattern.charAt(i);
  }
  
  if(length == null || length == 0 || length == "") {
	document.getElementById('status').innerHTML = "Invalid Length";
  } else {
	document.getElementById('status').innerHTML = password;
  }
}

document.addEventListener('DOMContentLoaded', function() {
	 var link = document.getElementById('btnGenerate');
	 link.addEventListener('click', function() {
       randomPassword();
    });
	; 
});