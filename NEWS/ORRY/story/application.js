var imagesArray = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/8.jpg" ,"img/9.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg",];

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



