//2 Дана строка, изображающая целое число. 
//Вывести сумму цифр этого числа.


var strForIntNum = prompt('Введите любое целое число.'),
    strForSum = 0,
    i = 0;

while (i < strForIntNum.length) {
    strForSum += +(strForIntNum[i]);    
    i++;
}

document.write("Сумма цифр числа " + strForIntNum + " равна " + strForSum);
