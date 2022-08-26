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

function open(){
    window.location.href="homepage.html"
}