let h2=document.querySelector("h2")
   let div =document.createElement("div")
   let head =document.querySelector("#head")
   let h=document.createElement("h1")
   h.innerText="Get started with Hotjar,"
   let span=document.createElement("span")
   span.innerText="for free"
   h.append(span)
   span.style.color="red"
   let p=document.createElement("p")
   p.innerText="Explore our free plan as you get started, or jump-start your evaluation with a 15-day trial of your very own customized plan. Free forever - upgrade anytime."
   let para =document.createElement("div")
   para.setAttribute("id","para")
   para.append(p)
   let btn1=document.createElement("button")
   btn1.innerText="Choose a Plan"
   btn1.onclick=function(){window.location.href="#mark"}
   btn1.style.border="1px solid blue"
   btn1.style.padding="10px"
   btn1.style.borderRadius="10px"
   btn1.style.color="blue"
   let btn2=document.createElement("button");
   btn2.innerText="GET Started free"
   btn2.style.background="blue"
   btn2.style.color="white"
   btn2.style.border="0px"
   btn2.style.borderRadius="10px"
   div.append(btn1,btn2)
   div.setAttribute("id","pack")
   head.append(h,para,div)

 
  let featuer =document.querySelector("#fea")
  featuer.addEventListener("click",()=>{
    window.location.href="index.html"
  })
 
let lags1=document.querySelector("#tag1")
lags1.addEventListener("click",()=>{
    window.location.href="index.html"
})
let lag2=document.querySelector("#tag2")
lag2.addEventListener("click",()=>{
    window.location.href="index.html"
})
let rung =document.querySelector("#change")
let bar=document.querySelector("#nav-bar")

let  obj =
{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumT_6Gz5EQnGoUgtO6W5LnWBgZPPep97qyInmAFs&s"
}

 let raju =document.querySelector("#raja").addEventListener("click",()=>{
    Have(obj)
    
   
 });

 function Have( obj){
    let abc =document.createElement("img")
    abc.setAttribute("src",obj.image)
    raju.append(abc)
 }