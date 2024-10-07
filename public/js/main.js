document.getElementById('shortenBtn').addEventListener('click', async () => {
    const originalUrl = document.getElementById('originalUrl').value;
    if (!originalUrl || !isValidUrl(originalUrl)) {
        alert('Please enter a valid URL');
        return;
    }
    try {
        const response = await fetch('/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ originalUrl })
        });
        const data = await response.json();
        document.getElementById('result').textContent = ` ${window.location.href}${data.shortUrl}`;
    } catch (err) {
        console.error('Error shortening the URL : ', err);
        alert('Error shortening the URL , PLEASE TRY AGAIN');
    }

});
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}






  // script.js for copying the resultant url 

  
    copyButton.addEventListener('click', () => {
      const textToCopy =document.getElementById('result').textContent; // Get the text from the input field
  
      // Check if the textToCopy is not undefined or empty
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            // Show feedback
            copyFeedback.classList.remove('hidden');
  
            // Hide feedback after 2 seconds
            setTimeout(() => {
              copyFeedback.classList.add('hidden');
            }, 500);
          })
          .catch(err => {
            console.error('Failed to copy: ', err);
          });
      } else {
        console.error('Text to copy is undefined or empty');
      }
    });
