// Написать функцию которая будет принимать в качестве аргумента строку 
// имитирующую адрес до файла. Функция должна возвращать true или false 
// в зависимости от того есть у этого файла расширение html или нет.


const path = "/users/download/index.html"

const isHtml = path => {
      const requiredExt = ".html";
      const pathExt = path.slice(-5);

      // if (pathExt === requiredExt) {
      //       return true
      // } else {
      //       return false
      // }

      return pathExt === requiredExt
}


console.log(isHtml(path));