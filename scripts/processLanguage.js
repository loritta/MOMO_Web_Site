// JavaScript source code for index.html of Dessert Cafe MOMO
// Scripted by : Suim Park
// Script Date : 12 December, 2017

var language;

function processCookie() {
   document.getElementById("btnLang").innerHTML = language;
   if (language == "FR") {
       language = "EN";
    } else {
        language = "FR";
    }


    var tmp = "momo_language=" + language;
    document.cookie = tmp;

    translatePage();
}

function languageInfo() {
    if (document.cookie) {
        var c = document.cookie;
        language = c.substring(c.lastIndexOf("=") + 1);

        if (language == "FR") {
            document.getElementById("btnLang").innerHTML = "EN";
        } else {
            document.getElementById("btnLang").innerHTML = "FR";
        }

        translatePage();
    } else { 
        language = "EN";
        translatePage();
    }
}


function translatePage() {
    if (language == "EN") {
        var e = document.getElementsByClassName("lang-fr");
        for (var i = 0; i < e.length; i++) {
            e[i].style.display = "none";
        }
        e = document.getElementsByClassName("lang-en");
        for (var i = 0; i < e.length; i++) {
            e[i].style.display = "block";
        }
    } else {
        var e = document.getElementsByClassName("lang-en");
        for (var i = 0; i < e.length; i++) {
            e[i].style.display = "none";
        }
        e = document.getElementsByClassName("lang-fr");
        for (var i = 0; i < e.length; i++) {
            e[i].style.display = "block";
        }
    }

}

function setUpPage(evt) {
    if (evt.target.body.getAttribute("id") == "index") {
        resizeBrowser();
    }
    languageInfo();

}

if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
    window.addEventListener("resize", resizeBrowser, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
    window.attachEvent("onresize", resizeBrowser);
}

