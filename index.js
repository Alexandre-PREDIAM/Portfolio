const navbar = document.querySelector(".navbar");
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname){
  for(tablink of tablinks){
      tablink.classList.remove("active-link");
  }

  for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzOnofuvvLaQQHQeW1HZKdDqFMs9X6ZPGmXN9jvTa8goWGFUbGJAm6Dk1a81GYrmHuL/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message sent successfully"
      setTimeout(function(){
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

// Parameter 

// const header = document.querySelector("header");

// window.addEventListener ("scroll", function() {
//   header.classList.toggle("sticky", window.scrollY > 0);
// });

// const sr = ScrollReveal ({
//     distance: '25px',
//     duration: 2500,
//     reset: true
// })

// sr.reveal('.home-text',{delay:190, origin:'bottom'})

// sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})