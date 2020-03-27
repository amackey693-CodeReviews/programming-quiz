$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    var fridayNight = parseInt($("#fridayNight").val());
    var favActivity = parseInt($("#favActivity").val());
    var favTvShow = parseInt($("#favTvShow").val());
    var favColor = parseInt($("#favColor").val());
    var result = (fridayNight + favActivity + favTvShow + favColor);

    console.log(fridayNight)
    console.log(favActivity)
    console.log(favTvShow)
    console.log(favColor)

    if (fridayNight === 0 || favActivity === 0 || favTvShow === 0 || favColor === 0) {
      $(".blank").hide();
      $(".autoSelect").show();
      $(".autoSelect").attr("selected", "selected")
      $(".results").hide();
    } else if (result <=4) {
      $(".results").show();
      $("#ruby").show();
      $("#go", "#java","#bianary").hide();
    } else if (result <=8) {
      $(".results").show();
      $("#go").show();
      $("#ruby", "#java","#bianary").hide();
    } else if (result <=12) {
      $(".results").show();
      $("#java").show();
      $("#ruby", "#go","#bianary").hide();
    } else if (result > 13) {
      $(".results").show();
      $("#bianary").show();
      $("#ruby", "#go", "#java").hide(); 
    };
   return (result)
  })
});