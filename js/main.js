// *Javascript
// gnb에 hover 시 밑에 빨간 선 생김
// css와 맞춰주는것이 좋음
const elLi = document.querySelectorAll("#gnb > ul > li");
const elMenu = document.querySelectorAll("#gnb > ul > li > a");
const elBar = document.querySelector(".bar");

elLi.forEach(function (item) {
  item.onmouseover = function () {
    // gnb에 마우스를 올릴 때 style 변경
    elBar.style = `width: ${this.offsetWidth}px;
                    left: ${this.offsetLeft}px;`;
    // elBar.style.width = this.offsetWidth;
    // elBar.style.left = this.offsetLeft;

    // if (this.children[1]) item.children[1].style.display = "block";
  };
  item.onmouseout = function () {
    // gnb에 마우스를 올릴 때 style 변경
    elBar.style = `width: 0;
                    left: ${this.offsetLeft}px;`; // 본인 자리에서 없어지도록
    // if (item.children[1]) item.children[1].style.display = "none";
  };
});

/* // gnb에 hover시 서브메뉴 나옴
elLi.forEach(function (item2) {
  item2.onmouseover = function () {
    if (item2.children[1]) item2.children[1].style.display = "block"; // 자식들 중 2번째 자식
  };
  item2.onmouseout = function () {
    if (item2.children[1]) item2.children[1].style.display = "none"; // 자식들 중 2번째 자식
  };
});*/

// *jQuery
// gnb에 hover시 서브메뉴 나옴
const $li = $("#gnb > ul > li");

$li.on("mouseenter", function () {
  console.log("제이쿼리");
  $(this).children(".sub").stop().fadeIn(400);
});

$li.on("mouseleave", function () {
  $(this).children(".sub").stop().fadeOut(200);
});