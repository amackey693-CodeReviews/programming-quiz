$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    var fridayNight = parseInt($("#fridayNight").val());
    var favActivity = parseInt($("#favActivity").val());
    var favTvShow = parseInt($("#favTvShow").val());
    var favColor = parseInt($("#favColor").val());
    var result = (fridayNight + favActivity + favTvShow + favColor);

    if (fidayNight === 0 || favActivity === 0 || favTvShow === 0 || favColor === 0) {
      $(".autoSelect").show();
      $(".autoSelect").attr("selected", "selected")
      $(".results").hide();
    }
    else if (result <=4) {
      $(".results").show();
      $("#ruby").show();
      $("#go", "#java","#bianary").hide();
    }

    return (result)
  })



});