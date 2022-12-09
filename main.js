var form = document.getElementById('addForm');
var email = document.getElementById('text');
var message = document.getElementById('myP');
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;''

form.addEventListener('submit', validate);

function validate(e){
    e.preventDefault();

    if (email.value === '') {
        message.innerHTML = 'Oops! check your email';
    } else if (!pattern.test(email.value)) {
        message.innerHTML = 'Oops! check your email';
    } else {
        message.innerHTML = '';
       
    }
   
}