
num1 = +prompt('Введите число',"");
num2 = +prompt('Введите степень',"");
function calcNumber(num1, num2) {
    if (isNaN(num1) || isNaN(num2) ||
        num1 === null || num2 === null||
        typeof num1 === "string" ||typeof num2 === "string"||
        num1===""||num2===""){
      return 'error: Вы ввели неправильные данные';
    } else {
       
        return Math.pow(num1, num2);
    
}
}
let result = calcNumber(num1,num2);
alert(result);
