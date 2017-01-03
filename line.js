"use strict";
/*jslint browser:true*/
function test() {
    // This function is unused sorry
    document.body.style.backgroundColor = "red";
    console.log("asdf");
    var elements = document.getElementsByClassName("_51sy");
    for (var i = 0; i < elements.length; i++) {
        elements[i].textContent = "Im a cat";
    }
}

function renderSticker(index) {
    var prefix = "https://sdl-stickershop.line.naver.jp/products/0/0/1/1014241/android/stickers/6372";
    var suffix = ".png";
    var url = prefix + index + suffix;
    var sticker = document.createElement("div");
    sticker.className = "_5r8h";

    var stickerImg = document.createElement("div");
    stickerImg.className = "_5r8i";
    stickerImg.setAttribute("role", "img");
    var imgStyle = "background-repeat: no-repeat; background-size: 64px 64px; cursor: pointer; height: 64px; width: 64px;";
    imgStyle += `background-image: url("${url}");`;
    stickerImg.setAttribute("style", imgStyle);
    sticker.appendChild(stickerImg);

    return sticker;
}

function onPusheenClick(pusheenLine) {
    // Set selected class on pusheen line icon
    // this should be reversible but whatever
    // TODO(davy): what does this line do? also only run this once
    pusheenLine.className += " _5r8b";

    var tableContainer = document.getElementsByClassName("_5r8k")[0];

    // Clear table
    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }

    // create 4 columns wide table
    var table = document.createElement("table");
    table.setAttribute("cols", 4);
    table.className = "uiGrid _51mz _5f0n";
    table.setAttribute("cellspacing", 0);
    table.setAttribute("cellpadding", 0);
    tableContainer.appendChild(table);

    var tbody = document.createElement("tbody");
    table.appendChild(tbody);

    // fill table with rows
    for (var i = 42; i <= 81; i+= 4) {
        var row = document.createElement("tr");
        row.className = "_51mx";
        tbody.appendChild(row);
        for (var j = i; j < i + 4; j++) {
            var cell = document.createElement("td");
            cell.className = "_51m-";
            cell.appendChild(renderSticker(j));
            row.appendChild(cell);
        }
    }
}

function doPusheen() {
    var pusheenParent = document.getElementsByClassName("_5r81")[0];

    // bonusPusheens attribute determines whether we have run this fn before
    if (!pusheenParent || pusheenParent.bonusPusheens) {
        return;
    }
    pusheenParent.bonusPusheens = true;

    // Expand chat window to accommodate new icon
    var chatWindow = document.getElementsByClassName("_53ik")[0];
    chatWindow.setAttribute("style", "width: 318px;");

    // Create new pusheen icon
    var pusheenLine = document.createElement("a");
    pusheenLine.className = "_58ra";
    pusheenLine.onclick =  function() { onPusheenClick(pusheenLine); };
    pusheenParent.appendChild(pusheenLine);

    // Create image inside pusheen icon
    var pusheenLineImg = document.createElement("img");
    pusheenLineImg.src = "https://sdl-stickershop.line.naver.jp/products/0/0/1/1014241/android/stickers/637244.png";
    pusheenLineImg.className = "_5r8c";
    pusheenLine.appendChild(pusheenLineImg);
}

document.body.addEventListener("DOMNodeInserted", function() {
    //console.log("insertion!");
    doPusheen();
});
