const commentForm = document.querySelector('[name="commentSubmit"]');

commentForm.addEventListener('submit', function(event) {
    //when the form is submitted don't refresh the page
    event.preventDefault();

    // get the user's input from the input elements
    const nameInputValue = event.currentTarget.userName.value;

    //get the input elements 
    const nameInputEl = document.querySelector('#userName');
    const emailInputEl = document.querySelector('#userEmail');
    const commentInputEl = document.querySelector('#userComment');

    //clear the input fields to an empty string
    nameInputEl.value = '';
    emailInputEl.value = '';
    commentInputEl.value = '';
    
    //if there is a comment submitted thank the user above the button
    if (nameInputValue) {
        //add the new p before the button 
        commentInputEl.insertAdjacentHTML('afterend', `<p class="thankMsg">Thanks for the comment ${nameInputValue}!</p>`);
    }
});
