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
          setTimeout(() => {
            document.querySelector('main').classList.remove('hidden');
            document.querySelector('footer').classList.remove('hidden');
          }, 1000);
        }
      }, 10);
    }, 2000);
  }, 1000);
}, 1200);

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  const articles = document.querySelectorAll('article');
  articles.forEach(a => {
    if (a.classList.contains('hidden')) {
      a.classList.remove('hidden');
    } else {
      a.classList.add('hidden');
    }
  });
  var text = btn.innerText;
  btn.innerText = text == 'Events'? 'Back' : 'Events';
});
