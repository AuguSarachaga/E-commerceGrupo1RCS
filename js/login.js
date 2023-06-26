/* const $btnSignIn = document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    } */
/* });/*  */ 
const userLogin = () => {
    formRegister.classList = 'formRegisterClass'
 formLogin.classList = 'form-login-show'
 welcomeBack.classList = 'welcome-back-hide'
}


const login = document.getElementById('login').addEventListener('click', userLogin)
const formRegister = document.getElementById('formRegister') 
const formLogin = document.getElementById('formLogin') 
const welcomeBack = document.getElementById('welcomeBack')


const userRegister = () => {
    formLoginUser.classList = 'formLoginUserClass'
    formRegister.classList = 'formRegisterClass'
    welcomeRegister.classList = 'welcome-register-hide'

 }

 const register = document.getElementById('register').addEventListener('click', userRegister)
 const formLoginUser = document.getElementById('formLogin')
 const formRegisterClass = document.getElementById('formRegister')
 const welcomeRegister = document.getElementById('welcomeRegister')