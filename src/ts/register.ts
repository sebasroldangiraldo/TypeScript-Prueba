import { UserRegister } from "../controllers/register.controller.js";
import { IUserRegister } from "../models/register.model";

const formRegister = document.querySelector('#register-form') as HTMLFormElement;
const userName = document.querySelector('#email') as HTMLInputElement;
const userPassword = document.querySelector('#password') as HTMLInputElement;

const url : string = 'https://api-posts.codificando.xyz/users/register';

formRegister.addEventListener('submit', (event : Event) => {
    event.preventDefault();
    verification();
})

const verification = async () => {

    const newUser : IUserRegister = {
        email : userName.value,
        password : userPassword.value
    }

    const verification = new UserRegister;
    const result : boolean = verification.verification(newUser);

    if(!result){
        alert('por favor, completa todos los campos');
        return;
    }

    await register()
}

const register = async () => {

    const newUser : IUserRegister = {
        email : userName.value,
        password : userPassword.value
    }

    const register = new UserRegister;
    await register.createUser(newUser, url);
}
