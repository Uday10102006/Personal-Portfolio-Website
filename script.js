const form=document.getElementById("feedbackForm");
const msg=document.getElementById("successMsg");

const scriptURL="https://script.google.com/macros/s/AKfycbwHrDixN0QsXEN0SbqwMwXLeiiMN1fC3JDPHIJT5ztC04S91PCbpWGwzWr3VQjh17c/exec";

form.addEventListener("submit",function(e){
e.preventDefault();

const name=document.getElementById("name").value.trim();
const email=document.getElementById("email").value.trim();
const message=document.getElementById("message").value.trim();

if(name===""){alert("Name cannot be empty");return;}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!emailPattern.test(email)){alert("Enter valid email");return;}

const formData=new FormData();
formData.append("name",name);
formData.append("email",email);
formData.append("message",message);

fetch(scriptURL,{method:"POST",mode:"no-cors",body:formData});

msg.textContent="🚀 Feedback submitted!";
form.reset();
});

// Typing Effect
const words=["Secure Systems","AI Projects","Cybersecurity Tools","Futuristic Web Apps"];
let i=0,j=0,isDeleting=false;

function typeEffect(){
const typing=document.getElementById("typing");
if(!typing)return;

let word=words[i];
typing.textContent=isDeleting?word.substring(0,j--):word.substring(0,j++);

if(!isDeleting && j===word.length+1){isDeleting=true;setTimeout(typeEffect,900);return;}
if(isDeleting && j===0){isDeleting=false;i=(i+1)%words.length;}

setTimeout(typeEffect,90);
}
typeEffect();

// Scroll Reveal + Skill Bar Animation
window.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-80){
el.classList.add("active");

el.querySelectorAll(".bar span").forEach(bar=>{
bar.style.width=bar.dataset.width;
});
}
});
});

// Cursor Glow
const glow=document.querySelector(".cursorGlow");
document.addEventListener("mousemove",e=>{
glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";
});

// Magnetic Buttons
document.querySelectorAll(".magnetic").forEach(btn=>{
btn.addEventListener("mousemove",e=>{
const rect=btn.getBoundingClientRect();
const x=e.clientX-rect.left-rect.width/2;
const y=e.clientY-rect.top-rect.height/2;
btn.style.transform=`translate(${x*0.2}px,${y*0.2}px)`;
});
btn.addEventListener("mouseleave",()=>btn.style.transform="translate(0,0)");

});

// ===== GOD MODE LOADER REMOVE =====
window.addEventListener("load",()=>{
    const loader=document.getElementById("loader");

    setTimeout(()=>{
        loader.style.display="none";
    },3000); // 3 seconds
});
