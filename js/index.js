let wrapper = document.querySelector('.wrapper');
let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');
let btnPopup = document.querySelector('.btnLogin-popup');
let iconClose = document.querySelector('.icon-close');


btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

let emailLogin = document.getElementById('emailLogin');
let passLogin = document.getElementById('passLogin');
let loginForm = document.getElementById('loginForm');

const userLogin = (event) => {
  event.preventDefault();

  let email = emailLogin.value;
  let password = passLogin.value;



 
  if (email === 'usuario@example.com' && password === 'contrasena') {
    console.log('Inicio de sesión exitoso');

  } else {
    console.log('Inicio de sesión fallido');

  }
};

loginForm.addEventListener('submit', userLogin);
