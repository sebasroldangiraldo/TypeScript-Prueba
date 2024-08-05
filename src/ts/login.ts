import { LoginVerifications, UserLogin } from "../controllers/login.controller.js";
import { IUserLogin } from "../models/login.model";

const formLogin = document.querySelector("#login-form") as HTMLFormElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;
const userPassword = document.querySelector("#password") as HTMLInputElement;

const url : string = 'https://api-posts.codificando.xyz/auth/login';

formLogin.addEventListener('submit', (event : Event) => {
    event.preventDefault();
    verification()
})

const verification = async () => {

    const newUser : IUserLogin = {
        email : userEmail.value,
        password : userPassword.value
    }

    const verification = new LoginVerifications;
    const result = verification.verification(newUser);

    if(!result){
        alert('por favor, completa todos los campos');
        return;
    }

    const value = await verification.loginVerification(newUser, url);
    console.log(value);

    loginUser();
}

const loginUser = () => { 

    const newUser : IUserLogin = {
        email : userEmail.value,
        password : userPassword.value
    };

    const sendUser = new UserLogin;
    sendUser.login(newUser); 
}