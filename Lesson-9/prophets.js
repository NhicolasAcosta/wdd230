const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    }) 
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    });

function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let portrait = document.createElement('img');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    p1.textContent = `Date of birth: ${prophet.birthdate}`;
    p2.textContent = `Place of Birth: ${prophet.birthplace}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${ordinal(prophet.order)} Latter-day president`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(portrait);

    document.querySelector('div.cards').appendChild(card);
}

function ordinal(value){
    let str = String(value)
    let len = str.length
    let end  = str.substring(len - 1, 1)
    let bool = len > 1 && str.substring(len - 2, 1) === "1"
    let dOrdinal = "th";
  if (end === "1" && !bool) {
    dOrdinal = "st";
  } else if (end === "2" && !bool) {
    dOrdinal = "nd";
  } else if (end === "3" && !bool) {
    dOrdinal = "rd";
  }
  return dOrdinal;
}
