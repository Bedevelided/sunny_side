const openNav = document.querySelector('#menu');
const sideNav = document.querySelector('#sidenav');
openNav.addEventListener('click' , function(){
    sideNav.classList.toggle('showsidenav');
    console.log('clicked');
})