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
    const errorSpace = document.getElementById("error-space");
    const message = document.createElement("span")

    message.style.fontSize = "11px"
    message.style.color = "var(--secundary-red)"
    message.style.fontStyle = "italic"

    errorSpace.style.padding = "0px 20px"
  
    if(!ValidateEmail(email.value) && !appended) {
      email.classList.add("error")
      message.innerHTML = "Please provide a valid email address"
      errorSpace.appendChild(message)
      appended = 1
    }
    else if(ValidateEmail(email.value)){
        email.classList.remove("error")
        errorSpace.innerHTML = ""
        appended = 0
    }
}