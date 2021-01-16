import {
  createPost, deletePost, getPosts,
} from '../../services/index.js';

export const Feed = () => {
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <div id="main-container">
    <form id="registrer-form">
            <div class="full-box">
             <label for="text"> Artista </label>
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
    const template = rootElement.querySelector('.container-posts');
    posts.forEach((post) => {
      template.innerHTML += `
      <div class = "post">
      <h4> ${post.user} </h4>
      <section class="postContainer">
      <p class = "postTemplate">${post.post} </p>
      </section>
      <button class = "like"> Curtir </button>
      <button class='delete' > delete </button>
      <button class = "editar"> Editar </button>
    </div>
        `;
      const btnDelete = template.querySelectorAll('.delete');
      btnDelete.forEach((buttonD) => {
        buttonD.addEventListener('click', () => {
          window.confirm('Deseja excluir este post');
          const doc = post.id;
          deletePost(doc);
          getPosts();
        });
      });
    });
  };

  const updatePosts = () => {
    getPosts().then((docs) => {
      console.log(docs);
      carregaPosts(docs);
    });
  };

  window.onload = updatePosts();

  const submit = rootElement.querySelector('#btn-post');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const post = rootElement.querySelector('#post').value;
    createPost(post);
    updatePosts();
  });

  return rootElement;
};
