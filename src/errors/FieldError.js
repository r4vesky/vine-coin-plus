/** Error class */
class FieldError extends Error {
    constructor(message) {
        super(message);
        this.name = 'FieldError';
    }
}

module.exports = FieldError;
