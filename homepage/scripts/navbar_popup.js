function navbar(){

     return `<div id="navbar">
     <div class="icon">
         <img src="https://www.hotjar.com/images/hotjar-logo-small.svg" alt="">
         <h2 onclick="open()">hotjar</h2>
     </div>
     <div class="navbar1">
         <p id="mensbtn">Products</p>
         <p id="hotjarbtn">Why Hotjar</p>
         <p>Pricing</p>
         <p id="learnbtn">Learn</p>
         <p>Company</p>
     </div>
     <div id="button1">
         <button>Sign in</button>
         <button>Get Started Free</button>
         <span onclick="Mode()"><img id="mode"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScyEzat6l2GI8asPIAGozP_PEhlb7Agre2f7lN2WZJrqMfgv36tVM2sgflMYgQ2Jt_-Cg&usqp=CAU"></span>
     </div>
 </div>`
}

export default navbar;