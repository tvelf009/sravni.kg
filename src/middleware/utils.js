import jwt from 'jsonwebtoken';
import cookie from 'js-cookie';

const SECRET_KEY = process.env.JWT_KEY;

export const setCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value);
    }
};

export const removeCookie = (key) => {
    if (process.browser) {
        cookie.remove(key);
    }
};

export const getCookie = (key) => {
    if (process.browser) {
        cookie.get(key);
    }
};

export const authenticate = (data, next) => {
    setCookie('token', data.access_token);
    next();
}

export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookie('token')
        if (cookieChecked) return true;
    }
}

