let turn = true;
let dropMenuStatus = false;
// when users open a new page, app need to display correct content according to the screen width
$(".dropMenu__body").addClass('none');
if(window.innerWidth <= 800){
   // find the screen is small
    
    $(".menu").addClass('none');
}else{
    $(".headerSvg").addClass('none');
    turn = true;
}



$(document).ready(function () {
    $(".headerSvg").click(function () {
        $(".dropMenu__body").removeClass('none');
        $(".dropMenu").slideToggle(450);
} )})

  
function resize() {

   width = window.innerWidth;
   // if screen shrink lower than 800, move menu and display svg
   if(width<800 && turn){
    $(".menu").addClass('none');
    $(".headerSvg").removeClass('none');
    $(".dropMenu__body").removeClass('none');
       turn = false;
   }
   // if screen back to more than 800px, header back to normal by toggle twice.
   if(width >= 800 && turn === false){
    $(".menu").removeClass('none');
    $(".headerSvg").addClass('none');
    $(".dropMenu__body").addClass('none');
      turn=true;
}

}
window.onresize = resize;

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
