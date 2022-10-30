//Задача1
// var num = 12;
// if (num == 10) {
// 	alert('Верно');
// } else {
// 	alert('Неверно');
// }

//Задача2
// var min = 48;
// if (min >= 0 && min <= 14) {
// 	alert('В первую четверть.');
// }
// if (min >= 15 && min <= 30) {
// 	alert('Во вторую четверть.');
// }
// if (min >= 31 && min <= 45) {
// 	alert('В третью четверть.');
// }
// if (min >= 46 && min <= 59) {
// 	alert('В четвертую четверть.');
// }

//Задача3
//многомерный массив 
// var lang = 'ru';
// var week = {
// 	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
// 	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
// };
// alert(week[lang]);
// if
// var lang = 'ru';
// if (lang == 'ru') {
// 	var week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// }
// if (lang == 'en') {
// 	week = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
// }
// alert(week);
//switch-case
// var lang = 'en';
// switch (lang) {
// 	case 'ru':
// 		var week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// 	break;
// 	case 'en':
// 		week = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
// 	break;
// }
// alert(week);

//Работа с if-else
//Задача1
// let a = -3;
// let message;
// if (a == 0){
//     message = 'Верно';
// } else if(a !=0){
//     message = 'Неверно'
// }
// alert(message)

//Задача2
// let a = 1;
// let message;
// if (a > 0){
//     message = 'Верно';
// } else if(a <= 0){
//     message = 'Неверно'
// }
// alert(message)

//Задача3
// let a = 0;
// let message;
// if (a < 0){
//     message = 'Верно';
// } else if(a >= 0){
//     message = 'Неверно'
// }
// alert(message)

//Задача4
// let a = -2;
// let message;
// if (a >= 0){
//     message = 'Верно';
// } else if(a < 0){
//     message = 'Неверно'
// }
// alert(message)

//Задача5
// let a = 0;
// let message;
// if (a <= 0){
//     message = 'Верно';
// } else if(a > 0){
//     message = 'Неверно'
// }
// alert(message)

//Задача6
// let a = 0;
// let message;
// if (a != 0){
//     message = 'Верно';
// } else if(a == 0){
//     message = 'Неверно'
// }
// alert(message)

//Задача7
// let a = 'тест';
// let message;
// if (a == 'test'){
//     message = 'Верно';
// } else if(a != 'test'){
//     message = 'Неверно'
// }
// alert(message)

//Задача8
// let a ='1';
// let message;
// if (a === '1'){
//     message = 'Верно';
// } else if(a != 0){
//     message = 'Неверно'
// }
// alert(message)

//Работа с && (и) и || (или)
//Задача1
// let a =5;
// let message;
// if (a > 0 && a <5){
//     message = 'Верно';
// } else if(a <0 || a >= 5){
//     message = 'Неверно'
// }
// alert(message)
//Задача2
// let a = 2;
// let message;
// if (a == 0 || a ==2){
//     message = a + 7
// } else {
//     message = a/10}
// alert(message)
//Задача3
// let a = 3;
// let b = 5;
// let message;
// if (a <= 1 && b >=3){
//     message = a + b;
// } else {
//     message = b - a
// }
// alert(message)
//Задача4
// let a = 0;
// let b = 12;
// let message;
// if (a > 2 && a <11 || b >= 6 && b < 14){
//     message = 'Верно'
// } else {
//     message = 'Неверно'
// }
// alert(message)
//Задачи на switch-case
// let num = 4;
// switch (num) {
//     case 1:
//       alert(result = 'зима');
//       break;
//     case 2:
//       alert(result = 'весна');
//       break;
//     case 3:
//       alert(result = 'лето');
//       break;
//     case 4:
//       alert(result = 'осень');
// }
// Задачи:
//Задача1
// let day = 9;
// let decades;
// if (day > 0 && day < 11) {
//     alert('Первая декада')
// }; if (day > 10 && day < 21) {
//     alert('Вторая декада')
// }; if (day > 21 && day < 32) {
//     alert('Третья декада')
// };
// alert(decades);

//Задача2
// let month = 1;
// let season;
// if (month == 12 || month == 1 || month == 2) {
//     season = 'Зима'
// };
// if (month > 2 && month < 6) {
//    season = 'Весна'
// };
// if (month > 5 && month < 9) {
//     season ='Лето'
// };
// if (month > 8 && month < 12) {
//     season = 'Осень'
// }
// alert(season)

//Задача3
// let alphabet = 'abcde';
// let message;
// if(alphabet[0] == 'a'){
//     message = 'Да' 
// } else{
//         message = "нет"
// }
// alert(message)

//Задача4
// let num = '12345';
// let message;
// if(num[0] == '1' ||num[0] == '2' || num[0] == '3' ){
//     message = 'Да' 
// } else{
//         message= "нет"
// }
// alert(message)

//Задача5
// let num = '123';
// let sum;
// sum = (Number(num[0]) + Number(num[1]) + Number(num[2]))
// alert(sum)

//Задача6
// let num = '123123';
// let sum;
// let sum2;
// let message;
// sum = (Number(num[0]) + Number(num[1]) + Number(num[2]))
// sum2 = (Number(num[3]) + Number(num[4]) + Number(num[5]))
// if (sum == sum2){
//     message = 'Да'
// } else {
//     message = 'Нет'
// }
// alert(message)