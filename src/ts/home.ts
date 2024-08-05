import { printPost } from "../controllers/card.controller.js";
import { PostsCrud } from "../controllers/home.controller.js";
import { IPost, IPostResponse } from "../models/home.model.js";


const postForm = document.querySelector('#post-form') as HTMLFormElement;
const postTitle = document.querySelector('#post-title') as HTMLInputElement;
const postDescription = document.querySelector('#post-description') as HTMLInputElement;
const postImage = document.querySelector('#post-image') as HTMLInputElement;
const postPlatform = document.querySelector('#post-platform') as HTMLInputElement;
const postDate = document.querySelector('#post-date') as HTMLInputElement;
const cardsContainer = document.querySelector("#cards-container") as HTMLDivElement;
const postId = document.querySelector("#post-id") as HTMLInputElement; 
const logoutButton = document.querySelector('#logout-button') as HTMLButtonElement;


const getUrl = 'https://api-posts.codificando.xyz/posts';
const postUrl = 'https://api-posts.codificando.xyz/posts'

logoutButton.addEventListener('click', () => {
    sessionStorage.removeItem('user'); 
    window.location.href = "../views/login.html"; 
})

document.addEventListener('DOMContentLoaded', async () => {
    await getPosts();
})

postForm.addEventListener('submit', async (event : Event) => {

    event.preventDefault();

    if (postId.value) {
       await updateCity(postId.value);
    }
    else {
        await createPost();
    }
})

cardsContainer.addEventListener('click', async (event : Event) => {
    await buttonClick(event);
})

const getPosts = async () : Promise<void> => {

    const getPosts = new PostsCrud;
    const posts : IPostResponse[] = await getPosts.get(getUrl);

    console.log(posts);

    cardsContainer.innerHTML = '';

    posts.forEach(post => {
        const renderCity = printPost(post);
        cardsContainer.appendChild(renderCity);
    })
}

const createPost = async () : Promise<void> => { 

    const newPost : IPost = {
        title : postTitle.value,
        body : postDescription.value,                    
        creationDate : new Date,            
        platform : postPlatform.value,               
        postUrl : postImage.value
    }

    const createPost = new PostsCrud;
    await createPost.create(postUrl, newPost); 

    postForm.reset();
}


const editCity = async (id : string) : Promise<void> => { 

    window.location.href = '#nav-title';

    const getPosts = new PostsCrud;
    const post : IPost= await getPosts.modify(`${getUrl}/${id}`);

    postTitle.value = post.title;
    postDescription.value = post.body;
    postPlatform.value = post.platform;
    postImage.value = post.postUrl;
    postId.value = id;
}

const updateCity = async (id : string) : Promise<void> => {

    const newPost : IPost = {
        title : postTitle.value,
        body : postDescription.value,                    
        creationDate : new Date,            
        platform : postPlatform.value,               
        postUrl : postImage.value
    }

    const updateCity = new PostsCrud;
    await updateCity.edit(`${getUrl}/${id}`, newPost);

    postForm.reset();
}

const deleteCity = async (id : string) : Promise<void> => {

    const confirmation = confirm('¿Deseas eliminar este post?');

    if (confirmation) {

        const deleteCity = new PostsCrud;
        await deleteCity.remove(getUrl, id);
    }
}

const buttonClick = async (event : Event) : Promise<void> => {

    const target = event.target as HTMLElement;

    if (target.classList.contains('editButton')) {
        const id = target.getAttribute('data-id');

        if (id !== null) {
            editCity(id);
            return; 
        }
    }

    if (target.classList.contains('deleteButton')) {
        const id = target.getAttribute('data-id');

        if (id !== null) {
            deleteCity(id);
            return;
        }
    }
}