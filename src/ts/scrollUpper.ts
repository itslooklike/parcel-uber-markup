const scrollUpper = () => {
  const btn = document.querySelector('.scroll-upper');
  // заменить на обсервер
  const PIXELS_FROM_TOP = 100;

  // накатить дебаунс
  window.addEventListener('scroll', () => {
    if (window.scrollY > PIXELS_FROM_TOP) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  btn.addEventListener('click', () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  });
};

export default scrollUpper;
