document.documentElement.style.overflow = 'hidden';
document.body.scroll = "no";

function loginSuccess() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    document.querySelector('.welcome').innerHTML = 'Welcome, ' + username.value;
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    fetch('users.json')
        .then(response => response.json())
        .then(data => {
            if (username === data.users.username && password === data.users.password) {
                loginSuccess(username);
            } else {
                document.getElementById("menu").style.display = "none";
                document.querySelector(".wrap-content .wrap-input #username").style.border = ".1rem solid #ff000073";
                document.querySelector(".wrap-content .wrap-input #password").style.border = ".1rem solid #ff000073";
            }
        })
        

});
