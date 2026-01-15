"use strict";

// REF: https://greensock.com/forums/topic/12735-displacement_mapping/  ==>  https://codepen.io/osublake/pen/WQyBJb
// Thanks to Michael Mullany for explaining the problems with the other browsers.
// Inlining the base64 was too large, so I just made a function to create and 
// add it to the feImage attribute. A little more code, but it works!


var xlink = "http://www.w3.org/1999/xlink";
// var imgUrl = "../images/displacement_map.png";
var imgUrl = "../CR_4752_UNTOLD_2013_US_DIGITAL/images/displacement_map.png";
var feImage = document.querySelector("feImage");


function toBase64(url, callback) {

    var img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = function () {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");
        canvas.height = this.height;
        canvas.width = this.width;
        ctx.drawImage(this, 0, 0);

        var dataURL = canvas.toDataURL("image/png");
        callback(dataURL);
        canvas = null;
    };

    img.src = url;
}

toBase64(imgUrl, function (data) {
    feImage.setAttributeNS(xlink, "xlink:href", data);
});



var animDuration01 = 1.5;
var animDuration02 = 3;
var animDuration03 = 1;

var tl = new TimelineMax();
// var tl = new TimelineMax({ repeat: -1, repeatDelay: 1 });

tl
    .fromTo(["#bottleClipPathID"], { x: -380, y: -270, scale: 15 }, { x: 188, y: 120, scale: 1, duration: animDuration02, ease: "power3.out" }, 'frame01 +=0')

    .fromTo(["#bottleSVGID", "#bottleMaskID"], { x: -170, y: 30, scale: 15 }, { x: 0, y: 0, scale: 1, duration: animDuration02, ease: "power3.out" }, 'frame01 +=0')
    .fromTo(["#bottleID"], { autoAlpha: 0.5 }, { autoAlpha: 1, duration: animDuration01, ease: "power3.out" }, 'frame01 +=1.5')

    .from("#displacement_map", { attr: { scale: 100 }, duration: animDuration02, ease: "power3.out" }, 'frame01 +=0')
    .fromTo("feImage", { attr: { x: -350, y: -250, width: "300%", height: "300%" } }, { attr: { x: 160, y: 120, width: "80%", height: "80%" }, duration: animDuration02, ease: "power3.out" }, 'frame01 +=0')

    .fromTo(["#ctaID"], { autoAlpha: 0 }, { autoAlpha: 1, duration: animDuration03, ease: "power3.out" }, 'frame01 +=2.5')
;
