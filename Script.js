const student = "Зима Дмитрий Владимирович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество
document.getElementById("student").innerHTML = student;
let Jamaica = prompt('Введите реальный счет первой команды'); 
let Argentina = prompt('Введите реальный счет второй команды'); 
let Jamaica0 = prompt('Введие предполагаемый счет первой команды'); 
let Argentina5 = prompt('Введите предполагаемый счет второй команды'); 
if ((Jamaica==Jamaica0)&&(Argentina==Argentina5))
{alert('Счет был угадан верно!')}
else if (((Jamaica==Argentina)&&(Jamaica0==Argentina5)) || ((Jamaica>Argentina)&&(Jamaica0>Argentina5)) || ((Jamaica<Argentina)&&(Jamaica0<Argentina5))) {
alert('Счет не угадали, но угадали исход!')}
else {alert('Не угадали ничего(')}
