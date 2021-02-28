let turn = true;
if(turn){
    // hide svg and menu
    toggleSvg();
    toggleSvgMenu();
    console.log("tooggle");
}
$(document).ready(function () {
    $(".headerSvg").click(function () {console.log("right")
    toggleSvgMenu();
} )})

    function toggleMenu() { $(document).ready(function () {
    $(".menu").slideToggle(1);});}

    function toggleSvg() { $(document).ready(function () {
    $(".headerSvg").slideToggle(1);});} 

    function toggleSvgMenu() { $(document).ready(function () {
    $(".dropMenu").slideToggle(1);});} 

function resize() {

   width = window.innerWidth;
   // if screen shrank lower than 800, toggle menu and display svg
   if(width<800 && turn){
       toggleMenu();
       toggleSvg();
       turn = false;
   }
   // if screen back to more than 800px, header back to normal by toggle twice.
   if(width >= 800 && turn === false){
      toggleMenu();
      toggleSvg();
      turn=true;
}

}
window.onresize = resize;

// 锁定正在访问的网页标签变色
// let url = window.location.pathname;
// console.log( url);
// // find the target  <a>  and add a class
// $(".menu__link").each(function () {
//     let urlFind = returnUrl(url);
//     if($(this).attr("href") === urlFind){
//       $(this).addClass("selected");

//     }
//   })
//   // 把url 转换成href 一样的长度
// function returnUrl(urlString) {
     
//      let number = urlString.lastIndexOf("/");
//      let a = urlString.substring(number);
//      let result = "."+a;
//       return result;
//   }
