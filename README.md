# vine-coin-api
Vine Coin API for Node.JS 🚀

| [Examples](https://github.com/r4vesky/vine-coin-plus/tree/master/examples) |
|------------------------------------------------------|

## Installation
> **[Node.js](https://nodejs.org/) 12.0.0 or newer is required**  

## Example
```js
const { VineCoinAPI } = require('vine-coin-plus');

const vc = new VineCoinAPI({
    token: process.env.TOKEN
});

async function fetchPayments() {

    const result = await vc.api.call('getPayments', {});

    console.log(result);
    
}

fetchPayments();
```

## VineCoinAPI Class
|Parameter|Type|Description|
|-|-|-|
|token|String|Vine Coin API token|
|customApiServer|String|Vine Coin API custom server|

## call(method, params)
|Parameter|Type|Description|
|-|-|-|
|method|String|Vine Coin API method|
|params|Object|Vine Coin API method params|

## onEvent(callback, route, port)
|Parameter|Type|Description|
|-|-|-|
|callback|Function|Callback|
|route|String|Callback server route (Default: /callback)|
|port|String|Callback server port (Default: 3300)|