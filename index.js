import './sass/main.scss';
import template from './templates/template.hbs';

import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const toolBar = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
const menuIngridient = document.querySelector('.menu');

toolBar.addEventListener('change', tols);

function tols(event) {
  const checked = event.target.checked;

  if (checked) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
  }
  const currentTheme = body.classList.value;
  localStorage.setItem('theme', currentTheme);
}
function save() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark-theme') {
    body.classList.add(Theme.LIGHT);
    toolBar.checked = false;
  } else {
    body.classList.add(Theme.DARK);
    toolBar.checked = true;
  }
}
save();

const repository = template(menu);

menuIngridient.insertAdjacentHTML('beforeend', repository);
