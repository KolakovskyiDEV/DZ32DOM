'use strict'

// Вытянуть все аттрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого аттрибута в массив — вывсести этот массив в консоль
// Так-же записать в отдельный массив каждое имя аттрибута — вывести массив в консоль
// С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
// Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
// Удалить у тега ul аттрибут ‘data-dog-tail‘
// 2. Написать функцию generateList(array), которая принимает массив из чисел и массивов чисел (например [1,2,3]) и генерирует список из елементов:



// <ul>
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// </ul>
// А если в массиве встречается массив (например, [1,2, [1.1,1.2,1.3] ,3]) то делать вложенный список. Для проверки на массив используйте Array.isArray()



// <ul>
// 	<li>1</li>
// 	<li>2</li>
// 	<li>
// 		<ul>
// 			<li>1.1</li>
// 			<li>1.2</li>
// 			<li>1.3</li>
// 		</ul>
// 	</li>
// 	<li>3</li>
// </ul>

// 3. Написать функцию, которая выводит таблицу 10 × 10, заполненную числами от 1 до 100




let elementLi = document.getElementsByTagName('li');
let elementul = document.getElementsByTagName('ul');
 
//Выводит каждый элемент списка
for (let elem of elementul) // цикл for of
    {
     console.log(elem);
    }

// количество элементов через замыкание
function countNum() {
    let j = 0;
    return function () {
          for ( j ; j < elementLi.length; j++) {   
          j++;
     }
    return (j + ' элементов' );
     }
};

let result = countNum();
console.log(result());

// Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывести этот массив в консоль
function pushArr() {
    let arr = [];
    for (let elem of elementLi) // цикл for of
    {
       arr.push(elem.innerHTML); 
    }
    return arr;
    }

console.log(pushArr());
//Вытянуть все аттрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого аттрибута в массив — вывсести этот массив в консоль. Так-же записать в отдельный массив каждое имя аттрибута — вывести массив в консоль

let ul = document.getElementById("ulId");
// console.log(ul);
function attribut() {
    let arr1 = [];
    let arr2 = [];
    for (let attr of ul.attributes) // цикл for of
    {

        arr1.push(attr.value);
        arr2.push(attr.name);
    }
    return {
        arr1: arr1,
        arr2: arr2
    };
    }
let resultAtr = attribut();
console.log(resultAtr.arr1);
console.log(resultAtr.arr2);

//С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
// 1 Способ
// let liFirst = document.querySelectorAll('ul > li:last-child');
// for (let elem of liFirst) {
//       elem.innerHTML  = 'Привет меня зовут Артём'
 
//   }
// 2 Способ
function lastLi(){
let ul1 = document.getElementsByTagName('li');
for (let k = 0; k < ul1.length; k++){
    if (k === 9) {
        ul1[k].innerHTML = 'Привет меня зовут Артём';
    }
    }
    return ul1;
}
lastLi();
// Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
let bodyEl = document.body;
ul.firstElementChild.setAttribute('data-my-name', 'Artem');
console.log(ul.firstElementChild);
console.log(ul.firstElementChild.hasAttribute('data-my-name'));
//Удалить у тега ul аттрибут ‘data-dog-tail‘
ul.removeAttribute('data-dog-tail');
console.log(ul);
// Написать функцию generateList(array), которая принимает массив из чисел и массивов чисел (например [1,2,3]) и генерирует список из елементов:
let array = [1,2,3]
function generateList(array) {
    // создаём тег ul
    let ul1 = document.createElement('ul');
    //вставляем ul после нумерованого списка
    ul1.after(ul);
    ul1.className = 'list';
    ul1.setAttribute('name', 'sky');
    
    for (let i = 0; i < array.length;i++) {
        let li1 = document.createElement('li');
        li1.innerHTML = array[i];
        //вставляем созданный тег li в конец тега ul 
        ul1.append(li1);
    }
    console.log(ul1);
    ul.append(ul1);
}
generateList(array);

//А если в массиве встречается массив (например, [1,2, [1.1,1.2,1.3] ,3]) то делать вложенный список. Для проверки на массив используйте Array.isArray()

// <ul>
// 	<li>1</li>
// 	<li>2</li>
// 	<li>
// 		<ul>
// 			<li>1.1</li>
// 			<li>1.2</li>
// 			<li>1.3</li>
// 		</ul>
// 	</li>
// 	<li>3</li>
// </ul>
let array1 = [1,2, [1.1,1.2,1.3] ,3]
function generateList1(array1) {
    let ul1 = document.createElement('ul');
    let ul2 = document.createElement('ul');
    ul1.after(ul);
    ul1.className = 'list';
    ul1.setAttribute('name', 'sky');
// итерируем массив    
    for (let i = 0; i < array1.length; i++) {
    // елемент исходного массиыв не является массивом добавляем его значение через тег li в конец тега ul
     if( !Array.isArray(array1[i])){
        let li1 = document.createElement('li');
        li1.innerHTML = array1[i];
         ul1.append(li1);
        }
        // когда элемент исходного массива - вложенный массив, итерируум его теги li вкладываем в конец нового тега ul и этот новый тег ul вкладываем в конец исходного тега ul
    if (Array.isArray(array1[i])) {        
for (let k = 0; k < 3; k++){
        let li1 = document.createElement('li');
        li1.innerHTML = array1[i][k];
        ul2.append(li1);              
        }
        ul1.append(ul2);
        }
       
        }
    console.log(ul2);
    console.log(ul1);
    ul.prepend(ul1);
}
generateList1(array1);

// console.log(Array.isArray(array1[0]));

// 3. Написать функцию, которая выводит таблицу 10 × 10, заполненную числами от 1 до 100


function creareTable() {
    let num = 0;
    
    for (let n = 0; n < 10;n++){
            let ulTable = document.createElement('tr');
        for (let v = 0; v < 10; v++){
            num++;
            let liTable = document.createElement('td');
            liTable.innerHTML = num;
            // создаём атрибут и в css подключаем стили 
            liTable.className = 'cols';
            ulTable.append(liTable);
            
        }
            document.body.append(ulTable);
 
        }

};

creareTable();

