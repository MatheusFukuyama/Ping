function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    return (false)
}

appended = 0;
function verifyEmail(e) {
    e.preventDefault();
    
    const email = document.getElementsByTagName("input")[0];
    const errorSpace = document.getElementsByClassName("error-space")[0];
    const cl3 = document.getElementsByClassName("cl-3")[0]
    const message = document.createElement("span")

    errorSpace.classList.add("error-space")
    message.classList.add("message")
  
    if(!ValidateEmail(email.value) && !appended) {
      email.classList.add("error")
      message.innerHTML = "Please provide a valid email address"
      errorSpace.appendChild(message)
      cl3.classList.add("space-btn-error")
      appended = 1
    }
    else if(ValidateEmail(email.value)){
        email.classList.remove("error")
        errorSpace.innerHTML = ""
        appended = 0
    }
}