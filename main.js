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

const dd_btn = document.getElementById('dropdown-btn');
const dd = document.getElementById('dropdown');
dd_btn.addEventListener('click', e => {
  dd.classList.toggle('hidden');
});
document.body.addEventListener('click', e => {
  if (!dd.classList.contains('hidden')
      && e.target != dd_btn
      && e.target != dd) {
    dd.classList.add('hidden');
  }
});

if (window.location.pathname.slice(1) == 'poems.html') {
  const name = str => str.innerText.toLowerCase().replaceAll(' ', '-');
  const lis = document.querySelectorAll('ol li');
  const btns = document.querySelectorAll('button');
  var active = document.getElementById('poem');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      active.id = '';
      btn.id = 'poem';
      document.getElementById(name(active)).classList.add('hidden');
      document.getElementById(name(btn)).classList.remove('hidden');
      active = btn;
    });
  });
}
