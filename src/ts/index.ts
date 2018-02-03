import 'intersection-observer';
import 'normalize.css';
import '../scss/index.scss';
import scrollUpper from './scrollUpper';

const domIsLoaded = () => {
  scrollUpper();
};

document.addEventListener('DOMContentLoaded', domIsLoaded);
