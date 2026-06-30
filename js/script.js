// FAQ Accordion

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {

question.addEventListener("click", () => {

const answer = question.nextElementSibling;

if(answer.style.display==="block"){

answer.style.display="none";

}else{

document.querySelectorAll(".faq-answer").forEach((item)=>{

item.style.display="none";

});

answer.style.display="block";

}

});

});

// Navbar Shadow

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>50){

navbar.style.boxShadow="0 10px 30px rgba(0,0,0,.3)";

}else{

navbar.style.boxShadow="none";

}

});
/* ======================
Dark Mode
====================== */

const themeBtn = document.getElementById("theme-toggle");

themeBtn.onclick = () => {

document.body.classList.toggle("light-theme");

themeBtn.innerHTML =
document.body.classList.contains("light-theme")
? "🌞"
: "🌙";

};

/* ======================
Mobile Menu
====================== */

const menu = document.querySelector(".menu-toggle");

const navLinks = document.querySelector(".nav-links");

menu.onclick = ()=>{

navLinks.classList.toggle("active");

};

/* ======================
Scroll Animation
====================== */

const revealElements=document.querySelectorAll(
".card,.price-card,.testimonial-card,.partner-card,.stat"
);

window.addEventListener("scroll",()=>{

const trigger=window.innerHeight*0.85;

revealElements.forEach((el)=>{

const top=el.getBoundingClientRect().top;

if(top<trigger){

el.style.opacity="1";

el.style.transform="translateY(0)";

}

});

});

revealElements.forEach((el)=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";
el.style.transition=".7s";

});
