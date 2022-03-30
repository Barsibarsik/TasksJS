const quantitySelector = document.querySelector(".quantity-selector");
const colorSelector = document.querySelector(".color-selector");
const blocksContainer = document.querySelector(".blocks");

//  функция
const createMarkup = quantity => {
    let markup = "";

    for (let i = 0; i < quantity; i++) {
        const block = document.createElement("div");
        block.className = "item"; 
        block.innerText = i + 1;

        //  получившийся блок сохраним в переменную
        markup += block.outerHTML;
    }

    return markup;
}

//  отслеживать изменения input
quantitySelector.addEventListener("change", e => {
    const quantity = e.target.value;
    const markup = createMarkup(quantity);

    blocksContainer.innerHTML = markup;
});

const colorTheBlock = (block, color) => {
    //  в блок через стили положим нужый цвет
    block.style.backgroundColor = color;
};

let changed = false;

colorSelector.addEventListener("change", e => {
    //  сохр. значение инпута в переменную, в консоли будет код цвета
    const color = e.target.value;

    //  элементы, которые будем закрашивать 
    const items = blocksContainer.querySelectorAll(".item");

    //  когда false - станет true и наоборот
    changed = !changed;

    //  ф-ия для каждого из блочков colorTheBlock
    for (let i = 0; i < items.length; i++) {
        // сохраним блок в переменную
        const currentBlock = items[i];
        const blockNumber = i + 1;
        let colorToApply = "";

        if (changed) {
            colorToApply = blockNumber % 2 !== 0
                ? color
                : "#fff"

            } else {

            colorToApply = blockNumber % 2 === 0 ? color : "#fff";
                           
                    // if (blockNumber % 2 == 0) {
                    //     colorTheBlock(currentBlock, color);
                    // } else {
                    //     colorTheBlock(currentBlock, "#fff");
                    // }
                }

            colorTheBlock(currentBlock, colorToApply); 

            }
});