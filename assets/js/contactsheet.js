
const scriptURL = 'https://script.google.com/macros/s/AKfycbxambiVW1gWd-CU6yzcoPbhkXNOjiP1gCKNc9OzXBKK9bI4ZpuygbdmAWmetoua2wa4/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {

    e.preventDefault()

    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })

    .then(() => { 
        window.location.reload();  
    })

    .then(response => 
        alert("Thank you! Your message has been submitted successfully."
    ))

    .catch(error => 
        console.error('Error!', error.message)
    )

})
   