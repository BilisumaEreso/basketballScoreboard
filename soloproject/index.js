let homeScore=document.getElementById("home")
let guestScore=document.getElementById("guest")
let home=0
let guest=0

function addOne(){
    home+=1
    homeScore.textContent=home
    
}
function addTwo(){
    home+=2
    homeScore.textContent=home
}
function addThree(){
    home+=3
    homeScore.textContent=home
}
function addOneG(){
    guest+=1
    guestScore.textContent=guest
    
}
function addTwoG(){
    guest+=2
    guestScore.textContent=guest
}
function addThreeG(){
    guest+=3
    guestScore.textContent=guest
}