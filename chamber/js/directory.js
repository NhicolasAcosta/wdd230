const requestURL = "https://nhicolasacosta.github.io/wdd230/chamber/json/data.json"
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jObject){
        let company = jObject['company'];
        company.forEach(displayCompany);            
    });

function displayCompany(company){
    let card = document.createElement('section');
    let logoImg = document.createElement('img');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p')
    let website = document.createElement('a');
 
    logoImg.setAttribute('src', `${company.logoImg}`);
    logoImg.setAttribute('alt', `${company.name} logo`);
    logoImg.setAttribute('loading', 'lazy');

    name.textContent = company.name;
    address.textContent = company.address;
    phoneNumber.textContent = company.phoneNumber;
    website.textContent = company.website;
    website.setAttribute('src', `${company.website}`);

    card.appendChild(logoImg);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phoneNumber);
    card.appendChild(website);

    cards.appendChild(card)

}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

gridbutton.addEventListener("click", () => {
	display.classList.add("cardsGrid");
	display.classList.remove("cardList");
});

listbutton.addEventListener("click", () => {
	display.classList.add("cardsList");
	display.classList.remove("cardsGrid");
});
