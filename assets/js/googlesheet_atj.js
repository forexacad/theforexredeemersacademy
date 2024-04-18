const scriptURL = 'https://script.google.com/macros/s/AKfycbzmdnlvMFF36T88d4XaKb1vLMhpmBca2WC_NAAI56LnpzE4pS0UN4__z8whG6wGaxWV/exec'
const desiredURL = 'https://www.patreon.com/user/shop/automate-your-trading-journey-full-your-134392?u=119612122&source=storefront' 
const form = document.forms['referral-form'] 

form.addEventListener('submit', e => {

    e.preventDefault()

    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })

    .then(response => {
        
        window.location.href = desiredURL;

        // Handle response
        if (response.ok) {

            // If the response is successful, redirect to the desired URL
            window.location.href = desiredURL;

        } else {
            // Handle error
            console.error("Error:", response.statusText);
        }
    })

    .then(() => { 

        if (response.ok) {
            window.location.reload();
            window.location.href = desiredURL;
        }
    })

    .catch(error => 
        console.error('Error!', error.message)
    )
})
