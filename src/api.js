/* Import error classes */
const FieldError = require('./errors/FieldError');
const APIError = require('./errors/APIError');

/** Main class */
class API {

    /**
     * @param {Object} options - Class options
     * @param {string} options.token - VineCoin API Token.
     * @param {string} options.customApiServer - VineCoin API Server.
     */

    /* Class constructor */
    constructor ({ token, customApiServer }) {
        this.token = token;
        this.apiServer = customApiServer ? customApiServer : 'https://api.vinecoin.ru';
    }

    /**
     * @param {string} method - Vine Coin API Method.
     * @param {array} params - Method params
     * @returns Server response
     */

    async call(method, params) {

        if (!method) {
            throw new FieldError('method is not passed.');
        }

        if (!params) {
            throw new FieldError('params is not passed.');
        }

        const esc = encodeURIComponent;
        const query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');

        const axios = require('axios');

        const result = await axios.get(`${this.apiServer}/method/${method}?access_token=${this.token}&${query}`);
        const { error, response } = result.data;

        if (error) {
            throw new APIError(error.code, error.message);
        }

        return response;

    }

    /**
     * @param {string} route - Callback Server Route.
     * @param {number} port - Callback Server Port.
     * @param {function} callback - Callback.
     */

    onEvent(callback, route, port) {

        if (!callback) {
            throw new FieldError('callback is not passed.');
        }

        route = route ? route : 'callback';
        port = port ? port : 3300;

        const express = require('express');
        const bodyParser = require('body-parser');
        const localtunnel = require('localtunnel');

        const app = express();

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.post(`/${route}`, async (req, res) => {
            callback(req.body);
            return res.status(200).send('ok');
        });

        app.listen(port, async () => {
            const tunnel = await localtunnel({ port: port });
            await this.call('setCallbackServer', { server: `${tunnel.url}/${route}` });
        });

    }

}

/* Export class */
module.exports = API;
