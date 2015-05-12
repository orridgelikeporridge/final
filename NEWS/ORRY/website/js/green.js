var zindex = 1000;
var currentcolor = "blue";

// var imagesArray = ["green/1.jpg", "green/2.png", "green/3.png", "green/4.png", "green/5.jpg", "green/6.jpg", "green/7.jpg" ,"green/8.png", "green/9.png", "green/10.jpg", "green/11.jpg", "green/12.jpg", "green/13.jpg", "green/14.jpg", "green/15.png", "green/16.png", "green/17.jpg", "green/18.jpg", "green/19.jpg", "green/20.jpg", "green/21.jpg", "green/22.png", "green/23.png", "green/24.png", "green/25.png", "green/26.png", "green/27.png", "green/28.png", "green/29.png", "green/30.png", "green/31.jpg", "green/32.jpg", "green/33.jpg","green/34.jpg", "green/35.jpg", "blue/1.jpg", "blue/2.jpg", "blue/3.jpg", "blue/4.jpg", "blue/5.jpg", "blue/6.jpg", "blue/8.jpg" ,"blue/9.jpg", "blue/17.jpg", "blue/18.png", "blue/19.png", "blue/20.png", "blue/21.png", "blue/22.png", "blue/23.png", "blue/24.png", "blue/25.png", "blue/26.png", "blue/27.png", "blue/28.png", "blue/29.png", "blue/30.png", "blue/31.png", "blue/32.png", "blue/33.png", "blue/34.png", "blue/35.png", "blue/36.png", "blue/36.png", "blue/37.png", "blue/38.png", "blue/39.jpg", "blue/40.jpg", "blue/41.jpg", "blue/42.jpg", "blue/43.jpg", "red/1.png", "red/2.png", "red/3.png", "red/4.png", "red/5.png", "red/6.png", "red/8.png" ,"red/9.png", "red/17.png", "red/18.jpg", "red/19.jpg", "red/20.jpg", "red/21.jpg", "red/22.jpg", "red/23.jpg", "red/24.jpg", "red/25.jpg", "red/26.jpg", "red/27.png", "red/28.png", "red/29.png", "red/30.png", "red/31.png", "red/32.png", "red/33.png", "red/34.png", "red/35.jpg", "red/36.jpg", "red/37.jpg", "red/38.jpg", "red/39.jpg", "yellow/1.jpg", "yellow/2.jpg", "yellow/3.jpg", "yellow/4.jpg", "yellow/5.png", "yellow/6.png", "yellow/8.png" ,"yellow/9.png", "yellow/10.jpg", "yellow/11.jpg", "yellow/12.jpg", "yellow/13.jpg", "yellow/14.jpg", "yellow/15.png", "yellow/16.png", "yellow/17.jpg", "yellow/18.jpg", "yellow/19.jpg", "yellow/20.jpg", "yellow/21.jpg", "yellow/22.png", "yellow/23.png", "yellow/24.jpg", "yellow/25.png", "yellow/26.png", "yellow/27.png", "yellow/28.png", "yellow/29.png", "yellow/30.png", "yellow/31.png", "yellow/32.png","yellow/33.png", "yellow/34.jpg", "yellow/35.jpg", "yellow/36.jpg", "yellow/37.jpg", "yellow/38.jpg",];

var imagesArrayGreen = ["green/1.jpg", "green/2.png", "green/3.png", "green/4.png", "green/5.jpg", "green/6.jpg", "green/7.jpg" ,"green/8.png", "green/9.png", "green/10.jpg", "green/11.jpg", "green/12.jpg", "green/13.jpg", "green/14.jpg", "green/15.png", "green/16.png", "green/17.jpg", "green/18.jpg", "green/19.jpg", "green/20.jpg", "green/21.jpg", "green/22.png", "green/23.png", "green/24.png", "green/25.png", "green/26.png", "green/27.png", "green/28.png", "green/29.png", "green/30.png", "green/31.jpg", "green/32.jpg", "green/33.jpg","green/34.jpg", "green/35.jpg",];
var imagesArrayBlue = ["blue/1.jpg", "blue/2.jpg", "blue/3.jpg", "blue/4.jpg", "blue/5.jpg", "blue/6.jpg", "blue/8.jpg" ,"blue/9.jpg", "blue/17.jpg", "blue/18.png", "blue/19.png", "blue/20.png", "blue/21.png", "blue/22.png", "blue/23.png", "blue/24.png", "blue/25.png", "blue/26.png", "blue/27.png", "blue/28.png", "blue/29.png", "blue/30.png", "blue/31.png", "blue/32.png", "blue/33.png", "blue/34.png", "blue/35.png", "blue/36.png", "blue/36.png", "blue/37.png", "blue/38.png", "blue/39.jpg", "blue/40.jpg", "blue/41.jpg", "blue/42.jpg", "blue/43.jpg", ];
var imagesArrayRed = ["red/1.png", "red/2.png", "red/3.png", "red/4.png", "red/5.png", "red/6.png", "red/8.png" ,"red/9.png", "red/17.png", "red/18.jpg", "red/19.jpg", "red/20.jpg", "red/21.jpg", "red/22.jpg", "red/23.jpg", "red/24.jpg", "red/25.jpg", "red/26.jpg", "red/27.png", "red/28.png", "red/29.png", "red/30.png", "red/31.png", "red/32.png", "red/33.png", "red/34.png", "red/35.jpg", "red/36.jpg", "red/37.jpg", "red/38.jpg", "red/39.jpg", ];
var imagesArrayYellow = ["yellow/1.jpg", "yellow/2.jpg", "yellow/3.jpg", "yellow/4.jpg", "yellow/5.png", "yellow/6.png", "yellow/8.png" ,"yellow/9.png", "yellow/10.jpg", "yellow/11.jpg", "yellow/12.jpg", "yellow/13.jpg", "yellow/14.jpg", "yellow/15.png", "yellow/16.png", "yellow/17.jpg", "yellow/18.jpg", "yellow/19.jpg", "yellow/20.jpg", "yellow/21.jpg", "yellow/22.png", "yellow/23.png", "yellow/24.jpg", "yellow/25.png", "yellow/26.png", "yellow/27.png", "yellow/28.png", "yellow/29.png", "yellow/30.png", "yellow/31.png", "yellow/32.png","yellow/33.png", "yellow/34.jpg", "yellow/35.jpg", "yellow/36.jpg", "yellow/37.jpg", "yellow/38.jpg",];
var currImageArray = imagesArrayBlue;

$('.blue').click(function() {
	currentcolor = "blue";
    currImageArray = imagesArrayBlue;
});

$('.red').click(function() {
	currentcolor = "red";
    currImageArray = imagesArrayRed;
});

$('.green').click(function() {
    currentcolor = "green";
    currImageArray = imagesArrayGreen;
});

$('.yellow').click(function() {
    currentcolor = "yellow";
    currImageArray = imagesArrayYellow;
}); 




$('.image-wrapper').click(function() {
    var image_wrapper = $(this);
    displayImage(image_wrapper);
});

function displayImage(image_wrapper) {
    var num   = Math.floor(Math.random() * (currImageArray.length)),
        image = image_wrapper.children('.overlap').first();

    console.log(image);
    console.log(currImageArray[num]);
    $(image).attr('src', currImageArray[num]); 
    console.log("this is mme");

}




// Print
function myFunction() {
    window.print();
}