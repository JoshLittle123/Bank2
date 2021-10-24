// 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideIndex-1].style.display = "block";  
}
// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// ListEmail
// listPassword
function signUp(){
  let input_emails = document.getElementById("emails").value;
  let input_passwords = document.getElementById("passwords").value;
  let caseBlock = document.getElementById("checkCase")


  let listEmail = JSON.parse(localStorage.getItem("ListEmail"));
  let listPasswords = JSON.parse(localStorage.getItem("ListPasswords"));
  let isAccountExist = false;

  if(listEmail == null){
    if ( input_emails == ""|| input_passwords == "") {
      console.log("Error");
      caseBlock.style.display = "block";
      caseBlock.style.color = "red"
    }
    else{
      listEmail = {input_emails};
      listPasswords = {input_passwords};
  
      localStorage.setItem("listEmail", listEmail);
      localStorage.setItem("listPassword", listPasswords);
  
      caseBlock.style.display = "block";
      caseBlock.innerHTML = "Sign up successful";
      caseBlock.style.color = "green";
      console.log("Sign up succesfull");
      console.log("Email:", input_emails);
      console.log("Password:", input_passwords);
    }
  }
  if ( input_emails == ""|| input_passwords == "") {
    console.log("Error");
    caseBlock.style.display = "block";
    caseBlock.style.color = "red"
  }
  else{
    for (let i = 0; i< listEmail.length; i++) {
      if (input_emails == listEmail[1]) {
        caseBlock.innerHTML = "Account already exits, choose different email";
        caseBlock.style.color = "red";
        caseBlock.display = "block";
        isAccountExist = true;
      }
    }
    if (!isAccountExist) {
      listEmail.push(input_emails);
      listPasswords.push(input_passwords);

      localStorage.setItem("listEmail", JSON.stringify(listEmail));
      localStorage.setItem("listPasswords", JSON.stringify(listPasswords));

      caseBlock.style.display = "block";
      caseBlock.innerHTML = "Sign up successful";
      caseBlock.style.color = "green";
      console.log("Sign up succesfull");
      console.log("Email:", input_emails);
      console.log("Password:", input_passwords);
    }
  }
}


