/*
Написать программу, которая запрашивает у пользователя ввод трёхзначного числа, 
а потом выводит в консоль сумму цифр введённого числа.
*/

export function sumDigit(number) {
    const number = prompt('Enter, please, xxx-number: ');
    const first_digit = +(number/100).toFixed(0);
    const second_digit = +((number%100)/10).toFixed(0);
    const third_digit = +number%10;
    const sum = first_digit + second_digit + third_digit;
    console.log(sum)
}