// Mobile menu

const menuBtn =
document.getElementById("menuBtn");


const menu =
document.getElementById("menu");



menuBtn.addEventListener("click",()=>{


menu.classList.toggle("active");


});





// Button interaction


function showMessage(){


alert(
"Welcome! Let's build your website 🚀"
);


}






// Form submit


function submitForm(event){


event.preventDefault();


alert(
"Message sent successfully!"
);


}
