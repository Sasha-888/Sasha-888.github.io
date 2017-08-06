$(document).ready(function () {
    $("#all").hide().fadeIn(3000);

    $("#animation").click(function () { // кнопка отключает только jQ анимацию.

        if (String($.fx.off) === "undefined" || !$.fx.off) {
            $.fx.off = true;
            $("#animation").attr("value", "Включить анимацию");
        } else {
            $.fx.off = false;
            $("#animation").attr("value", "Выключить анимацию");
        }
        console.log("$.fx.off = " + $.fx.off);
    });
//=======================================================================
    $("img[onclick]").hover(function () {
        $(this).addClass("imgOver");
    }, function () {
        $(this).removeClass("imgOver");
    });
});//////////////////////////////////////////////////////////////////////
function picSize(pic) {
    var allPics = document.getElementsByTagName("img");
    var testPic = pic.getAttribute("class");

    for (var i = 0; i < allPics.length; i++) {
        allPics[i].removeAttribute("class");
    }

    if (testPic === "bigPicOnClick") {
        pic.removeAttribute("class");
    } else {
        pic.setAttribute("class", "bigPicOnClick");
    }
}//////////////////////////////////////////////////////////////////////
function allBig() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("class", "bigPic");
    }
}

function allSmall() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].removeAttribute("class");
    }
}

function smallOrBig() {
    var button = document.getElementById("superBtn");
    var btnValue = button.getAttribute("value");
    console.log(btnValue);
    if (btnValue === "Увеличить все фото") {
        allBig();
        button.setAttribute("value", "Уменьшить все фото");
    } else {
        allSmall();
        button.setAttribute("value", "Увеличить все фото");
    }
}
