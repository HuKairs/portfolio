/* -- Glow effect -- */

const blob = document.getElementById("blob");
const blur = document.getElementById("blur");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

/* -- Text effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}

window.onscroll = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const blobHeight = blob.offsetHeight;
  
  // Calculate opacity based on scroll position
  let opacity = 1 - (scrollY / windowHeight);
  if (opacity < 0) opacity = 0;

  blob.style.opacity = opacity;
  blur.style.opacity = opacity;
}
