document.querySelector('main').classList.add('hidden');
const header = document.querySelector('header');
setTimeout(() => {
  document.querySelector('figure.om').classList.remove('hidden');
  setTimeout(() => {
    document.querySelector('h1').classList.remove('hidden');
    var opacity = 100;
    setTimeout(() => {
      const int = setInterval(() => {
        header.style.opacity = --opacity*0.01;
        if (!opacity) {
          clearInterval(int);
          header.classList.add('hidden');
          document.querySelector('main').classList.remove('hidden');
        }
      }, 10);
    }, 2000);
  }, 1000);
}, 1200);

document.querySelector('button.toggle').classList.remove('hidden');
const btns = document.querySelectorAll('button.toggle');
btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const articles = document.querySelectorAll('article');
    articles.forEach(a => {
      if (a.classList.contains('hidden')) {
        a.classList.remove('hidden');
      } else {
        a.classList.add('hidden');
      }
    });
  });
});
