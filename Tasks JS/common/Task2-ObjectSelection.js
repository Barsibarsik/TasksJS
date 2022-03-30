// Сформировать произвольный массив объектов, описывающий, например, 
// работников компании, в каждом объекте должны содержаться сл. свойства 
// (поля) - name (содержащее имя сотрудника) и поле salary (содержащее 
// зарплату сотрудника от 0 до 3000). Сформировать функцию в которую 
// будет передан в качестве аргумента этот массив и возвращен из 
// функции массив содержащий имена всех сотрудников, чья зарплата 
// превышает 1000.


const workers = [
    { name: "Piter", salary: 2500 },
    { name: "Kody", salary: 750 },
    { name: "Marta", salary: 1500 },
    { name: "Sara", salary: 3000 },
];

const getWorthyWorkers = (workersArr) => {
    const worthyWorkers = [];

    // for (let i = 0; i < workersArr.length; i++) {
    //     const currentWorker = workersArr[i];

    //     if (currentWorker.salary > 1000) {
    //         worthyWorkers.push(currentWorker.name);
    //     }
    // }

    workersArr.forEach(currentWorker => {
        if (currentWorker.salary > 1000) {
            worthyWorkers.push(currentWorker.name)
        }
    })

    return worthyWorkers;
};


console.log(getWorthyWorkers(workers));



