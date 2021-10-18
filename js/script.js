function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    return (false)
}


function verifyEmail(e) {
    e.preventDefault();

    const email = document.getElementsByTagName("input")[0];
    
    if(!email.value) {
        
    }
}