const student = "Зима Дмитрий Владимирович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания

let team1R = prompt ("Введите реальный  счёт первой команды");

let team2R = prompt ("Введите реальный второй команды");

let team1P = prompt ("Предположите счёт первой команды");

let team2P = prompt ("Предположите счёт второй команды");

{
    if ((team1R==team1P) && (team2R==team2P)) {
        alert ("Правильно угадан счёт!");
    }
    else if ((team1R>team2R) && (team1P>team2P) ) {
        alert ("Счёт не угадан, но исход правильный");
    }
    else if ((team1R==team2R) && (team1P==team2P)) {
        alert ("Счёт не угадан, но исход правильный");
    }
    else if ((team1R<team2R) && (team1P<team2P)) {
        alert ("Счёт не угадан, но исход правильный");
    }
        else {
        alert ("Не угадали ничего(");
    }
    }