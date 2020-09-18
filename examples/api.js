const { VineCoinAPI } = require('vine-coin-plus');

const vc = new VineCoinAPI({
    token: process.env.TOKEN
});

async function fetchPayments() {

    const result = await vc.api.call('getPayments', {});

    console.log(result); /* { total: ..., items: [...] } */
    
}

fetchPayments();