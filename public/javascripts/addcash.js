const one = document.querySelector(".one");
const two = document.querySelector(".two");
const five = document.querySelector(".five");
const ten = document.querySelector(".ten");
const input = document.getElementsByName("input")
const show = document.querySelector(".menu") ;
const sidebar = document.querySelector(".side-bar")
const money = document.querySelector("#money")

one.addEventListener("click" , function(){
    money.value = one.innerText;
})

two.addEventListener("click" , function(){
    money.value = two.innerText;
})

five.addEventListener("click" , function(){
    money.value = five.innerText;
})

ten.addEventListener("click" , function(){
    money.value = ten.innerText;
})

show.addEventListener("click" , function(){

    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
        
    
    
    })
    
    body.addEventListener("click", function(){
        sidebar.style.display = "none"
    })


    
