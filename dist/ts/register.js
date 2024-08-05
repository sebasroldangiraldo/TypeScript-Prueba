var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserRegister } from "../controllers/register.controller.js";
const formRegister = document.querySelector('#register-form');
const userName = document.querySelector('#email');
const userPassword = document.querySelector('#password');
const url = 'https://api-posts.codificando.xyz/users/register';
formRegister.addEventListener('submit', (event) => {
    event.preventDefault();
    verification();
});
const verification = () => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        email: userName.value,
        password: userPassword.value
    };
    const verification = new UserRegister;
    const result = verification.verification(newUser);
    if (!result) {
        alert('por favor, completa todos los campos');
        return;
    }
    yield register();
});
const register = () => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        email: userName.value,
        password: userPassword.value
    };
    const register = new UserRegister;
    yield register.createUser(newUser, url);
});
// {
//     "email": "sroldang@gmail.com",
//     "password": "sroldang-12345"
// }
// {
//     "email": "correoprueba@gmail.com",
//     "password": "correoprueba-12345"
// }
