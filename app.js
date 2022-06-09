// DARK MODE 

// const content = document.getElementsByTagName('body')[0];
// const darkMode = document.getElementById('label');

// darkMode.addEventListener('click', function() {
//     darkMode.classList.toggle('active');
//     content.classList.toggle('night');
// })

// Responsive Navbar

const toggleNavbar = document.querySelector('.toggle-navbar');
const navbar = document.querySelector('.navbar-links');

toggleNavbar.addEventListener('click', function () {
    navbar.classList.toggle('display-links');
})


