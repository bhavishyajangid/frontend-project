const show = document.querySelector(".menu") ;
const sidebar = document.querySelector(".side-bar")
const penicon = document.querySelector(".pen-icon")
const names = document.querySelector("#names")
const username = document.querySelector(".username")
const span = document.querySelector(".span")
const inputform = document.querySelector(".input-form")
const emailid = document.querySelector(".emailid")
const inputemail = document.querySelector("#email")
const emaildiv = document.querySelector(".emaildiv")
const section = document.querySelector(".section")
const righticon = document.querySelector(".righticon")
const body = document.getElementsByName("body")


show.addEventListener("click" , function(){

sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
    


})







penicon.addEventListener("click" , function(){
    inputform.style.display = "block"
    // names.style.opacity = 1 ;
    penicon.style.display = "none" ;
    names.value = username.innerHTML ;
    username.innerHTML = "" 

});

span.addEventListener("click" , function(){
username.innerHTML = names.value 
names.style.opacity = 0
span.style.display = "none"
username.style.display = "block"
penicon.style.display = "block"
inputform.style.display = "none"


})

emaildiv.addEventListener("click" , function(){
    inputemail.style.display = "block"
    emailid.style.display = "none"
    righticon.style.display = "block"
    
    
})

righticon.addEventListener("click" , function(){
    inputemail.style.display = "none"
    righticon.style.display = "none"
    emailid.style.display = "block"
    alert("Email changed succesfully")

})


let newdiv = document.createElement("div")
maindiv.appendChild(newdiv);
inputemail.value = ""









