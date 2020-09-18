/** Error class */
class APIError extends Error {
    constructor(code, message) {
        super(message);
        this.name = 'APIError №' + code;
    }
}

module.exports = APIError;
