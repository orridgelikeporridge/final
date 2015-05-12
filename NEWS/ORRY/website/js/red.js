//var imagesArray = ["red/1.png", "red/2.png", "red/3.png", "red/4.png", "red/5.png", "red/6.png", "red/8.png" ,"red/9.png", "red/17.png", "red/18.jpg", "red/19.jpg", "red/20.jpg", "red/21.jpg", "red/22.jpg", "red/23.jpg", "red/24.jpg", "red/25.jpg", "red/26.jpg", "red/27.png", "red/28.png", "red/29.png", "red/30.png", "red/31.png", "red/32.png", "red/33.png", "red/34.png"];
var imagesArray = ["red/1.png", "red/2.png", "red/3.png", "red/4.png", "red/5.png", "red/6.png", "red/8.png" ,"red/9.png", "red/17.png", "red/18.jpg", "red/19.jpg", "red/20.jpg", "red/21.jpg", "red/22.jpg", "red/23.jpg", "red/24.jpg", "red/25.jpg", "red/26.jpg", "red/27.png", "red/28.png", "red/29.png", "red/30.png", "red/31.png", "red/32.png", "red/33.png", "red/34.png", "red/35.jpg", "red/36.jpg", "red/37.jpg", "red/38.jpg", "red/39.jpg", "red/40.jpg", "red/41.jpg", ];

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