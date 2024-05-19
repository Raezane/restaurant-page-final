import fishyfisher from './fishyfisher.png';

const homesection = function() {

  const homecontainer = document.createElement('div');
  homecontainer.classList.add('homecontainer');

  const imgcontainer = document.createElement('div');
  imgcontainer.classList.add('homeimagecontainer');

  const homeimage = new Image();
  homeimage.src = fishyfisher;

  imgcontainer.appendChild(homeimage);
  
  const textcontainer = document.createElement('div');
  textcontainer.classList.add('hometextcontainer');

  const firstpara = document.createElement('p');
  const secondpara = document.createElement('p');
  firstpara.textContent = 'Welcome to the best local seafood restaurant. From us you will find the most delicious seafood servings of all kind. From our list you will find salmon, lobsters, crabs and clams among many others.'
  secondpara.textContent = 'Explore our food list from the menu tab and discover your favourite!'

  textcontainer.appendChild(firstpara);
  textcontainer.appendChild(secondpara);

  homecontainer.appendChild(imgcontainer);
  homecontainer.appendChild(textcontainer);
  
  return homecontainer;

};

export {homesection};