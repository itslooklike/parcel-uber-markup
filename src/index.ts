import './index.scss';
import scrollUpper from './ts/scrollUpper';

const domIsLoaded = () => {
  scrollUpper();
};

document.addEventListener('DOMContentLoaded', domIsLoaded);
