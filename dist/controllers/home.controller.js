var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class PostsCrud {
    create(url, post) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                method: "POST",
                headers: {
                    "x-user-email": "prueba222@gmail.com",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
            });
            console.log(response);
            alert('post creado exitosamente');
        });
    }
    get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url);
            const data = yield response.json();
            return data;
        });
    }
    modify(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url);
            const data = yield response.json();
            return data;
        });
    }
    edit(url, post) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
            });
            console.log(response);
            alert('post actualizado exitosamente');
        });
    }
    remove(url, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${url}/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(response);
            alert('post eliminado exitosamente');
        });
    }
}
