// var imagesArray = ["yellow/1.jpg", "yellow/2.jpg", "yellow/3.jpg", "yellow/4.jpg", "yellow/5.png", "yellow/6.png", "yellow/8.png" ,"yellow/9.png", "yellow/10.jpg", "yellow/11.jpg", "yellow/12.jpg", "yellow/13.jpg", "yellow/14.jpg", "yellow/15.png", "yellow/16.png", "yellow/17.jpg", "yellow/18.jpg", "yellow/19.jpg", "yellow/20.jpg", "yellow/21.jpg", "yellow/22.png", "yellow/23.png", "yellow/24.jpg", "yellow/25.png", "yellow/26.png", "yellow/27.png", "yellow/28.png", "yellow/29.png", "yellow/30.png", "yellow/31.png", "yellow/32.png","yellow/33.png"];
var zindex = 1000;
var imagesArray = ["yellow/1.jpg", "yellow/2.jpg", "yellow/3.jpg", "yellow/4.jpg", "yellow/5.png", "yellow/6.png", "yellow/8.png" ,"yellow/9.png", "yellow/10.jpg", "yellow/11.jpg", "yellow/12.jpg", "yellow/13.jpg", "yellow/14.jpg", "yellow/15.png", "yellow/16.png", "yellow/17.jpg", "yellow/18.jpg", "yellow/19.jpg", "yellow/20.jpg", "yellow/21.jpg", "yellow/22.png", "yellow/23.png", "yellow/24.jpg", "yellow/25.png", "yellow/26.png", "yellow/27.png", "yellow/28.png", "yellow/29.png", "yellow/30.png", "yellow/31.png", "yellow/32.png","yellow/33.png", "yellow/34.jpg", "yellow/35.jpg", "yellow/36.jpg", "yellow/37.jpg", "yellow/38.jpg", "yellow/39.jpg", "yellow/40.jpg", "yellow/41.jpg", "yellow/42.jpg", "yellow/43.jpg",];

$('.image-wrapper').click(function() {
    var image_wrapper = $(this);
    displayImage(image_wrapper);
});

function displayImage(image_wrapper) {
    var num   = Math.floor(Math.random() * (imagesArray.length)),
        image = image_wrapper.children('.overlap').first();

    console.log(image);
    console.log(imagesArray[num]);
    $(image).attr('src', imagesArray[num]);
}




// Print
function myFunction() {
    window.print();
}