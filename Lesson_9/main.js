
  //TASK#1-------------------------------

  $("a").attr("target","_blank");


  //TASK#2-------------------------------

  $(".head").css("background-color","green");
  // variant#1
  $(".head").find(".inner").css("font-size","35px");

  // variant#2
  $(".inner").css("font-size","35px");

  //TASK#3-------------------------------

  $("div").eq(0).after($("h3").eq(0))
  $("div").eq(1).after($("h3").eq(1))

  //TASK#4-------------------------------

  let counter = 0;
  $("input").on("click",function show() {
    res = $("input").is(":checked");
      counter += 1;
      if (counter >= 3){
        $("div>input").attr('disabled','enable');
      }
  })
