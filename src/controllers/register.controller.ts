import { IUserRegister } from "../models/register.model";

export class UserRegister {

    verification (user : IUserRegister) : boolean {

        const {email, password} = user;

        if (!email || !password) {
            return false;
        }

        return true;
    }


    async createUser (user : IUserRegister, url : string) {

        const response : Response = await fetch(url, {
            method: "POST", 
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        });

        window.location.href = "../views/login.html"

        console.log(response);

        alert('usuario registrado exitosamente');
    }
}