
const res = document.getElementById('res');

// fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&ids=bitcoin')
fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
    .then(function(response) {
    console.log("IT WORKED");
        return response.json();
    })
    // .catch(function(err) {
    // // Error :(
    //     console.log("API_ERROR");
    // })
    .then(function(response) {
        console.log(response.market_data.current_price.cad);
        res.innerText = "$ " + response.market_data.current_price.cad;
        // console.log(response.name);
    });
    