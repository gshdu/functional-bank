document.getElementById('login-submit').addEventListener('click', function(){
    const emailInput = document.getElementById('user-email');
    const passInput = document.getElementById('user-pass');

    if(emailInput.value == 'sontan.baap@gmail.com' && passInput.value == 'mypassword'){
        window.location.href = 'banking.html';
    }
    else{
        alert('Invalid email or password. Please try again.');
    }
})