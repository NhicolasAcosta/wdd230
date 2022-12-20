const mixBnt = document.querySelector('#mix');
const foptions = document.querySelector('#f-fruit');
const soptions = document.querySelector('#s-fruit');
const toptions = document.querySelector('#t-fruit');
const requestURL = "https://nhicolasacosta.github.io/wdd230/Final%20Proyect/data.json"


fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let fruit = data;
        fruit.forEach(setFirstOptions);
        fruit.forEach(setSecondOptions);
        fruit.forEach(setThirdOptions);
    });
function setFirstOptions(fruit){
    let name = document.createElement('option');
    name.setAttribute('value', `${fruit.name}`)
    name.textContent = fruit.name;
    foptions.appendChild(name);
}
function setSecondOptions(fruit){
    let name = document.createElement('option');
    name.setAttribute('value', `${fruit.name}`)
    name.textContent = fruit.name;
    soptions.appendChild(name);
}
function setThirdOptions(fruit){
    let name = document.createElement('option');
    name.setAttribute('value', `${fruit.name}`)
    name.textContent = fruit.name;
    toptions.appendChild(name);
}
                                    