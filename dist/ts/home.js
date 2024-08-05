var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { printPost } from "../controllers/card.controller.js";
import { PostsCrud } from "../controllers/home.controller.js";
const postForm = document.querySelector('#post-form');
const postTitle = document.querySelector('#post-title');
const postDescription = document.querySelector('#post-description');
const postImage = document.querySelector('#post-image');
const postPlatform = document.querySelector('#post-platform');
const postDate = document.querySelector('#post-date');
const cardsContainer = document.querySelector("#cards-container");
const postId = document.querySelector("#post-id");
const logoutButton = document.querySelector('#logout-button');
const getUrl = 'https://api-posts.codificando.xyz/posts';
const postUrl = 'https://api-posts.codificando.xyz/posts';
logoutButton.addEventListener('click', () => {
    sessionStorage.removeItem('user');
    window.location.href = "../views/login.html";
});
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    yield getPosts();
}));
postForm.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (postId.value) {
        yield updateCity(postId.value);
    }
    else {
        yield createPost();
    }
}));
cardsContainer.addEventListener('click', (event) => __awaiter(void 0, void 0, void 0, function* () {
    yield buttonClick(event);
}));
const getPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    const getPosts = new PostsCrud;
    const posts = yield getPosts.get(getUrl);
    console.log(posts);
    cardsContainer.innerHTML = '';
    posts.forEach(post => {
        const renderCity = printPost(post);
        cardsContainer.appendChild(renderCity);
    });
});
const createPost = () => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = {
        title: postTitle.value,
        body: postDescription.value,
        creationDate: new Date,
        platform: postPlatform.value,
        postUrl: postImage.value
    };
    const createPost = new PostsCrud;
    yield createPost.create(postUrl, newPost);
    postForm.reset();
});
const editCity = (id) => __awaiter(void 0, void 0, void 0, function* () {
    window.location.href = '#nav-title';
    const getPosts = new PostsCrud;
    const post = yield getPosts.modify(`${getUrl}/${id}`);
    postTitle.value = post.title;
    postDescription.value = post.body;
    postPlatform.value = post.platform;
    postImage.value = post.postUrl;
    postId.value = id;
});
const updateCity = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const newPost = {
        title: postTitle.value,
        body: postDescription.value,
        creationDate: new Date,
        platform: postPlatform.value,
        postUrl: postImage.value
    };
    const updateCity = new PostsCrud;
    yield updateCity.edit(`${getUrl}/${id}`, newPost);
    postForm.reset();
});
const deleteCity = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const confirmation = confirm('¿Deseas eliminar este post?');
    if (confirmation) {
        const deleteCity = new PostsCrud;
        yield deleteCity.remove(getUrl, id);
    }
});
const buttonClick = (event) => __awaiter(void 0, void 0, void 0, function* () {
    const target = event.target;
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
});
