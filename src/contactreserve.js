const contactReserve = function() {

  const conResContainer = document.createElement('div');
  conResContainer.classList.add('conResContainer');

  function contact() {

    const contactcontainer = document.createElement('div');
    contactcontainer.classList.add('contactcontainer');

    const address1 = document.createElement('p');
    address1.classList.add('contactInfo');
    address1.textContent = 'Lorem boulevard 26'

    const address2 = document.createElement('p');
    address2.classList.add('contactInfo');
    address2.textContent = '010101 Ipsumland'

    const tel = document.createElement('p');
    tel.classList.add('contactInfo');
    tel.textContent = '010 1010 1010';

    const mail = document.createElement('p');
    mail.classList.add('contactInfo');
    mail.textContent = 'fishyfisher@loremipsum.com';

    contactcontainer.append(address1, address2, tel, mail);
    
    conResContainer.append(contactcontainer);
  };

  function openHours() {

    const whenopenContainer = document.createElement('div');
    whenopenContainer.classList.add('whenopenContainer');

    const whenopen = document.createElement('p');
    whenopen.textContent = 'Open hours:';

    const dates1 = document.createElement('p');
    dates1.textContent = 'Mon-Fri: 10 am - 11 pm';

    const dates2 = document.createElement('p');
    dates2.textContent = 'Sat - Sun: 1 pm - 9 pm';

    whenopenContainer.append(whenopen, dates1, dates2);

    conResContainer.append(whenopenContainer);

  };

  function reserveForm() {

    const formDiv = document.createElement('div');
    formDiv.classList.add('formDiv');

    const form = document.createElement('form');
    form.setAttribute('id', 'reserving');
    formDiv.append(form);

    const formheader = document.createElement('h2');
    formheader.textContent = 'Reserve your table!';
    form.append(formheader);
    
    function setNameField() {
      const namefield = document.createElement('div');
      namefield.classList.add('field');

      const namelabel = document.createElement('label');
      namelabel.setAttribute('for', 'name');
      namelabel.textContent = 'Full name';

      const nameinput = document.createElement('input');
      nameinput.setAttribute('type', 'text');
      nameinput.setAttribute('id', 'name');
      nameinput.setAttribute('name', 'fullname');

      namefield.append(namelabel, nameinput);
      form.append(namefield);

    };

    function setMailField() {
      const mailfield = document.createElement('div');
      mailfield.classList.add('field');

      const maillabel = document.createElement('label');
      maillabel.setAttribute('for', 'mail');
      maillabel.textContent = 'Email';

      const mailinput = document.createElement('input');
      mailinput.setAttribute('type', 'email');
      mailinput.setAttribute('id', 'mail');
      mailinput.setAttribute('name', 'email');

      mailfield.append(maillabel, mailinput);
      form.append(mailfield);

    };

    function setPhoneField() {
      const phonefield = document.createElement('div');
      phonefield.classList.add('field');

      const phonelabel = document.createElement('label');
      phonelabel.setAttribute('for', 'phone');
      phonelabel.textContent = 'Phone number';

      const phoneinput = document.createElement('input');
      phoneinput.setAttribute('type', 'tel');
      phoneinput.setAttribute('id', 'phone');
      phoneinput.setAttribute('name', 'phonenum');

      phonefield.append(phonelabel, phoneinput);
      form.append(phonefield);
    };

    function setGuestsField() {
      const guestsfield = document.createElement('div');
      guestsfield.classList.add('field');

      const guestslabel = document.createElement('label');
      guestslabel.setAttribute('for', 'guests');
      guestslabel.textContent = 'Number of guests';

      const guestsinput = document.createElement('input');
      guestsinput.setAttribute('type', 'number');
      guestsinput.setAttribute('id', 'guests');
      guestsinput.setAttribute('name', 'guestamount');

      guestsfield.append(guestslabel, guestsinput);
      form.append(guestsfield);
    }

    function addSendButton() {
      const reserveButton = document.createElement('button');
      reserveButton.setAttribute('type', 'submit');
      reserveButton.setAttribute('form', 'reserving');
      reserveButton.setAttribute('name', 'submit');
      reserveButton.setAttribute('id', 'reserving');
      reserveButton.textContent = 'Send reservation!'

      form.append(reserveButton);
    }

    setNameField();
    setMailField();
    setPhoneField();
    setGuestsField();
    addSendButton(); 

    conResContainer.append(formDiv);

  };


  contact();
  openHours();
  reserveForm();

  return conResContainer;
  
};

export {contactReserve};
