let flag1 = false;
console.log("conn")
document.getElementById("hotjarbtn").addEventListener("click",()=>{
    if(flag1==false){
        let div = document.getElementById("popup1");
        div.style.display="block";
        flag1=true;

    }
    else{
        let div = document.getElementById("popup1");
        div.style.display="none";
        flag1=false;
    }
})

