/* -- Glow effect -- */

const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

/* -- Tilt effect -- */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('mousemove', (e) => {
    const rect = link.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    link.style.transform = `scale(1.1) rotate(${Math.atan2(y, x) * 10}deg)`;
  });

  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1) rotate(0deg)';
  });
});
