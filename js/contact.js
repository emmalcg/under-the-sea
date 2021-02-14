const contactForm = document.querySelector('[name="contactSubmit"]');

contactForm.addEventListener('submit', function(event) {
    //when the form is submitted don't refresh the page
    event.preventDefault();

    //get the use's input from the input elements
    const nameInputValue = event.currentTarget.userName.value;

    //get the input elements 
    const nameInputEl = document.querySelector('#userName');
    const emailInputEl = document.querySelector('#userEmail');
    const messageInputEl = document.querySelector('#userMessage');

    //clear the input fields to an empty string
    nameInputEl.value = '';
    emailInputEl.value = '';
    messageInputEl.value = '';

    //if there is a message thank the user above the button
    if(nameInputValue) {
        //add new p before the button
        messageInputEl.insertAdjacentHTML('afterend', `<p class="thankMsg">Thanks for your message ${nameInputValue}, someone will be in touch!</p>`);
    }

})
