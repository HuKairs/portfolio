/* -- Glow effect -- */
const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;

  blob.style.left = `${clientX}px`;
  blob.style.top = `${clientY}px`;
  blob.style.transform = `translate(-50%, -50%)`;
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
