"use strict";
(() => {
    const dataSessionStorage = sessionStorage.getItem('user');
    if (!dataSessionStorage) {
        window.location.href = "../views/login.html";
    }
})();
