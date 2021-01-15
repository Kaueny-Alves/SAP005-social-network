import { createPost, getPosts, getUsers } from '../../services/index.js';

export const Feed = () => {
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
  <div id="main-container">
    <h2> Artista</h2>
    <form id="registrer-form">
            <div class="full-box">
             <label for="text"> Olá! </label>
             <input type="text" name="post" id="post" placeholder="O que podemos mudar com arte hoje?">
            </div>
            <input type="submit" id="btn-post" value="Publicar">
         </form>
    <div class="container-posts">
      <h2>Publicações</h2>
    </div>
    
  </div>
    `;

    const carregaPosts = (posts) => {
        const usuario = firebase.auth().currentUser;
        const template = rootElement.querySelector('.container-posts');
        posts.map((post) => {
            template.innerHTML += `
      <div class = "post">
      <h4> ${post.user} </h4>
      <section>
      <textarea class = "">${post.post} </textarea>
      </section>
      <button class = "like"> Curtir </button>
      <button class = "deletar"> Editar </button>
      <button class = "editar"> Deletar </button>
    </div>
        `;
            const like = rootElement.getElementsByClassName('like')
            like[0].addEventListener('click', (event) => {


            })
        });
    };


    const submit = rootElement.querySelector('#btn-post');

    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const post = rootElement.querySelector('#post').value;
        createPost(post);
        getPosts().then((posts) => {
            console.log(posts);
            carregaPosts(posts);
        });
    });

    return rootElement;
};