// Создайте функцию которая в качестве аргумента принимает целое число, 
// и проверяет четное оно или нет. Затем создайте произвольный массив 
// целых чисел. И используя функцию проверки числа на четность, создайте 
// из готового массива новый, который будет содержать только четные 
// числа. Результат выведите в консоль.


const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => {

    // проверка на четность
    return num % 2 === 0;

}

const filterArray = ( arrayToFilter, filterFn ) => {
    const filteredArray = [];

    arrayToFilter.forEach(num => {
        if (filterFn(num)) {
            filteredArray.push(num);
        }
    })

    return filteredArray;
}

console.log(filterArray(mixedArray, isEven));