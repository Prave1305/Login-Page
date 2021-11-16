 function myFunction(){
     var username=document.getElementById("username").value;
     var password=document.getElementById("password").value;
     console.log(username);
     console.log(password);
     if(username==="praveena"&& password==="sairam")
     {
     alert("Welcome");
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