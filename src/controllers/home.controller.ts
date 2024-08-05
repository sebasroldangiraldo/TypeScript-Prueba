import { IPost, IPostResponse } from "../models/home.model";

export class PostsCrud {

    async create (url : string, post : IPost ) : Promise<void> {

        const response : Response = await fetch(url, {
            method: "POST", 
            headers: {
                "x-user-email" : "prueba222@gmail.com",
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(post)
        });

        console.log(response);

        alert('post creado exitosamente');
    }

    async get (url : string) : Promise<IPostResponse[]> {

        const response : Response = await fetch(url);
        const data : IPostResponse[] = await response.json();

        return data;
    }

    async modify (url : string) : Promise<IPostResponse> {

        const response : Response = await fetch(url);
        const data : IPostResponse = await response.json();

        return data;
    }

    async edit (url : string, post : IPost) : Promise<void> {

        const response : Response = await fetch(url, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        });

        console.log(response);

        alert('post actualizado exitosamente');
    }

    async remove (url : string, id : string) : Promise<void>  { 

        const response = await fetch(`${url}/${id}`, { 
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log(response);

        alert('post eliminado exitosamente');
    }
}
