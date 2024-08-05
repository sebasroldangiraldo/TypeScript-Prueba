import { IUserLogin } from "../models/login.model";
import { IUserRegister } from "../models/register.model";

export class UserLogin {

    async login (user : IUserLogin) {

        sessionStorage.setItem('user', JSON.stringify(user));

        alert(`iniciaste sesión como: ${user.email}`);

        window.location.href = "../views/home.html"
    }
}

export class LoginVerifications {

    verification (user : IUserLogin) : boolean {

        const {email, password} = user;

        if (!email || !password) {
            return false;
        }

        return true;
    }

    async loginVerification (user : IUserLogin, url : string) : Promise<boolean> {

        const response : Response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();

        console.log(data);

        return true;
    }
}