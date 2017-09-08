//////////////////////////////jQuery/////////////////////////////////
$("#inputList").focus();
$("#password").prop({"disabled": true, 'required': false});
/////////////////////////////////////////////////////////////////////
$("#delButton").click(function () {
    $("#taskList :checked").parent().remove(); // 1 вариант
    // $('#taskList li').has("input:checked").remove(); // 2 вариант
    // $('li input').each(function () { // 3 вариант с prop()
    //     if($(this).prop('checked')){
    //         $(this).parent().remove()
    //     }
    // });
    // if ($("input").is(':checked')) { // 4 вариант
    //     $("input:checked").parent().remove();
    // } //------------------------------------------
    if ($('#taskList li').length !== 5) {
        $("#addButton").removeAttr("disabled"); // или prop("disabled", false);
        $("#inputList").removeAttr("disabled"); // или prop("disabled", false);
    }
}); // end of #delButton
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
$('#buttonLogin').click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    $('#divForm').slideToggle(400, function () {
        $('#logForm').fadeToggle(500);
    });
    $("#open").toggleClass('close');
}); // окончание click
/////////////////////////////////////////////////////////////////////todo: скрытие login при клике вне формы
$().click(function () {
});/////////////////////////////////////////////////////////////////////
$("#inputList").focus(function () {
    $(this).attr("placeholder", "");
});
$("#inputList").blur(function () {
    $(this).attr("placeholder", "Введите задачу...");
});/////////////////////////////////////////////////////////////////////
function newLi(getId) {
    var label = getId.getElementsByTagName("label")[0];
    var checkBox = getId.getElementsByTagName("input")[0].checked;
    if (checkBox) {
        label.setAttribute("class", "crossed");
        getId.setAttribute("class", "crossed"); // добавление в li класса crossed для того,что бы работал css .crossed:hover с настройкой text-transform: none;
    } else {
        label.removeAttribute("class");
        getId.removeAttribute("class");
    }
}/////////////////////////////////////////////////////////////////////
var newId = 1; // счетчик для генерации id
var offBtn = document.getElementById("addButton");
var textInput = document.getElementById("inputList");
/////////////////////////////////////////////////////////////////////
window.onload = init;

function init() {
    var button = document.getElementById("addButton");
    button.onclick = addTaskButton;
}/////////////////////////////////////////////////////////////////////
// window.onload = init;
function addTaskButton() {
    var liCount = document.getElementById("taskList").childElementCount; // счет с 0 ..?
    var task = textInput.value;
    if (task === "") {
        alert("Введите задачу...");
        return false;
    } else {
        console.log(task);
        var li = document.createElement("li"); // создание нового элемента li
        li.innerHTML = '<input type="checkbox" id="' + newId + '"><label for="' + newId + '">' + task + '</label>'; // создает чекбокс с автоприсвоением id и label для него с соответсвующим id чекбоксу for.И все это добавляется в поле li.
        var ul = document.getElementById("taskList"); // получаем родительский элемент, в который будем добавлять дочерний li со всем фаршем.
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
    // ============деактивирует кнопку "Добавить и поле ввода задачи"=============
    if (liCount === 4) {
        offBtn.setAttribute("disabled", "disabled");
        textInput.setAttribute("disabled", "disabled");
    }
}/////////////////////////////////////////////////////////////////////todo поставить галочку напротив выбора ✓
$('#shit').change(function () {
    // if ($(this).val() =='  ')
});
/////////////////////////////////////////////////////////////////////
// function delButton() {
//     var ul = document.getElementById("taskList"); // для arrUl.removeChild(li)
//     var arrUl = ul.children; // возвращает массив из объектов li.
//     console.log(arrUl);
//     for (var i = 0; i < arrUl.length; i++) {
//         var li = arrUl[i];
//         console.log(li);
//         var checkLi = li.getElementsByTagName("input")[0].checked; // проверяет чекбокс в ul > li > input на установленную в чекбоксе галочку.
//         if (checkLi) {
//             ul.removeChild(li); // для ul
//             // li.remove(); //  для arrUl, при этом ul не нужен, можно удалить.
//             offBtn.removeAttribute("disabled");
//             textInput.removeAttribute("disabled");
//         } else {
//             console.log(checkLi);
//         }
//     }
//     console.log(ul);
// }


