var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { LoginVerifications, UserLogin } from "../controllers/login.controller.js";
const formLogin = document.querySelector("#login-form");
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#password");
const url = 'https://api-posts.codificando.xyz/auth/login';
formLogin.addEventListener('submit', (event) => {
    event.preventDefault();
    verification();
});
const verification = () => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = {
        email: userEmail.value,
        password: userPassword.value
    };
    const verification = new LoginVerifications;
    const result = verification.verification(newUser);
    if (!result) {
        alert('por favor, completa todos los campos');
        return;
    }
    yield verification.loginVerification(newUser, url);
    loginUser();
});
const loginUser = () => {
    const newUser = {
        email: userEmail.value,
        password: userPassword.value
    };
    const sendUser = new UserLogin;
    sendUser.login(newUser);
};
