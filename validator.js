//Defining a function to dispaly error message

function printError(elemId, hintMsg) {
	document.getElementById(elemId).innerHTML = hintMsg;
}

//Defining a function to a valid funciton

function validateForm() {
	//Retreving the value of the form element
	var name = document.contactForm.name.value;
	var email = document.contactForm.name.email;
	var mobile = document.contactForm.name.mobile;
	var country = document.contactForm.name.country;
	var gender = document.contactForm.name.gender;
	var hobbies = [];
	var checkboxes = document.getElementsByName('hobbies[]');
	for(var i=0; i < checkboxes.length; i++) {
		if(checkboxes[i].checked) {
			//populate hobbies array with selected values
			hobbies.push(checkboxes[i].value);
		}
	}
	// Defining the error variable with a defalt value
	var nameErr, emailErr, mobileErr, countryErr, genderErr = true;

	//Validate Name
	if(name == "") {
		printError("nameErr", "Please enter your name");
	} else {
		var regex = /^[a-zA-Z\s]+$/;
		if(regex.test(name)=== false) {
			printError("nameErr", "Please enter a valid name");
		} else {
			printError("nameErr", "");
			nameErr = false;
		}
	}
}