import {
  createPost, deletePost, getPosts,
} from '../../services/index.js';

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
    const template = rootElement.querySelector('.container-posts');
    posts.forEach((post) => {
      template.innerHTML += `
      <div class = "post">
      <h4> ${post.user} </h4>
      <section>
      <div class = "postTemplate">${post.post} </div>
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
          firebase.firestore().collection('Posts').doc(doc).delete()
            .then(() => {
              console.log('Document successfully deleted!');
              getPosts();
            })
            .catch((error) => {
              console.error('Error removing document: ', error);
            });
        });
      });


      const textArea = template.querySelectorAll('.postTemplate');
      const text = textArea.value;
    
      const btnEditar = template.querySelectorAll('.editar');
      btnEditar.forEach((buttonE) => {
        buttonE.addEventListener('click', () => {
          textArea.innerHTML = `
          <textAraea class="postEdit"></textAraea>
          <button class="btnEdit"></button>
          `;
          console.log('botão vc esta funcionando? será');
        });
      });
    });
  };

  const submit = rootElement.querySelector('#btn-post');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const post = rootElement.querySelector('#post').value;
    createPost(post);
    getPosts().then((posts) => {
     
      carregaPosts(posts);
    });
  });

  return rootElement;
};
