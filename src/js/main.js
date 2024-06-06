function showRegister() {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('register').classList.remove('hidden');
}
function showLogin(){
    document.getElementById('register').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
}
function pwMatch(){
    var pw = document.getElementById('password').value;
    var pw2 = document.getElementById('password2').value;
    if(pw!= pw2){
     alert("Passwords do not match");
        return false;
    }
    return true;
}