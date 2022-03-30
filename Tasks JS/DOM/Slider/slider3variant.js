const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");

// направление и обьект события
const loop = (direction, e) => {
    e.preventDefault();

    if (direction === "right") {
        itemsList.appendChild(itemsList.firstElementChild);
    } else {
        itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
    }
};

right.addEventListener("click", (e) => {
    // e.preventDefault();
    loop("right", e);

    //  исп. для сдвига. Если исп. createElement, то элемент создан и
    //  в последующем вставляются его копии, но если указывается
    //  конкретный элемент, то он будет перемещен в конец и с каждым 
    //  переключением первый элемент будет перемещаться
    // itemsList.appendChild(itemsList.firstElementChild)
})

left.addEventListener("click", (e) => {
    // e.preventDefault();
    loop("left", e);
    
    // insertBefore вставит элемент выше того элемента, 
    // который передадим вторым параметром 
    // items.firstElentChild - то, перед каким элементом произвести вставку
    // itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild)
    
})


