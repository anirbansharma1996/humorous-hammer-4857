function btn(){
let form = document.querySelector("form");
let signupLS = JSON.parse(localStorage.getItem("signup"))||[];
// console.log("hello")
// form.addEventListener("click",function(event) {
//     event.preventDefault();

    let obj = {
        name:form.name.value,
        email: form.email.value,
        password: form.password.value,
    }

    if (obj.name == ""|| obj.email == "" || obj.password == "") {
        alert("field empty")
        return;
    }
    else {
        signupLS.push(obj);
        localStorage.setItem("signup", JSON.stringify(signupLS))
        alert("sign up successful")
       window.location.href="signin.html"
    }
 
//})

}

// btn();

// function saveData(event){
//     event.preventDefault();
//     console.log("inside")
//     let obj = {
//         email: form.email.value,
//         password: form.password.value,
//     }

//     if ( obj.email == "" || obj.password == "") {
//         alert("field empty")
//         return;
//     }
//     else {
//         signupLS.push(obj);
//         localStorage.setItem("signup", JSON.stringify(signupLS))
//     }
// }