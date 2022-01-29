// Hamburger Menu
const ham = document.querySelector('.ham');
const links = document.querySelector('.menu-link');
const bar = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    links.classList.toggle('activate');
    bar.forEach(child => {child.classList.toggle('animation')});

})

// Current Date
const datefield = document.querySelector("date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;

// Last Modified Date 
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;