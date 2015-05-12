var dropped = false;

$(window).mousemove(function(e){
    if (!dropped) {
        $("#image").css({left:(e.pageX -125), top:(e.pageY-125)});
	}
    else {
        $("#menu").css({left:(e.pageX -125), top:(e.pageY-125)});
        $("hover").class("hide");
    }
});

var photos = [
    "img/1.jpg", 
    "img/2.jpg", 
    "img/3.jpg", 
    "assets/images/png/4.png", 
    "assets/images/png/5.png",
    "assets/images/png/6.png",
    "assets/images/png/7.png",
    "assets/images/png/8.png",
    "assets/images/png/9.png",
    "assets/images/png/10.png",
    "assets/images/png/11.png",
    "assets/images/png/12.png",
    "assets/images/png/13.png",
    "assets/images/png/14.png",
    "assets/images/png/15.png",
    "assets/images/png/16.png",
    "assets/images/png/17.png",
    "assets/images/png/18.png",
    "assets/images/png/19.png",
    "assets/images/png/20.png",
    "assets/images/png/21.png",
    "assets/images/png/22.png",
    "assets/images/png/23.png",
    "assets/images/png/24.png",
    "assets/images/png/25.png",
    "assets/images/png/26.png",
    "assets/images/png/27.png",
    "assets/images/png/28.png",
    "assets/images/png/29.png",
    "assets/images/png/30.png",
    "assets/images/png/31.png",
    "assets/images/png/32.png",
    "assets/images/png/33.png",
    "assets/images/png/34.png",
    "assets/images/png/35.png",
    "assets/images/png/36.png",
    "assets/images/png/37.png",
    "assets/images/png/38.png",
    "assets/images/png/39.png",
    "assets/images/png/40.png",
    "assets/images/png/41.png",
    "assets/images/png/42.png",
    "assets/images/png/43.png",
    "assets/images/png/44.png",
    "assets/images/png/45.png",
    "assets/images/png/46.png",
    "assets/images/png/47.png",
    "assets/images/png/48.png",
    "assets/images/png/49.png",
    "assets/images/png/50.png",
    "assets/images/png/51.png",
    "assets/images/png/52.png",
    "assets/images/png/53.png",
    "assets/images/png/54.png",
    "assets/images/png/55.png",
    "assets/images/png/56.png",
    "assets/images/png/57.png",
    "assets/images/png/58.png",
    "assets/images/png/59.png",
    "assets/images/png/60.png",
    "assets/images/png/61.png",
    "assets/images/png/62.png",
    "assets/images/png/63.png",
    "assets/images/png/64.png",
    "assets/images/png/65.png",
    "assets/images/png/66.png",
    "assets/images/png/67.png",
    "assets/images/png/68.png",
    "assets/images/png/69.png",
    "assets/images/png/70.png",
    "assets/images/png/71.png",
    "assets/images/png/72.png",
    "assets/images/png/73.png",
    "assets/images/png/74.png",
    "assets/images/png/75.png",
    "assets/images/png/76.png",
    "assets/images/png/77.png",
    "assets/images/png/78.png",
    "assets/images/png/79.png"
	];

$("body").click(function(e) {
	var random_number = Math.ceil(Math.ceil(Math.random() * (photos.length - 1))),
		photo_to_use  = photos[random_number],
        xcoord = e.pageX,
        ycoord = e.pageY,
		img_tag = '<img class="dropped" style="top: ' + (ycoord-200) + 'px; left:' + (xcoord-200) + 'px" src="' + photo_to_use + '" />';

	$("body").append(img_tag);
});

$("header").mouseover(function(e) {
    window.x = e.pageX;
    window.y = e.pageY;
    $("#image").hide();
});

$("header").mouseout(function(){
  $("#image").show();
});

// Refresh
window.parent.location = "http://a.parsons.edu/~kims568/studio/dice/index.html#";

// Print
function myFunction() {
    window.print();
}

// $(function(){
//     $("a.click").click(function(){
//         $("embed").remove();
//         $("body").append('<embed src="click.wav" autostart="true" hidden="true" loop="false">');
//     });

//     $('a.hover').mouseover(function(){
//         $("embed").remove();
//         $("body").append('<embed src="hover.wav" autostart="true" hidden="true" loop="false">');
//     });
// }); 

// $(function('hide gif')){
//     $("#menu").mouseover(function(){
//     $("a.hover").remove("#image");
//     }
// });

// $("#menu").mouseover(function(e){
//     if (hover) {
//         $("#image").css({display: none});
//     // }
//     // else {
//     //     $("#menu").css({left:(e.pageX -125), top:(e.pageY-125)});
//     //     $("a.hover").remove("#image")
//     // }
// });

// $(header).mouseover(function(e)){
//     if (hover) {

//     }
// }
