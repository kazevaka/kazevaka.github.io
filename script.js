console.log("Hello world!");
var counter = 0;

$(".image").click(function() {
  if(counter == 0) {
    $(".image").css("background-image", "url('image2.png')");
    counter += 1;
    console.log(counter);
  } else if(counter == 1) {
    $(".image").css("background-image", "url('image3.jpg')");
    counter += 1
    console.log(counter);
  } else if(counter == 2) {
    $(".image").css("background-image", "url('image1.png')");
    counter = 0;
    console.log(counter);
  }


});
