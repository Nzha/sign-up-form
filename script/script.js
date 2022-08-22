const pwd = document.querySelector('#password');
const pwdConfirm = document.querySelector('#password-confirmation');
const pwdMatchDisplay = document.querySelector('#pwd-match-display');

pwd.addEventListener('input', pwdMatch);
pwdConfirm.addEventListener('input', pwdMatch);

function pwdMatch() {
    console.log(pwd.value);
    console.log(pwdConfirm.value);
    if (pwd.value && pwdConfirm.value) {
        if (pwd.value === pwdConfirm.value) {
            console.log('works!');
            pwdMatchDisplay.textContent = 'Passwords match';
            pwdMatchDisplay.style.color = 'green';
        } else {
            pwdMatchDisplay.textContent = 'Passwords do not match';
            pwdMatchDisplay.style.color = 'red';
        }
    } else {
        pwdMatchDisplay.textContent = '';
    }
}