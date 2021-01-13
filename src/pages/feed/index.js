import { createPost, getPosts, getUsers } from '../../services/index.js';

export const Feed = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div id="main-container">
    <h1> Artista</h1>
    <form id="registrer-form">
            <div class="full-box">
             <label for="text"> Kau </label>
             <input type="text" name="post" id="post" placeholder="Conte um pouco sobre você...">
            </div>
            <input type="submit" id="btn-post" value="Publicar">
         </form>
    <div class="container-posts">
      <h1>Feed</h1>
      <button id="btnTeste">teste</button>
    </div>
    
  </div>
    `;

  const submit = rootElement.querySelector('#btn-post');

  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const post = rootElement.querySelector('#post').value;
    createPost(post);
  });

  const carregaPosts = () => {
    const template = rootElement.querySelector('.container-posts');
    template.innerHTML += `
    <div class = "post">
    <h4> Kau </h4>
    <section>
    <textarea class = ""> </textarea>
    </section>
    <button class = "like"> Curtir </button>
    <button class = "deletar"> Deletar </button>
    <button class = "editar"> Editar </button>
  </div>
      `;
    getPosts(template);
    getUsers();
  };

  const btnTeste = rootElement.querySelector('#btnTeste');
  btnTeste.addEventListener('click', carregaPosts);

  return rootElement;
};
