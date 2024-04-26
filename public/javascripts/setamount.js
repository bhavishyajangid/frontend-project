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
const maindiv = document.querySelector(".main-div")
const maindivsecond = document.querySelector(".main-div-second")
const set = document.querySelector(".set")
const para = document.querySelector(".para")
const entry = document.querySelector(".entry")
const prizepool = document.querySelector(".prize-pool")
const prizename = document.querySelector(".prizename")
const prizerate = document.querySelector(".prizerate")
const buttons = document.querySelector(".buttons")
const challenge = document.querySelector(".challenge")
const button = document.querySelector(".button")
const totalprize = document.querySelector(".prize-total")
const nameofplayer = document.querySelector(".nameofplayer")
const  image = document.querySelector(".image")
const vsname = document.querySelector(".vsname")
const nameofsecondplayer = document.querySelector(".nameofsecondplayer")


show.addEventListener("click" , function(){

    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
        
    
    
    })
    
    body.addEventListener("click", function(){
        sidebar.style.display = "none"
    })

// penicon.addEventListener("click" , function(){
//     names.style.opacity = 1 ;
//     penicon.style.display = "none" ;
//     names.value = username.innerHTML ;
//     username.innerHTML = "" 
//     inputform.style.opacity = "1"

// });

// span.addEventListener("click" , function(){
// username.innerHTML = names.value 
// names.style.opacity = 0
// span.style.display = "none"
// username.style.display = "block"
// penicon.style.display = "block"

// })

// emaildiv.addEventListener("click" , function(){
//     inputemail.style.display = "block"
//     emailid.style.display = "none"
//     righticon.style.display = "block"
    
    
// })

// righticon.addEventListener("click" , function(){
//     inputemail.style.display = "none"
//     righticon.style.display = "none"
//     emailid.style.display = "block"
//     alert("Email changed succesfully")

// })

set.addEventListener("click" , function(){

    let newdiv = document.createElement("div")
    maindiv.appendChild(newdiv);
    newdiv.className = "player-information";

    
    
    let newDivInnerFirst = document.createElement("div")
    newdiv.appendChild(newDivInnerFirst);
    newDivInnerFirst.className = "player-name"
    
    
    let newDivInnerFirstPara = document.createElement("p")
    newDivInnerFirst.appendChild(newDivInnerFirstPara)
    newDivInnerFirstPara.innerHTML = para.innerHTML


    let seconddiv = document.createElement("div")
    newdiv.appendChild(seconddiv)
    seconddiv.className = "cash-information"


    let innerseconddivv = document.createElement("div")
    seconddiv.appendChild(innerseconddivv)
    innerseconddivv.classList = "first-div" 


    let innerchildfirstdiv = document.createElement("div")
    innerseconddivv.appendChild( innerchildfirstdiv)
    innerchildfirstdiv.classList = "entry-fee"

    let entryfeeinnerelement = document.createElement("p")
    innerchildfirstdiv.appendChild(entryfeeinnerelement);
    entryfeeinnerelement.classList = "entry"
    entryfeeinnerelement.innerHTML = entry.innerHTML

    let entryfeeinnerelement2 = document.createElement("p")
    innerchildfirstdiv.appendChild(entryfeeinnerelement2);
    entryfeeinnerelement2.classList = "prize-pool"
    entryfeeinnerelement2.innerHTML = prizepool.innerHTML
    
    let innerchildseconddiv = document.createElement("div")
    innerseconddivv.appendChild(innerchildseconddiv)
    innerchildseconddiv.classList = "prize"

    let entryfeeinnerelement1 = document.createElement("p")
    innerchildseconddiv.appendChild(entryfeeinnerelement1);
    entryfeeinnerelement1.classList = "entry"
    entryfeeinnerelement1.innerHTML = prizename.innerHTML 


    let entryfeeinnerelemen = document.createElement("p")
    innerchildseconddiv.appendChild(entryfeeinnerelemen);
    entryfeeinnerelemen.classList = "prize-pool"
    entryfeeinnerelemen.innerHTML = prizerate.innerHTML



    
    let thirddiv = document.createElement("div")
    seconddiv.appendChild(thirddiv)
    thirddiv.className = "play"

    let playinnerdiv = document.createElement("a")
    thirddiv.appendChild(playinnerdiv)
    playinnerdiv.className = "button"
    // playinnerdiv.innerHTML = buttons.innerHTML
    

    let thirddivinnerbutton = document.createElement("button")
    playinnerdiv.appendChild(thirddivinnerbutton)
    thirddivinnerbutton.innerHTML = buttons.innerHTML
    thirddivinnerbutton.className = "buttons"




})


button.addEventListener("click" , function(){
    let newelement = document.createElement("div")
    maindivsecond.appendChild(newelement)
    newelement.className = "player-info"

// *************** player name div start *************

    let playerinfoElement = document.createElement("div")
    newelement.appendChild(playerinfoElement)
    playerinfoElement.className = "player-name"

    let playerNameElement = document.createElement("div")
    playerinfoElement.appendChild(playerNameElement)
   playerNameElement.className = "run-battle-fee"
   
   let playerNameElement2 = document.createElement("div")
    playerinfoElement.appendChild(playerNameElement2)
   playerNameElement2.className = "run-battles-prize"

   let runBattleFeeElement = document.createElement("p")
   playerNameElement.appendChild(runBattleFeeElement)
   runBattleFeeElement.innerHTML = challenge.innerHTML

   let runBattlePrizeElement = document.createElement("p")
   playerNameElement2.appendChild(runBattlePrizeElement)
   runBattlePrizeElement.innerHTML = totalprize.innerHTML

//    ********* player name end     **************

     let someotherinfo = document.createElement("div")
     newelement.appendChild(someotherinfo)
     someotherinfo.className = "other-info"

     let otherinfofirstdiv = document.createElement("div")
     someotherinfo.appendChild(otherinfofirstdiv)
     otherinfofirstdiv.className = "player1"

     let player1element = document.createElement("img")
     otherinfofirstdiv.appendChild(player1element)
     player1element.innerHTML = image.innerHTML
     player1element.src = "/images/avatar 2.png"
     player1element.alt = "img"

     


     let player1element2 = document.createElement("p")
     otherinfofirstdiv.appendChild(player1element2)
     player1element2.innerHTML = nameofplayer.innerHTML


     let otherinfoseconddiv = document.createElement("div")
     someotherinfo.appendChild(otherinfoseconddiv)
     otherinfoseconddiv.className = "vs"

     let vselement = document.createElement("p")
     otherinfoseconddiv.appendChild(vselement)
     vselement.innerHTML = vsname.innerHTML


     let player2 = document.createElement("div")
     someotherinfo.appendChild(player2)
     player2.className = "player2"


     let player2element = document.createElement("img")
     player2.appendChild(player2element)
     player2element.innerHTML = image.innerHTML
     player2element.src = "/images/avatar 2.png"
     player1element.alt = "img"

     let player2element2 = document.createElement("p")
     player2.appendChild(player2element2)
     player2element2.innerHTML = nameofsecondplayer.innerHTML


    
     

})










