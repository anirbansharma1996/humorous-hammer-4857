let flag = false;
document.getElementById("mensbtn").addEventListener("click",()=>{
    if(flag==false){
        let div = document.getElementById("popdown");
        div.style.display="block";
        flag=true;

    }
    else{
        let div = document.getElementById("popdown");
        div.style.display="none";
        flag=false;
    }
})


// border: 1px solid black;
// width: 100%;
// height: 400px;
// z-index:2;
// position:relative;
// display: none;