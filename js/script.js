function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    return (false)
}

function empatyEmail(email) {
    if(email.trim() === "") {
       return 0
    }
    return 1
}

appended = 0;
function verifyEmail(e) {
    e.preventDefault();
    
    const email = document.getElementsByTagName("input")[0];
    const errorSpace = document.getElementsByClassName("error-space")[0];
    const cl3 = document.getElementsByClassName("cl-3")[0]

    let message
    if(appended) {
      message = document.getElementsByTagName("span")[1]
      console.log(message)
    }
    else {
      message = document.createElement("span")
      errorSpace.classList.add("error-space")
      message.classList.add("message")
    }
      

    if(!empatyEmail(email.value)) {
      email.classList.add("error")
      message.innerHTML = "Whoops! It looks like you forgot to add your email"
      if(!appended){
        errorSpace.appendChild(message)
        cl3.classList.add("space-btn-error")
      }
      appended = 1
    }
    else if(!ValidateEmail(email.value)) {
      email.classList.add("error")
      message.innerHTML = "Please provide a valid email address"
      if(!appended){
        errorSpace.appendChild(message)
        cl3.classList.add("space-btn-error")
      }
        appended = 1
    }
    else{
        email.classList.remove("error")
        errorSpace.innerHTML = ""
        appended = 0
    }
}