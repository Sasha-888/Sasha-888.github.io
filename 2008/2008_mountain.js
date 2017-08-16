$(document).ready(function () {
    $("#all").hide().fadeIn(3000);
//=======================================================================
    var pics = $("img").not("#gelLogo");

    pics.hover(function () {
        $(this).addClass("imgOver");
    }, function () {
        $(this).removeClass("imgOver");
    });
//=======================================================================
    pics.click(function () {
        var clonePic = $(this).clone().attr("id", "newClone").removeClass("imgOver");
        if ($(this).hasClass("bigPicOnClick")) {
            pics.animate({opacity: 1}, 300);
            $(this).removeClass("bigPicOnClick");
            if ($("div").has("#newClone")) {
                $("#newClone").remove();
            }
        } else {
            pics.animate({opacity: 1}, 300);
            $("#newClone").remove();
            $(this).before(clonePic);
            pics.removeClass("bigPicOnClick");
            $(this).addClass("bigPicOnClick");
            pics.not(".bigPicOnClick").animate({opacity: 0.5}, 300);
            clonePic.animate({opacity: 0.5}, 300);
        }
    });//////////////////////////////////////////////////////////////////
    var picsArray = []; //
    var preloadImages = ['28082008421.jpg',
        '28082008429.jpg',
        '28082008473.jpg'];
    for (var i = 0; i < preloadImages.length; i++) {
        picsArray.push($('<img>').attr('src', preloadImages[i]));
        $('p').after(picsArray[i][0]);
    }
});//jQuery READY///////////////////////////////////////////////////////////////


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
    var btnValue = button.innerHTML;
    console.log(btnValue.indexOf("Увеличить"));
    if (btnValue.indexOf("Увеличить") > 0) {
        allBig();
        button.innerHTML = "<i class='fa fa-picture-o'></i> Уменьшить все фото";
    } else {
        allSmall();
        button.innerHTML = "<i class='fa fa-picture-o'></i> Увеличить все фото";
    }
}
