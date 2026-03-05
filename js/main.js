const launchDate = new Date("May 31, 2026 00:00:00").getTime()

setInterval(()=>{

const now = new Date().getTime()

const diff = launchDate - now

const days = Math.floor(diff/(1000*60*60*24))
const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60))
const minutes = Math.floor((diff%(1000*60*60))/(1000*60))
const seconds = Math.floor((diff%(1000*60))/1000)

animate("days",days)
animate("hours",hours)
animate("minutes",minutes)
animate("seconds",seconds)

},1000)


function animate(id,value){

const el=document.getElementById(id)

if(el.innerHTML!=value){

el.style.transform="scale(1.2)"
el.style.transition=".3s"

setTimeout(()=>{
el.style.transform="scale(1)"
},200)

}

el.innerHTML=value

}