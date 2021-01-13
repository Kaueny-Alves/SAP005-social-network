// import { getPosts } from '../../services/index.js';

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
    </div>
    
  </div>
    `;

  // ----  posts na tela

  const timeline = rootElement.querySelector('.container-posts');
  const postsLoop = Array.from(Array(1).keys());
  postsLoop.forEach(() => {
    timeline.innerHTML += `
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
  });

  // HTML <h1>Posts</h1>
  // <button id ="posts"> postar </button>
  // <div id = "allPosts"> </div>

  // ----  get posts no console
  // const cardPost = rootElement.querySelector('#posts');
  // cardPost.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   getPosts();
  // });

  return rootElement;
};
