const apiKey = 'YourApiKeyToken'; // Replace with your actual API key

fetch('https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xdac17f958d2ee523a2206206994597c13d831ec7&address=0xdfd5293d8e347dfe59e90efd55b2956a1343963d&page=1&offset=100&startblock=0&endblock=99999999&sort=desc&apikey=' + apiKey)
    .then(response => response.json())
    .then(data => {
        // Check if the response contains results
        if (data && data.result && data.result.length > 0) {
            // Log the first item in the array
            console.log(data.result[0]);
            console.log(data.result[0].hash)
        } else {
            console.log('No results found.');
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
