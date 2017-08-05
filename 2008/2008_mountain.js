function picSize(pic) {
    let testPic = pic.getAttribute("class");
    if (testPic === "bigPic") {
        pic.removeAttribute("class");
    } else {
        pic.setAttribute("class", "bigPic");
    }
}
function allBig() {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("class", "bigPic");
    }
}

function allSmall() {
    let images = document.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
        images[i].removeAttribute("class");
    }
}
function smallOrBig() {
    let button = document.getElementById("superBtn");
    let btnValue = button.getAttribute("value");
    console.log(btnValue);
    if (btnValue === "Увеличить все фото") {
        allBig();
        button.setAttribute("value", "Уменьшить все фото");
    } else {
        allSmall();
        button.setAttribute("value", "Увеличить все фото");
    }
}