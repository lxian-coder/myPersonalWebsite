let inbig = true;

function changeBackgroundImg(){
    if(window.outerWidth < 900 && inbig ){
        $(".homeContainer").css("background-img","./assets/homeBackgroundtext.html");
        inbig = false;
        console.log("change small one");
    }
    if(window.outerWidth >= 900 && inbig === false ){
        $(".homeContainer").css("background-img","./assets/homeBackground.html");
        inbig = true;
        console.log("change big one");
    }
}
window.onresize = changeBackgroundImg;