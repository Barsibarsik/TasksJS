const leftBtn = document.querySelector("#left");
const rightBtn = document.querySelector("#right");
const items = document.querySelector("#items");

// чтобы получить св-во, установленное в css, передадим ф-ии блок,
// у кот. нужно взять стили
const computedStyles = getComputedStyle(items);

// текущая позиция списка
// let currentRight = 0;

leftBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let currentRight = parseInt(computedStyles.right);

    if (currentRight > 0) {
        items.style.right = `${currentRight - 100}px`;
    }
});

rightBtn.addEventListener("click", (e) => {
    e.preventDefault();

    //  ф-ия parseInt для приведения строки к числу
    let currentRight = parseInt(computedStyles.right);

    if (currentRight < 500) {
     
    // к списку, сохр. под переменной "items" через обьект "style" 
    // применим значение "right"
        items.style.right = `${currentRight + 100}px`;  
    }

});