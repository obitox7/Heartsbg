let w=document.getElementById("container").offsetWidth;
let h=document.getElementById("container").offsetHeight;
let contain =document.getElementById("container");
let count=0;
let maxbox=Math.floor((w*h)/400);
function b(){
  let w=document.getElementById("container").offsetWidth;
let h=document.getElementById("container").offsetHeight;
let contain =document.getElementById("container");
let count=0;
let maxbox=Math.floor((w*h)/400);
do{
  let div =document.createElement("div");
  contain.appendChild(div)
  let ha =document.createElement("div");
  let hb =document.createElement("div");
  let hc =document.createElement("div");
  div.appendChild(ha);
  div.appendChild(hb);
  div.appendChild(hc);
  div.classList.add("box");
  ha.classList.add("h1");
  hb.classList.add("h2");
  hc.classList.add("h3");
  
count++;
  
}
while(count<maxbox);
document.querySelectorAll(".box").forEach(div => {
  const h1 = div.querySelector(".h1");
  const h2 = div.querySelector(".h2");
  const h3 = div.querySelector(".h3");

  div.addEventListener("mouseenter", () => {
    gsap.to(div,{
      zIndex:5,
    })
    gsap.to(h1, {
      y: -20,
      x:8,
      backgroundColor:"red",
      borderRadius:"50px 50px 0 0",
      rotate: 765,
      duration: 0.3,
      
    });
    gsap.to(h2, {
      y: -20,
      x:-8,
      backgroundColor:"red",
      borderRadius:"50px 50px 0 0",
      rotate: -765,
      duration: 0.3,
      
      
    });
    gsap.to(h3,{
     scale:1.15,
    backgroundColor:"red",
    borderRadius:"90% 80% 0%",
    rotate:45,
    y:-14,
    duration:0.3,
    });
  });
  div.addEventListener("mouseleave", () => {
    gsap.to(h1, {
      y: 0,
      x:0,
      rotate: 0,
      duration: 2,
      backgroundColor:"black",
      borderRadius:0,
      width:0,
    });
    gsap.to(h2, {
      y: 0,
      x:0,
      rotate: 0,
      duration: 2,
      backgroundColor:"black",
      borderRadius:0,
      width:0,
    });
    gsap.to(h3, {
      width:0,
      y: 0,
      x:0,
      rotate: 0,
      duration: 2,
      backgroundColor:"black",
      borderRadius:0,
    });
  });
});}
b();
window.addEventListener("resize",b);

console.log(w,h)
console.log(count)
console.log(maxbox)
