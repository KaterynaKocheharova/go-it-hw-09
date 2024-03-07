// MAIN VARIABLES

// const form = document.querySelector('.feedback-form');
// const email = form.email;
// const message = form.message;

// CREATING OBJECT TO STORE CURRENT DATA

// const storageKey = 'feedback-form-state';

// const formDataObject = JSON.parse(localStorage.getItem(storageKey)) || {
//   email: '',
//   message: '',
// };

// SETTING VALUES OF FORM FIELDS DURING PAGE LOAD

// email.value = formDataObject.email;
// message.value = formDataObject.message;

// INPUT: ADDING DATA TO CURRENT DATA OBJECT

// form.addEventListener('input', event => {
//   if (event.target === form.email) {
//     formDataObject.email = event.target.value.trim();
//   }

//   if (event.target === form.message) {
//     formDataObject.message = event.target.value.trim();
//   }

  // ADDING CURRENT DATA TO LOCAL STORAGE

//   const updatedData = JSON.stringify(formDataObject);
//   localStorage.setItem(storageKey, updatedData);
// });

// FORM SUBMIT

// form.addEventListener('submit', event => {
  
//   if (email.value && message.value) {
//     event.preventDefault();
//     localStorage.removeItem(storageKey);
//     console.log('Email:', {
//       email: event.target.elements.email.value,
//       message: event.target.elements.message.value,
//     });
//   } else {
//     alert('Fill in all the fields');
//   }
//   form.reset();
// });













