// const form = document.getElementById('contactForm');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const messageInput = document.getElementById('message');
// const successMsg = document.getElementById("successMsg");

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     let valid = true;
//     ClearErrors();
// }

// // name validation
// if(nameInput.value.trim() === ''){
//     showError(nameInput, 'Name is required');
//     valid = false;
// }
// // email
// if(emailInput.value.trim() === ''){
//     showError(emailInput, 'Email is required');
//     valid = false;
// }else if (!isValidEmail(emailInput.value.trim()))
// {
//     showError(emailInput, 'Enter a valid Email');
//     valid =false;
// }
// // message

// if(messageInput.value.trim()=== ''){
//     showError(messageInput, 'Message cannot be empty');
//     valid = false;
// } 

// if (valid){
//     successMsg.textContent = 'Message sent successfully!';
//     form.reset();
// }


// });








const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message'); 
const successMsg = document.getElementById('successMsg'); 


form.addEventListener('submit', (e) => { e.preventDefault(); 
    // stop form from submitting
     let valid = true; clearErrors(); 
     // Name validation 
     if (nameInput.value.trim() === '') { showError(nameInput, 'Name is required');
         valid = false; } // Email validation 
     if (emailInput.value.trim() === '') { showError(emailInput, 'Email is required'); 
        valid = false; } else if (!isValidEmail(emailInput.value.trim())) { showError(emailInput, 'Enter a valid email');
         valid = false;
         }
         
         
         
         
         // Message validation 
     if (messageInput.value.trim() === '') { showError(messageInput, 'Message cannot be empty');
         valid = false;
         } if (valid) { successMsg.textContent = 'Message sent successfully!'; 
            form.reset();
         } });
          function showError(input, message) { const formGroup = input.parentElement; const error = formGroup.querySelector('.error-message');
             error.textContent = message; 
             input.classList.add('error'); 
            } 
            function clearErrors() { document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
                 document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
                  successMsg.textContent = '';
                 } function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); } 