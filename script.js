//service wroker

// script.js

// Check if the browser supports PWA features
// if ('serviceWorker' in navigator && 'PushManager' in window) {
if ('serviceWorker' in navigator) {
    // Display an alert encouraging the user to install the PWA
    const installPrompt = document.getElementById('install-prompt');
    installPrompt.style.display = 'block';
  
    let deferredPrompt;
  
    // Handle the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', event => {
      event.preventDefault(); // Prevent the default prompt behavior
      deferredPrompt = event;
  
      // Show the install prompt
      installPrompt.style.display = 'block';
  
      // Handle the user's interaction with the install prompt
      const installButton = document.getElementById('install-button');
      installButton.addEventListener('click', () => {
        // Hide the prompt
        installPrompt.style.display = 'none';
  
        // Trigger the PWA installation prompt
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(choiceResult => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the PWA installation');
          } else {
            console.log('User dismissed the PWA installation');
          }
          deferredPrompt = null; // Reset the deferredPrompt
        });
      });
    });
  }
  
  
