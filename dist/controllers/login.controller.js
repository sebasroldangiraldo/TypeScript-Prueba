var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class UserLogin {
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            sessionStorage.setItem('user', JSON.stringify(user));
            alert(`iniciaste sesión como: ${user.email}`);
            window.location.href = "../views/home.html";
        });
    }
}
export class LoginVerifications {
    verification(user) {
        const { email, password } = user;
        if (!email || !password) {
            return false;
        }
        return true;
    }
    loginVerification(user, url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            const data = yield response.json();
            console.log(data);
            return true;
        });
    }
}
