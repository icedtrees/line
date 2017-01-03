function test() {
  document.body.style.backgroundColor = "red";
  console.log("asdf");
  elements = document.getElementsByClassName("_51sy");
    for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = "Im a cat";
  }
}

function doPusheen() {
  var pusheenParent = document.getElementsByClassName("_5r81")[0]
  if (!pusheenParent || pusheenParent.bonusPusheens) {
    return;
  }
  pusheenParent.bonusPusheens = true;
  var pusheenLine = document.createElement("a");
  var chatWindow = document.getElementsByClassName("_53ik")[0];
  chatWindow.setAttribute("style", "width: 318px;");
  var pusheenLineImg = document.createElement("img");
  pusheenLineImg.src = "https://sdl-stickershop.line.naver.jp/products/0/0/1/1014241/android/stickers/637244.png";
  pusheenLineImg.className = "_5r8c";
  pusheenLine.appendChild(pusheenLineImg);
  pusheenParent.appendChild(pusheenLine);
}

document.body.addEventListener("DOMNodeInserted", function() {
  console.log("insertion!");
  doPusheen();
});
