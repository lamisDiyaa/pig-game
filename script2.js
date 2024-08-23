const subnitBtn=document.querySelector(".submit-btn")
const firstName=document.querySelector(".player-name-0")
const secondName=document.querySelector(".player-name-1")


subnitBtn.addEventListener("click",function(){

let first= firstName.value.length>5? firstName.value.slice(0,4).padEnd(7,".") : firstName.value
let second= secondName.value.length>5? secondName.value.slice(0,4).padEnd(7,"."): secondName.value

 localStorage.setItem("first-name", JSON.stringify(first))
 localStorage.setItem("second-name", JSON.stringify(second))


})