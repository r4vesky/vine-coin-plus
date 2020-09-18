const API = require('./api');

/** Main class */
class VineCoinAPI {

    /**
     * @param {Object} options - Class options
     * @param {string} options.token - VineCoin API Token
     * @param {string} options.customApiServer - VineCoin API Server
     */

    /* Class constructor */
    constructor ({ token, customApiServer }) {
        this.api = new API({
            token: token,
            apiServer: customApiServer ? customApiServer : 'https://api.vinecoin.ru'
        });
    }

}

/* Export class */
module.exports = { VineCoinAPI };
