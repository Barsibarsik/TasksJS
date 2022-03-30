const openButton = document.querySelector("#openOverlay");
const body = document.body;
const successModal = createModal("The message has been sent, thank you!");


openButton.addEventListener("click", e => {
    body.appendChild(successModal);        
});

// вынести функционал в отдельную ф-ию, которую будем 
// передавать в содержимое мод. окна и по клику только 
// вставлять это содержимое в body
function createModal(content) {
    // по клику создается элемент
    const overlayElement = document.createElement("div");
    // добавление класса к элементу
    overlayElement.classList.add("overlay");

    overlayElement.addEventListener("click", e => {
    // св-во target указывает на фактический блок срабатывания 
        // события
        // console.log(e.target);

        // if (e.target === overlayElement) {
        //    closeElement.click(); 
        // }

        // contains ищет элемент с указанным классом (content)
        // ! обращает условие: если блок не содержит класс, то закроем
        if (!e.target.classList.contains("content")) {
            closeElement.click();
        }
        
        
    })

    const containerElement = document.createElement("div");
    containerElement.classList.add("modal-container");

    const contentElement = document.createElement("div");
    contentElement.classList.add("content");

    contentElement.innerHTML = content;

    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.textContent = "x";
    closeElement.href = "#";

    closeElement.addEventListener("click", e => {
        e.preventDefault();
        body.removeChild(overlayElement);
    });

    // куда добавляется элемент
    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);

    return overlayElement;

    // body.appendChild(overlayElement);
}