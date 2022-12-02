const body = document.body


// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('.toggle-dark-mode-button');
const darkModeToggle_icon = document.querySelector('.material-symbols-outlined');



const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add('darkmode');
    // 2. Update darkMode in localStorage
    localStorage.setItem('darkMode', 'enabled');

    // 3. Change icon
    darkModeToggle_icon.textContent = 'light_mode'
    
}

const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove('darkmode');
    // 2. Update darkMode in localStorage 
    localStorage.setItem('darkMode', null);
    
    // 3. Change icon
    darkModeToggle_icon.textContent = 'dark_mode'
}

// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
    enableDarkMode();
    darkModeToggle_icon.textContent = 'light_mode'
    darkModeToggle.style.color = "var(--primary-text-color)"
}
else{
    darkModeToggle_icon.textContent = 'dark_mode'
    darkModeToggle.style.color = "var(--primary-text-color)"

}


// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode');

    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
        enableDarkMode();
        // if it has been enabled, turn it off  
    } else {
        disableDarkMode();
    }
});



// Get the button:
let goTopbutton = document.querySelector(".goTop");
// When the user clicks on the button, scroll to the top of the document
goTopbutton.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

})
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goTopbutton.style.display = "block";
    } else {
        goTopbutton.style.display = "none";
    }
}
