// Hamburger Menu
const ham = document.querySelector('.ham');
const links = document.querySelector('.menu-link');
const bar = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    links.classList.toggle('activate');
    bar.forEach(child => {child.classList.toggle('animation')});

})

// Current Date
const datefield = document.querySelector('date');
const now = new Date();
const fulldate = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
	now
);

const datefieldUK = document.querySelector('aside');
const fulldateUK = new Intl.DateTimeFormat('en-UK', {
	dateStyle: 'full'
}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

// Last Modified Date 
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

//------------------------------------------------------------------------------------------------------------- 
//Current Date for banner
const today = new Date();

// Sunday - Saturday : 0 - 6
const day = today.getDay();

//Show invitation
function showInvitation() {
    document.getElementById('invitation').style.display = 'block';
}
//Show the invitation on Monday or Tuesday 
if (day === 2 || day === 1) {
    showInvitation();
}

// --------------------------- DISCOVER -------------------------------------


const images = document.querySelectorAll('[data-src]');

function preloadImage(img){
    const src = img.getAttribute('data-src');
    if (!src) {
        return;
    }
    img.src = src;
}

imgOptions = {}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})