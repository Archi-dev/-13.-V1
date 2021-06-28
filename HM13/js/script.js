

function calcNumber(num1, num2 = 1) {
    console.log( num1);
    console.log( num2,typeof num2);
    let finalCalc = Math.pow(num1, num2);
 
    return (finalCalc) ? finalCalc : finalCalc = 'some error';

    
};

num1 = prompt('Введите число');
num2 = +prompt('Введите степень',);


let result = calcNumber(num1,num2);
alert('Результат ' + result);
