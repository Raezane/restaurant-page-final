import fishnchips from './fisnnships.png';
import clams from './clams.png';
import crab from './crab.png';
import lobster from './lobster.png';
import octopus from './octopus.png';
import shark from './shark.png';
import pufferfish from './pufferfish.png';
import sourherring from './sourherring.png';


const menusection = function() {

  const dishimages = [fishnchips, clams, crab, lobster, octopus, shark, pufferfish, sourherring];

  const menucontainer = document.createElement('div');
  menucontainer.classList.add('menucontainer');

  function addChildElements() {
    for (let i = 1; i < 9; i++) {
      const menucell = document.createElement('div');
      menucell.classList.add('menucell');
      menucontainer.append(menucell);
    };
  };

  // after child elements have been created and appended to main container,
  // we still need to divide each of them them into image and text containers
  
  function divideChildElements() {

    const cells = menucontainer.childNodes;
    
    cells.forEach((cell) => {

      const menuimagecontainer = document.createElement('div');
      menuimagecontainer.classList.add('menuimagecontainer');

      const menutextcontainer = document.createElement('div');
      menutextcontainer.classList.add('menutextcontainer');

      cell.append(menuimagecontainer, menutextcontainer);

    });
  };

  function addImages() {

    //queryselector won't work when content is not yet appended to DOM, so we have to select
    //menuimagecontainers by menucontainer's 'childNode'-property
    function getImageContainers() {

      let imagecontainers = [];
      for (let i = 0; i < 8; i++) {
        const imagecontainer = menucontainer.childNodes[i].firstChild;
        imagecontainers.push(imagecontainer);
      };
      return imagecontainers;
    };

    function setImages(imageContainerArray) {
    
      let index = 0;
      for (const container of imageContainerArray) {

        const dish = new Image();
        dish.src = dishimages[index];

        container.append(dish);
        index += 1;
      };
    };
    
    const imageContainerArray = getImageContainers();
    setImages(imageContainerArray);

  };

  function addTexts() {

    function getTextContainers() {

      let textcontainers = [];
      for (let i = 0; i < 8; i++) {
        const textcontainer = menucontainer.childNodes[i].lastChild;
        textcontainers.push(textcontainer);
      };
      return textcontainers;
    };

    function setTexts(textContainerArray) {
      
      let index = 0;
      for (const container of textContainerArray) {

        const para1 = document.createElement('p');
        const para2 = document.createElement('p');

        switch (textContainerArray.indexOf(container)) {
          case 0:
            para1.textContent = "Fish 'n' chips";
            para2.textContent = "10 euros";
            break;
          case 1: 
            para1.textContent = "Steamed clams";
            para2.textContent = "15 euros";
            break;
          case 2: 
            para1.textContent = "Boiled crabs";
            para2.textContent = "13 euros";
            break;
          case 3: 
            para1.textContent = "Fresh lobster";
            para2.textContent = "13 euros";
            break;
          case 4: 
            para1.textContent = "Steamed octopus";
            para2.textContent = "16 euros";
            break;
          case 5: 
            para1.textContent = "Grilled shark";
            para2.textContent = "19 euros";
            break;
          case 6: 
            para1.textContent = "Sliced pufferfish";
            para2.textContent = "20 euros";
            break;
          case 7: 
            para1.textContent = "Sour herring (aka surströmming)";
            para2.textContent = "5 euros";
            break;
        };
        container.append(para1);
        container.append(para2);
      };

    };

    const textContainerArray = getTextContainers();
    setTexts(textContainerArray);

  };

  addChildElements();
  divideChildElements();

  addImages();
  addTexts();

  return menucontainer;
  
};

export {menusection};
