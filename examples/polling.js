const { VineCoinAPI } = require('vine-coin-plus');

const vc = new VineCoinAPI({
    token: process.env.TOKEN
});

vc.api.onEvent((event) => {

    console.log(event); /* { type: '...', data: {...} } */

});