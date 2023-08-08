const addEmailButton = document.querySelector('.add-email-btn');
const emailList = document.querySelector('.email-list');

addEmailButton.addEventListener('click', function() {
  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'Email address';
  emailInput.classList.add('email-input');
  emailList.insertBefore(emailInput, addEmailButton);
});

emailList.addEventListener('click', function(event) {
  if (event.target.classList.contains('remove-email-btn')) {
    const emailItem = event.target.parentElement;
    emailList.removeChild(emailItem);
  }
});

