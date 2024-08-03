// Navbar
// const Toggle = document.querySelector('#primary-menu-toggle');
// const Navbar = document.querySelector('.Mobile-Header');
// const MobileMenuAnchor = document.querySelectorAll('#Menu-Close');
// const Close = document.querySelector('.close-nav');

// Toggle.addEventListener('click', () => {
//     Navbar.classList.toggle('slide');
// });

// Close.addEventListener('click', () => {
//     Navbar.classList.remove('slide');
// });

// for (let i = 0; i < MobileMenuAnchor.length; i++) {
//     MobileMenuAnchor[i].addEventListener("click", function () {
//         Navbar.classList.remove('slide');
//     });
// }

// Navbar
const Toggle = document.querySelector('#Primary-Menu-toggle');
const Navbar = document.querySelector('#Primary-Menu');
const MobileMenuAnchor = document.querySelectorAll('.Menu-Close');

Toggle.addEventListener('click', () => {
    Navbar.classList.toggle('slide');
    Toggle.classList.toggle('cross');
});

for (let i = 0; i < MobileMenuAnchor.length; i++) {
    MobileMenuAnchor[i].addEventListener("click", function () {
        Navbar.classList.remove('slide');
        Toggle.classList.remove('cross');
    });
}

