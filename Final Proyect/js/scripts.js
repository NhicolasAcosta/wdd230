// ---------- HAMBURGER MENU ----------

function toggleMenu() {
    document.getElementById('navegation').classList.toggle('open');
    document.getElementById('hamburgerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// ---------- PICTURE ----------

let imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    threshold: 0.85,
    rootMargin: '0px'
};
const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {image.removeAttribute('data-src');};
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if (item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
      imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
}