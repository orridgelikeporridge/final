//var imagesArray = ["blue/1.jpg", "blue/2.jpg", "blue/3.jpg", "blue/4.jpg", "blue/5.jpg", "blue/6.jpg", "blue/8.jpg" ,"blue/9.jpg", "blue/17.jpg", "blue/18.png", "blue/19.png", "blue/20.png", "blue/21.png", "blue/22.png", "blue/23.png", "blue/24.png", "blue/25.png", "blue/26.png", "blue/27.png", "blue/28.png", "blue/29.png", "blue/30.png", "blue/31.png", "blue/32.png", "blue/33.png", "blue/34.png", "blue/35.png", "blue/36.png", "blue/36.png", "blue/37.png", "blue/38.png",];
var imagesArray = ["photo/a.jpg", "photo/c.jpg", "photo/d.jpg", "photo/e.jpg","photo/f.jpg","photo/g.jpg","photo/h.jpg","photo/i.jpg","photo/j.jpg","photo/k.jpg","photo/l.jpg","photo/m.jpg","photo/n.jpg","photo/o.jpg","photo/p.jpg","photo/q.jpg","photo/r.jpg","photo/s.jpg","photo/t.jpg","photo/u.jpg","photo/v.jpg","photo/w.jpg","photo/x.jpg","photo/z.jpg","photo/a1.jpg","photo/b1.jpg","photo/c1.jpg","photo/d1.jpg","photo/f1.jpg","photo/g1.jpg","photo/h1.jpg","photo/i1.jpg",];

$('.image-wrapper').hover(function() {
    var image_wrapper = $(this);
    displayImage(image_wrapper);
});

function displayImage(image_wrapper) {
    var num   = Math.floor(Math.random() * (imagesArray.length)),
        image = image_wrapper.children('a').first().children(".overlap").first();

    console.log(image);
    console.log(imagesArray[num]);
    $(image).fadeOut(250, function(){
    $(image).attr('src', imagesArray[num]);
        $(image).fadeIn();
    });
    
}




// Print
function myFunction() {
    window.print();
}