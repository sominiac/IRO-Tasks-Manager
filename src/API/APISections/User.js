import axios from "axios";

const _API = axios.create({
    baseURL: "https://iro-tasks/api/post/",
    headers: { "Content-Type": "application/json" },
});

const User = {
    /**
     * Геттер для инстанса
     */
    get INSTANCE() {
        return _API;
    },

    /**
     * Метод авторизации пользователя
     * @param {Object} params
     * @returns {Promise}
     */
    async auth(params) {
        return await _API.post("login", { ...params });
    }, 
};

export default User;