import { getPosts } from "../../services/index.js"
export const Feed = () => {
    const rootElement = document.createElement('div');
    rootElement.innerHTML = `
    <div id="main-container">
    <h1>Posts</h1>
    <button id ="posts"> postar </button>
    <div id = "allPosts"> </div>
     
  </div>
      `;


    const cardPost = rootElement.querySelector('#posts');
    cardPost.addEventListener('click', (e) => {
        e.preventDefault();
        getPosts();
    });


    return rootElement;
};