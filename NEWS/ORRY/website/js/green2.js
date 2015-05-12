var imagesArrayGreen = ["green/1.jpg", "green/2.png", "green/3.png", "green/4.png", "green/5.jpg", "green/6.jpg", "green/7.jpg" ,"green/8.png", "green/9.png", "green/10.jpg", "green/11.jpg", "green/12.jpg", "green/13.jpg", "green/14.jpg", "green/15.png", "green/16.png", "green/17.jpg", "green/18.jpg", "green/19.jpg", "green/20.jpg", "green/21.jpg", "green/22.png", "green/23.png", "green/24.png", "green/25.png", "green/26.png", "green/27.png", "green/28.png", "green/29.png", "green/30.png", "green/31.jpg", "green/32.jpg", "green/33.jpg","green/34.jpg", "green/35.jpg",];

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