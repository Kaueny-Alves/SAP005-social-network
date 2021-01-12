import { createUser } from '../../services/index.js';

export const Register = () => {
  // Coloque sua página
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
    <div id="main-container">
     <h1>Efetue seu cadastro</h1>
     <form id="registrer-form">
      <div class="full-box">
        <label for="email"> E-mail</label>
        <input type="email" name="email" id="email" placeholder="Digite seu email" data-min-length="3">
      </div>
      <div class="half-box spacing">
        <label for="name"> Nome</label>
        <input type="name" name="name" id="name" placeholder="Digite seu nome" >
      </div>
      <div class="half-box">
        <label for="lastname"> Sobrenome</label>
        <input type="lastname" name="lastname" id="lastname" placeholder="Digite seu sobrenome">
      <div class="half-box spacing">
      <label for="talents"> Qual seu talento? </label>
      <input type="Talents" name="talents" id="talents" placeholder= " Digite seu talento" >
    </div>
      <div class="half-box spacing">
        <label for="password"> Senha</label>
        <input type="password" name="password" id="password" placeholder="Digite sua senha">
      </div>
      <div class="half-box">
        <label for="passconfirmation"> Confirme sua senha</label>
        <input type="password" name="passconfirmation" id="passconfirmation" placeholder="Confirme sua senha">  
      </div>    
      <div class="full-box">
        <input type="submit" id="btn-submit" value="Cadastrar">
      </div> 
    </form>
  
  <p class="error-validation template"></p>
  </div>
    `;


 /* class Validator{

    constructor(){
      this.validations = [
        'data-min-length',
      ]
    }
    validate(form){ //iniciar validação em todos os campos

      let inputs =form.getElementsByTagName('input');

      let inputsArray = [...inputs];
      

    }
    
    
  }  

  const form = rootElement.querySelector('#register-form');*/
  const submit = rootElement.querySelector('#btn-submit');

  submit.addEventListener('click', (e) => {
   
    e.preventDefault();

    const email = rootElement.querySelector('#email').value;
    const password = rootElement.querySelector('#password').value;
    const name = rootElement.querySelector('#name').value;
    const lastName = rootElement.querySelector('#lastname').value;


          /* if (errorCode === 'auth/wrong-password' || errorCode === 'auth/invalid-email') {
        return alert('Email ou Senha incorreta!');
      }
    /* se email digitado igual email return cadastrado
nos imput colocar obrigatório email e senha */

    createUser(email, password, name, lastName);
  });

  return rootElement;
};
