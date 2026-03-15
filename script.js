let slides=document.querySelectorAll(".slide")
let index=0

function showSlide(){

slides.forEach(s=>s.classList.remove("active"))

index++

if(index>=slides.length) index=0

slides[index].classList.add("active")

}

setInterval(showSlide,5000)

const counters=document.querySelectorAll(".count")

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-target")
const current=+counter.innerText

const increment=target/200

if(current<target){

counter.innerText=Math.ceil(current+increment)
setTimeout(update,10)

}else{

counter.innerText=target

}

}

update()

})

const ctx=document.getElementById('statsChart').getContext('2d');

new Chart(ctx,{
type:'bar',
data:{
labels:['Maharashtra','J&K','Arunachal','Punjab','Rajasthan'],
datasets:[{
label:'Martyrs Supported',
data:[45,20,15,10,12]
}]
},
options:{responsive:true}
})