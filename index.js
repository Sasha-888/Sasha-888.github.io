function newLi(getId) {
    let label = getId.getElementsByTagName("label")[0];
    let checkBox = getId.getElementsByTagName("input")[0].checked;
    if (checkBox) {
        label.setAttribute("class", "crossed");
        getId.setAttribute("class", "crossed"); // добавление в li класса crossed для того,что бы работал css .crossed:hover с настройкой text-transform: none;
    } else {
        label.removeAttribute("class");
        getId.removeAttribute("class");
    }
}

//===================================================================// todo: разобраться...
// let ul = document.getElementById("taskList");
// ul.addEventListener('click', newLi, false);
//
// function newLi(event) {
//     let test = event.type;
//     console.log(test);
//     let checkBox = event.target.checked;
//     console.log(checkBox);
//     if (!checkBox) {
//         test.style.textDecoration = "line-through";
//     } else {
//         test.style.textDecoration = "none";
//     }
// }
//===================================================================
/////////////////////////////////////////////////////////////////////
let newId = 1; // счетчик для генерации id
let offBtn = document.getElementById("addButton");
let textInput = document.getElementById("inputList");
/////////////////////////////////////////////////////////////////////
window.onload = init;
function init() {
    let button = document.getElementById("addButton");
    button.onclick = addTaskButton;
}
/////////////////////////////////////////////////////////////////////
// window.onload = init;
function addTaskButton() {
    let liCount = document.getElementById("taskList").childElementCount;
    let task = textInput.value;
    if (task === "") {
        alert("Введите задачу...");
    } else {
        console.log(task);
        let li = document.createElement("li"); // создание нового элемента li
        li.innerHTML = '<input type="checkbox" id="' + newId + '"><label for="' + newId + '">' + task + '</label>'; // создает чекбокс с автоприсвоением id и label для него с соответсвующим id чекбоксу for.И все это добавляется в поле li.
        let ul = document.getElementById("taskList"); // получаем родительский элемент, в который будем добавлять дочерний li со всем фаршем.
        newId = newId + 1; // для создания новых id для чекбоксов(используется newId) или для for лэйбла(используется newId + 1)
        li.setAttribute("onclick", "newLi(this);");
        ul.appendChild(li); // добавление дочернего элемента li в родительский ul

        textInput.value = ""; // очищает поле ввода, после добавления введенного в список
        console.log(liCount);
        // ===================================================
        // console.log(ul);
        // console.log(ul.children.length); // = ul.childElementCount
        // console.log(ul.children); // !!!!!!!!ПОЛУЧАЕТ ОБЪЕКТЫ ВСЕХ ДОЧЕРНИХ ЭЛЕМЕНТОВ В ВИДЕ МАССИВА!!!!!!!
    }
    // ============деактивирует кнопку "Добавить"=============
    if (liCount === 4) {
        offBtn.setAttribute("disabled", "disabled");
        textInput.setAttribute("disabled", "disabled");
    }
}
/////////////////////////////////////////////////////////////////////todo: наладить удаление - все за одно нажатие.
function delButton() {
    let ul = document.getElementById("taskList"); // для arrUl.removeChild(li)
    let arrUl = ul.children; // возвращает массив из объектов li.
    console.log(arrUl);
    for (let i = 0; i < arrUl.length; i++) {
        let li = arrUl[i];
        console.log(li);
        let checkLi = li.getElementsByTagName("input")[0].checked; // проверяет чекбокс в ul > li > input на установленную в чекбоксе галочку.
        if (checkLi) {
            ul.removeChild(li); // для ul
            // li.remove(); //  для arrUl, при этом ul не нужен, можно удалить.
            offBtn.removeAttribute("disabled");
            textInput.removeAttribute("disabled");
        } else {
            console.log(checkLi);
        }
    }
    console.log(ul);
}

