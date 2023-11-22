const timeSpan = document.querySelector('.widget__time');
const dateSpan = document.querySelector('.widget__date');

setInterval(() => {
  const date = new Date();
  const [day, month, year, hour, min] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
    date.getHours(),
    date.getMinutes()
  ];
  timeSpan.textContent = `${hour}:${min < 10 ? '0' + min : min}`;
  dateSpan.textContent = `${day}/${month}/${year}`;
}, 1000);

const logo = document.querySelector('.logo');
const container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', () => {

  const switchToggle = document.querySelector('.switcher__check');
  const root = document.documentElement;

  if (root.getAttribute('data-theme') === 'dark') {
    switchToggle.checked = true;
  }

  switchToggle.addEventListener('click', () => {
    const setTheme = switchToggle.checked ? 'dark' : 'light';

    root.setAttribute('data-theme', setTheme);
    localStorage.setItem('theme', setTheme);
  });

});

const storageTheme = localStorage.getItem('theme');
const systemColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const getTheme = storageTheme ?? systemColorScheme;
document.documentElement.setAttribute('data-theme', getTheme);
