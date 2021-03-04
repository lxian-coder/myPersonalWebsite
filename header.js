let firstClick = true;
let inSmall = true;

$(document).ready(function () {
    $(".headerSvg").click(function () {
         if(firstClick){
          $(".dropMenu__body").css({ "display":"flex", "flex-direction":"column"});
         }else{
          $(".dropMenu__body").slideToggle(450);
          console.log("toggle");
         
         } 
         firstClick = false;
         inSmall = true;
} )})


function noneDropMenu(){
  if(window.outerWidth > 800 && inSmall){
    $(".dropMenu__body").css('display','none');
    console.log("goo");
    inSmall = false;
    firstClick = true;
  }
}
   window.onresize = noneDropMenu;


//锁定正在访问的网页标签变色 
let url = window.location.pathname;
console.log( url);
// find the target  <a>  and add a class
$(".menu__link").each(function () {
    let urlFind = returnUrl(url);
    if($(this).attr("href") === urlFind){
      $(this).addClass("selected");

    }
  })
  // 把url 转换成href 一样的长度
function returnUrl(urlString) {
     let number = urlString.lastIndexOf("/");
     let a = urlString.substring(number);
     let result = "."+a;
      return result;
  }
