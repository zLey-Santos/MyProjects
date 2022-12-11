let email = document.getElementById('email');

email.addEventListener('focus', () => {
    email.style.borderColor = "#5f7c8a";
});

email.addEventListener('blur', () => {
    email.style.borderColor = "#ccc";
});


let pass = document.getElementById('pass');

pass.addEventListener('focus', () => {
    pass.style.borderColor = "#5f7c8a";
});

pass.addEventListener('blur', () => {
    pass.style.borderColor = "#ccc";
});