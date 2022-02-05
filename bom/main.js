const addList = document.querySelector("ul");
const addInput = document.querySelector("input");
const addButton = document.querySelector("button");


addButton.addEventListener("click", () => {
    let book = addInput.value;
    addInput.value = "";

    let listBook = document.createElement("li");
    let listName = document.createElement("span");
    let listButton = document.createElement("button");
 
    listBook.appendChild(listName);
    listBook.appendChild(listButton);
    listName.textContent = book;
    listButton.textContent = "X";
    addList.appendChild(listBook);

    
    

    listButton.addEventListener("click", () => {
        addList.removeChild(listBook);
    })
    addList.appendChild(listBook);


    
    

    

})

 