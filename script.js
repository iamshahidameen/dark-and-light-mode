//  Get HTML Elements
const 
rootEl = document.querySelector('html'),
toggleSwitch = document.getElementById('theme-switcher'),
nav = document.getElementById('nav'),
toggleIcon = document.getElementById('toggle-icon'),
image1 = document.getElementById('image1'),
image2 = document.getElementById('image2'),
image3 = document.getElementById('image3'),
textBox = document.getElementById('text-box');

// Dark or Light Images
function imageMode(color) {
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}
// Dark Mode Styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}
  
  // Light Mode Styles
  function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}

//  Toggle Dark and Light Mode
//  Used 'chnage' event listener to check the status on an input
toggleSwitch.addEventListener('change', (e) => {

    //  Check weather the checkbox value is true(means checked) or false

    if(e.target.checked){
        rootEl.setAttribute("data-theme", "dark");
        darkMode();
    } else {
        rootEl.removeAttribute("data-theme");
        lightMode();
    }
})