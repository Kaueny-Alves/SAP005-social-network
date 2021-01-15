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
      <div class="full-box">
        <label for="name"> Nome</label>
        <input type="name" name="name" id="name" placeholder="Digite seu nome" >
      </div>
      <div class="full-box">
        <label for="lastname"> Sobrenome</label>
        <input type="lastname" name="lastname" id="lastname" placeholder="Digite seu sobrenome">
      <div class="half-box spacing">
      <label for="talents"> Qual seu talento? </label>
      <input type="Talents" name="talents" id="talents" placeholder= " Digite seu talento" >
    </div>
      <div class="full-box ">
        <label for="password"> Senha</label>
        <input type="password" name="password" id="password" placeholder="Digite sua senha">
      </div>
      <div class="full-box">
        <input type="submit" id="btn-submit" value="Cadastrar">
      </div> 
    </form>
  
  
  </div>
    `;

  const submit = rootElement.querySelector('#btn-submit');

  submit.addEventListener('click', (e) => {
    e.preventDefault();

    const email = rootElement.querySelector('#email').value;
    const password = rootElement.querySelector('#password').value;
    const name = rootElement.querySelector('#name').value;
    const lastName = rootElement.querySelector('#lastname').value;

    createUser(email, password, name, lastName);
  });

  return rootElement;
};
