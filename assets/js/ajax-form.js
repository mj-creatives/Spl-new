function validateEmail() {
	var email = document.getElementById("email").value;
	atpos = email.indexOf("@");
	dotpos = email.lastIndexOf(".");
	
	if (atpos < 1 || ( dotpos - atpos < 2 )) {
	   return false;
	}
	return( true );
 }

const validateForm = () => {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	var phone = document.getElementById("phone").value;
	if(name  == "" ) {
		alert( "Please provide your name!" );
		document.getElementById("name").focus() ;
		return false;
	 }
	 if(email  == "" ) {
		alert( "Please provide your Email!" );
		document.getElementById("email").focus() ;
		return false;
	 }
	 if (validateEmail() !== true) {
		alert("Please enter correct email ID")
	    document.getElementById("email").focus() ;
	 }
	 if(phone  == "") {
		alert( "Please provide a phone in the format #########." );
		document.getElementById("phone").focus() ;
		return false;
	 }
	 if(message  == "" ) {
		alert( "Please provide a message" );
		document.getElementById("message").focus();
		return false;
	 } 
	 return( true );
  }

const handleSubmit = (e) => {
	let myForm = document.getElementById("contact-form");
	const thankYouMessage = document.getElementById("thank-you-message");
	e.preventDefault();
	let formData = new FormData(myForm);
	if(validateForm()){
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString(),
		  })
			.then(() => thankYouMessage.classList.add('show'))
			.then(() => {
				document.getElementById("name").value = '';
				document.getElementById("email").value = '';
				document.getElementById("message").value = '';
				document.getElementById("phone").value = '';
			}
			)
			.catch((error) => alert(error));
	}
  };

document
  .querySelector("form")
  .addEventListener("submit", handleSubmit);