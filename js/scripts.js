$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    
    var enterNameInput = $("input#enterName").val();
    $ (".name").text(enterNameInput);

    var fridayNight = parseInt($("#fridayNight").val());
    var favActivity = parseInt($("#favActivity").val());
    var favTvShow = parseInt($("#favTvShow").val());
    var favColor = parseInt($("#favColor").val());
    var result = (fridayNight + favActivity + favTvShow + favColor);

    // console.log(enterNameInput)
    // console.log(fridayNight) 
    // console.log(favActivity)
    // console.log(favTvShow)
    // console.log(favColor)
    // console.log(result)

    if (fridayNight === 0 || favActivity === 0 || favTvShow === 0 || favColor === 0) {
      $(".blank").hide();
      $(".autoSelect").show();
      $(".autoSelect").attr("selected", "selected")
      $(".results").hide();
    } else if (result <=6) {
      $(".results").show();
      $("#ruby").slideToggle();
      $("#go", "#java","#bianary").hide();
    } else if (result <=14) {
      $(".results").show();
      $("#go").slideToggle();
      $("#ruby", "#java","#bianary").hide();
    } else if (result <= 29) {
      $(".results").show();
      $("#java").slideToggle();
      $("#ruby", "#go","#bianary").hide();
    } else if (result > 30) {
      $(".results").show();
      $("#ruby", "#go", "#java").hide();
      $("#bianary").slideToggle();
    };
   return (result)
  })
});