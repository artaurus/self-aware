if (!window.location.pathname.slice(1)) {
  const h1 = document.getElementById('home1');
  const h2 = document.getElementById('home2');
  h2.style.opacity = 0;
  var opacity = 100;
  setTimeout(() => {
    const fadeout = setInterval(() => {
      if (opacity == 0) {
        h1.classList.add('hidden');
        clearInterval(fadeout);
      }
      h1.style.opacity = 0.01*opacity;
      opacity -= 4;
    }, 20);
    setTimeout(() => {
      h2.classList.remove('hidden');
      const fadein = setInterval(() => {
        if (opacity == 100) clearInterval(fadein);
        h2.style.opacity = 0.01*opacity;
        opacity += 4;
      }, 20);
    }, 1000);
  }, 1500);
}

document.getElementById('dropdown-btn').addEventListener('click', e => {
  document.getElementById('dropdown').classList.toggle('hidden');
})
