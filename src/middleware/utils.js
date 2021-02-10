import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_KEY;

export function verifyToken(jwtToken) {
    try{
        return jwt.verify(jwtToken, SECRET_KEY);
    } catch (e) {
        console.log('e:', e);
        return null;
    }
}

export function getAppCookies(req) {
    const parsedItems = {};
    if (req.headers.cookie) {
        const cookiesItems = req.headers.cookie.split('; ');
        cookiesItems.forEach(cookie => {
            const parsedItem = cookie.split('=');
            parsedItems[parsedItem[0]] = decodeURI(parsedItem[1]);
        })
    }
    return parsedItems;
}

export function absoluteUrl(req, setLocalhost) {
    let protocol = 'https:';
    let host = req ? req.headers['x-forwarded-host'] || req.headers['host']
                   : window.location.host;
    if (host.indexOf('localhost') > -1) {
        if (setLocalhost) host = setLocalhost;
        protocol = 'http:';
    }
    return {
        protocol,
        host,
        origin: `${protocol}//${host}`,
        url: req
    };
}