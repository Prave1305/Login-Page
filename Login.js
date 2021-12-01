 function myFunction(){
     var username=document.getElementById("username").value;
     var password=document.getElementById("password").value;
   
    //  if(username==="praveena"&& password==="sairam")
     {
        localStorage.setItem(username="praveena",password="sairam");
        // location.reload();
        localStorage.getItem(username)
        alert("Welcome");
     }
    // else{
        alert("sign up to proceed further");
    }
    
    localStorage.setItem("myUserName", username);
     localStorage.setItem("myPassword", password);
     localStorage.setItem("myUserData", {"username":username,"password" : password});

     if(username==="praveena"&& password==="sairam")
     {
        var myName = localStorage.getItem("myUserName");
        alert("Welcome " + myName);
     }
    else{
        alert("sign up to proceed further");
    }

}
function clickOnfn(){
    document.location.href= "./Sign up.html";
}

function login(){
    document.location.href="./index.html"
}