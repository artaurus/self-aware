const mobile = window.innerWidth < 1024;

var flag = false;
function toggleMenu() {
  if (flag) {
    document.querySelector('nav ul').classList.add('hidden');
    document.querySelector('.cross').style.display = 'none';
    if (mobile) document.querySelector('main').classList.remove('hidden');
  } else {
    document.querySelector('nav ul').classList.remove('hidden');
    document.querySelector('.cross').style.display = 'inline';
    if (mobile) document.querySelector('main').classList.add('hidden');
  }
  flag = !flag;
}

document.querySelector('nav > button').addEventListener('click',
  () => toggleMenu());

if (mobile) {
  const sections = document.querySelectorAll('article');
  sections.forEach(s => console.log());
  document.querySelectorAll('nav li').forEach((li, i) => {
    sections[i].id = li.innerText.toLowerCase().replace(' ', '-');
    li.addEventListener('click', () => {
      toggleMenu();
      window.scrollTo({
        top: sections[i].getBoundingClientRect()['y'] - 88,
        behavior: 'smooth'
      })
    });
  });
} else {
  document.querySelectorAll('article').forEach(a => a.classList.remove('hidden'));
  document.querySelectorAll('nav li').forEach((li, i) => {
    li.addEventListener('click', () => {
      toggleMenu();
      window.scrollTo({
        top: i*window.innerHeight,
        behavior: 'smooth'
      });
    });
  });
}

setInterval(() => {
  const header = document.querySelector('header');
  const relY = window.pageYOffset % window.innerHeight;
  const thres = Math.abs(relY - window.innerHeight);
  if (!mobile) {
    if (thres <= 104) {
      header.style.backgroundColor = 'transparent';
    } else {
      if (Math.floor((window.pageYOffset) / window.innerHeight) % 2) {
        header.style.backgroundColor = '#fafafa';
      } else {
        header.style.backgroundColor = '#fff';
      }
    }
  }
}, 1);
