


let login= document.getElementById("login");

login.addEventListener("click",validate);


function validate(event){
    event.preventDefault();
    console.log("hey");
    let username =document.getElementById("username").value;
    let password=document.getElementById("password").value;
    let error=document.getElementById("error");
    if(!username||!password){
       error.textContent ="can't login";
    }
    else{
        error.textContent ="";
        let form = document.querySelector("form");
        form.reset();
        window.location.href="index1.html";
    }
}
