let firstClick = true;
let inbig = true;


    $(".headerSvg").click(function () {
         if(firstClick){
          $(".li").css({ "display":"flex"});
          console.log("jsdj");
           firstClick = false;
           inbig = false;
        
        }else{
          $(".dropMenu__body").slideToggle(450);
         }
}) 

function resetClick(){
  if(window.outerWidth > 800 && inbig === false ){
    firstClick = true;
    inbig = true;
  }
}
window.onresize = resetClick;





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
