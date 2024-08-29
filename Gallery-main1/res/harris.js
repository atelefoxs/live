"use strict";
// 卖萌标题
var OriginTitile = document.title,
  titleTime;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.title = "(つェ⊂)";
    clearTimeout(titleTime);
  } else {
    document.title = "(*´∇｀*)";
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});
