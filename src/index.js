import './normalize.css';
import './style.css';
import {homesection} from './home.js';
import {menusection} from './menu.js';
import {contactReserve} from './contactreserve.js';

const showedTab = (function () {

  const content = document.querySelector('#content');
  const home = document.querySelector('button:first-child');
  const menu = document.querySelector('button:nth-child(2)');
  const about = document.querySelector('button:nth-child(3)');

  content.appendChild(homesection())
  
  const homepage = function() {
    //empty children of 'content' dom-element with "content.textContent = ''";
    content.textContent = '';
    content.appendChild(homesection());
  };

  const menupage = function() {
    content.textContent = '';
    content.appendChild(menusection());
  };

  const contactreservepage = function() {
    content.textContent = '';
    content.appendChild(contactReserve());
  };

  home.addEventListener('click', homepage);
  menu.addEventListener('click', menupage);
  about.addEventListener('click', contactreservepage);



})();

