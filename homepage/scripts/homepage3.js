let flag2 = false;
console.log("conn")
document.getElementById("learnbtn").addEventListener("click",()=>{
    if(flag2==false){
        let div = document.getElementById("popup2");
        div.style.display="block";
        flag2=true;

    }
    else{
        let div = document.getElementById("popup2");
        div.style.display="none";
        flag2=false;
    }
})

