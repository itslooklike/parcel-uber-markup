const raf = window.requestAnimationFrame;
const rafraf = fn => raf(() => raf(() => fn()));

export default rafraf;
