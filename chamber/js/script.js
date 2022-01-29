const ham = document.querySelector('.ham');
const links = document.querySelector('.menu-link');
const bar = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    links.classList.toggle('activate');
    bar.forEach(child => {child.classList.toggle('animation')});

})

// select the elements to manipulate (output to)
const datefield = document.querySelector("date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;


document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;