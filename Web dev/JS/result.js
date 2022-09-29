window.addEventListener('load', function(){
const param1 = localStorage.getItem('NAME');

document.getElementById('profileName').innerHTML = param1;

})