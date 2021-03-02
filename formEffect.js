$("*").on("click", function(){
    let focused = document.activeElement;
    let brand = $(focused).attr("brand");
   
    $(".textarea").each(function(){
      let brand2 = $(this).attr("brand");
      // if the input element is focused, move label out
      if(brand2 === brand){
        
        moveOut(brand2);
    // if the input is not empty, move label out
      }else if($(this).val()){
          moveOut(brand2);
   // all others move label in
      }else{
          moveIn(brand2);
      }
    });
   })
  // if form is empty, warning user
  $(".formButton").click(function(evt){
    console.log("success");
    if(!$(".messagetextArea").val()){
      alert("Message can't be empty");
    evt.preventDefault();
    } 

  })

 function moveOut(getClass){
   
     $("."+getClass).css({"bottom":"0px","right":"0px","color":"blue"});
 }

 function moveIn(getClass){
   
   $("."+getClass).each(function(){
      $(this).css({"bottom":"-41.2px","right":"-25px","color":"#585858"});
   })
}


