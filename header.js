let open_close = false;
let inbig = true;


    $(".headerSvg").click(function () {
           if(!open_close){
           $(".li").css("display","flex");
            console.log("jsdj");
            open_close =true;
           }else{
              $(".li").css("display","none");
              open_close=false;
            }
}) 


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
