import { userLogin, gmailLogin } from '../../services/index.js';
import { onNavigate } from '../../utils/history.js';

export const Login = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div id="main-container" >
    <h1>Black Talents</h1>
    <form id="login-form">
      <div class="full-box">
        <label for="email"> E-mail</label>
        <input type="email" name="email" id="email" placeholder="Digite seu email" >
      </div>
      <div class="full-box">
        <label for="password"> Senha</label>
        <input type="password" name="password" id="password" placeholder="Digite sua senha">
      </div>
      <div class="full-box">
        <input type="submit" id="btn-submit-email" value="Login">
      </div> 
      <div class="full-box">
        <input  type="submit" id="btn-submit-gmail" value="Login Gmail">
      </div> 
    </form>

    <label for="agreement" id="agreement-label">Não está cadastrado? <a id="registerUser">Registre-se.</a> </label>
  
  </div>
  `;

  const loginUser = rootElement.querySelector('#btn-submit-email');
  loginUser.addEventListener('click', (e) => {
    e.preventDefault();
    const email = rootElement.querySelector('#email').value;
    const password = rootElement.querySelector('#password').value;
    userLogin(email, password);
  });

  const gmail = rootElement.querySelector('#btn-submit-gmail');
  gmail.addEventListener('click', (e) => {
    e.preventDefault();
    gmailLogin();
  });

  const registerUser = rootElement.querySelector('#registerUser');
  registerUser.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/register');
  });

  return rootElement;
};
