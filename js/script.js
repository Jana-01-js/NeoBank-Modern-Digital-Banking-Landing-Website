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
