function validate() {
    let firstName = document.getElementById("firstname").value;
  
    let lastName = document.getElementById("lastname").value;
  
    let email = document.getElementById("e-mail").value;
  
    let city = document.getElementById("city").value;
  
    let state = document.getElementById("state").value;
  
    let zip = document.getElementById("zip").value;
  
    let terms = document.getElementById("t-n-c").checked;
  
    let error =false;
  
    //displaying red eror line for incorrect firstnames.
    if (firstName.length >= 2) {
      document.getElementById("valid-firstName").style.display = "block";
      document.getElementById("invalid-firstName").style.display = "none";
    } else {
      document.getElementById("invalid-firstName").style.display = "block";
      document.getElementById("valid-firstName").style.display = "none";
      error=true;
    }
  
    //displaying red eror line for incorrect lastnames.
    if (lastName.length >= 2) {
      document.getElementById("valid-lastName").style.display = "block";
      document.getElementById("invalid-lastName").style.display = "none";
    } else {
      document.getElementById("invalid-lastName").style.display = "block";
      document.getElementById("valid-lastName").style.display = "none";
      error=true;
  
    }
  
    //displaying red eror line for incorrect e-mails.
    /*
   -include @
   -include .
   -Atleast 1 character before @
   -Atleast 2 characters after last .
  */
    if (
      email.includes("@") &&
      email.includes(".") &&
      email.indexOf("@") != 0 &&
      email.length - email.lastIndexOf(".") >= 3
    ) {
      document.getElementById("valid-email").style.display = "block";
      document.getElementById("invalid-email").style.display = "none";
    } else {
      document.getElementById("invalid-email").style.display = "block";
      document.getElementById("valid-email").style.display = "none";
      error=true;
  
    }
  
    //for city
    if (city.length <= 2) {
      document.getElementById("invalid-city").style.display = "block";
      document.getElementById("valid-city").style.display = "none";
      error=true;
  
    } else {
      document.getElementById("valid-city").style.display = "block";
      document.getElementById("invalid-city").style.display = "none";
    }
  
    //for state
    if (state === "None") {
      document.getElementById("valid-state").style.display = "none";
      document.getElementById("invalid-state").style.display = "block";
      error=true;
  
    } else {
      document.getElementById("invalid-state").style.display = "none";
      document.getElementById("valid-state").style.display = "block";
    }
  
    //for zip
    if (zip.length === 6 && !isNaN(parseInt(zip))) {
      document.getElementById("valid-zip").style.display = "block";
      document.getElementById("invalid-zip").style.display = "none";
    } else {
      document.getElementById("invalid-zip").style.display = "block";
      document.getElementById("valid-zip").style.display = "none";
      error=true;
  
    }
  
    //for t-n-c
    if (terms) {
      document.getElementById("not-checked").style.display = "none";
    } else {
      document.getElementById("not-checked").style.display = "block";
      error=true;
  
    }
  
    //if there are no errors then reset the form and alert 'Your details been saved succesfully'.
    console.log(error)
    if(!error){
      alert('Your details been saved succesfully')
      document.getElementById("firstname").value=''
      document.getElementById("lastname").value=''
      document.getElementById("e-mail").value=''
      document.getElementById("city").value=''
      document.getElementById("state").value=''
      document.getElementById("zip").value=''
      document.getElementById("t-n-c").checked=false
  
      let validFeedbacks = document.getElementsByClassName("valid-feedback")
      for(let i=0; i<validFeedbacks.length; i++){
        validFeedbacks[i].style.display='none'
      }
      //instead of doing all ofthat we can also use document.getElementById('regfromId').reset()
  
      let invalidFeedbacks=document.getElementsByClassName("invalid-feedback")
  
      
    }
    
  }