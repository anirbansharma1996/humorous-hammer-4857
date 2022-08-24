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
   btn1.addEventListener("click",()=>{
    let ancor=document.createElement("a")
    ancor.setAttribute("href","#mark")
   })
   btn1.style.border="1px solid blue"
   btn1.style.padding="10px"
   btn1.style.borderRadius="10px"
   btn1.style.color="blue"
   let btn2=document.createElement("button");
   btn2.innerText="GET Started"
   btn2.style.background="blue"
   btn2.style.color="white"
   btn2.style.border="0px"
   btn2.style.borderRadius="10px"
   div.append(btn1,btn2)
   div.setAttribute("id","pack")
   head.append(h,para,div)
 let arrayofobj=[
    {
        pic:"https://images.ctfassets.net/lh3zuq09vnm2/7dsuPwH4V8KJvCexSZueZc/272b2ef619de8ae4b443758413a19733/Unbounce_Logo.svg"
    },
    {
        pic:"https://images.ctfassets.net/lh3zuq09vnm2/6Id0eTlVwUSuDcoeLXS6wh/ab8d55b51fbc0e2bc599a6f180ef6c99/Invision.svg"
    },
    {
        pic:"https://images.ctfassets.net/lh3zuq09vnm2/5F3AqUH61Ll0Oa6eRQKyuT/7ea7e484e1e46495ed4fae2a1162a575/TechSmith.svg"
    },
    {
        pic:"https://images.ctfassets.net/lh3zuq09vnm2/7FUG0bJeL16YLJ9EHgsTX/44fe4afb6e70da4a60766df492ef615d/Ryanair.svg"
    },
    {
        pic:"https://images.ctfassets.net/lh3zuq09vnm2/1F2mq86JzeTrvpY7QdJZmh/b29471d788aabbc36a27d5dea6dae917/Nintendo.svg"
    },
    {
        pic:"https://images.ctfassets.net/lh3zuq09vnm2/7EHGsWMc29UoHErPsvRAsi/0f8210b12ada1e9faa313b4d56274572/Panasonic.svg"
    },
    {
        pic:"https://images.ctfassets.net/lh3zuq09vnm2/273wdVRRvnd4cJbAjYNLwP/e2f03c8a3987d8f9a2e8e01e9177afd4/Fiat.svg"
    },
    {
        pic:"https://images.ctfassets.net/lh3zuq09vnm2/7hhEfCdZPI7mPC24fFsC94/adf392604ef673a224307e48ac87bd96/Adobe.svg"
    },
    {
        pic:"https://images.ctfassets.net/lh3zuq09vnm2/7siImqwRupwoBHyJCaO1zy/2d7ec1ccc7761f76c8fe18de52e889a4/T-Mobile.svg"
    },
    {
        pic:"https://images.ctfassets.net/lh3zuq09vnm2/4Y87kRrhSPSYgUbSWYxP1z/a13177cf43f99e7a79c691c54e271a98/Hubspot.svg"
    },
    {
        pic:"https://images.ctfassets.net/lh3zuq09vnm2/3A5yNJ7WfWikTXKsk7r4hh/4060c710bc560b59a0dd06b6521fbe94/Decathlon.svg"
    },
 ];
 display(arrayofobj)
 function display(arrayofobj){
    let images=document.querySelector("#moveon")
    images.innerHTML=null;
    arrayofobj.forEach((el)=>{
   let picture= document.createElement("img")
   picture.setAttribute("src",el.pic)
   images.append(picture)
   })
   
 }
 
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

 