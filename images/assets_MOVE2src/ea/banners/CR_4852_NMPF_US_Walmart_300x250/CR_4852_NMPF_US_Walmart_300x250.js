(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bg_ko = function() {
	this.initialize(img.bg_ko);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,70);


(lib.btn_buy = function() {
	this.initialize(img.btn_buy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,25);


(lib.image = function() {
	this.initialize(img.image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,225);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,50);


(lib.sparkle = function() {
	this.initialize(img.sparkle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,45);


(lib.starspin_mask = function() {
	this.initialize(img.starspin_mask);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,400);


(lib.tag = function() {
	this.initialize(img.tag);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,15);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mc_tag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.tag();
	this.instance.setTransform(-60,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_tag, rect = new cjs.Rectangle(-60,0,120,15), [rect]);


(lib.mc_starburst = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// starspin01
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAAMAgfCY2IwKCjgEggeiY0IQKikMAQUCbYg");
	this.shape.setTransform(-0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAABMA/jCOvIvRF3gEg/iiOuIPRl4MAwRCUng");
	this.shape_1.setTransform(-0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAAgBMBb2B+bItuI6gEhb1h+ZINuo6MBOHCHSg");
	this.shape_2.setTransform(-0.025,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAAMB0HBojIrkLkgEh0GhoiILkrkMBoiB0Gg");
	this.shape_3.setTransform(-0.025,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AABABMCHTBOHIo6NugEiHThOHII6tuMB+aBb2g");
	this.shape_4.setTransform(-0.025,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAAAMCUnAwSIl4PRgEiUmgwRIF4vRMCOuA/ig");
	this.shape_5.setTransform(-0.025,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAAMCbZAQVIikQKgEibYgQUICkwKMCY0Ageg");
	this.shape_6.setTransform(-0.025,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EicPAAAMCcPAAAMibYAQVgAAAAAMCbZgQUIA3QUgAAAAAg");
	this.shape_7.setTransform(0,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EiY0AgfMCY0ggfMCUngwRIEOPzMiY1AgeMiUmAwSg");
	this.shape_8.setTransform(-0.025,0.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EiOuA/jMCOwg/jMCHShOHIHbOkMiOtA/jMiHVBOIg");
	this.shape_9.setTransform(-0.025,0.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Eh+ZBb2MB+Zhb2MB0HhoiIKTMtMh+aBb1Mh0GBojg");
	this.shape_10.setTransform(-0.025,0.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EhoiB0HMBoih0HMBb2h+ZIMtKTMhojB0GMhb1B+ag");
	this.shape_11.setTransform(-0.025,0.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EhOHCHUMBOHiHSMA/jiOwIOlHbMhOICHVMg/iCOtg");
	this.shape_12.setTransform(0,0.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EgwRCUnMAwRiUnMAgfiY0IPzEOMgwSCUmMggeCY1g");
	this.shape_13.setTransform(-0.025,0.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EgQUCbaMAQUibZMAAACcPgEAAAicPIQVA3MgQVCbZg");
	this.shape_14.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_starburst, rect = new cjs.Rectangle(-1000,-1000,2000,2000), [rect]);


(lib.MC_sparkle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sparkle.png copy
	this.instance = new lib.sparkle();
	this.instance.setTransform(-20.5,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// sparkle.png
	this.instance_1 = new lib.sparkle();
	this.instance_1.setTransform(-20.5,-17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MC_sparkle, rect = new cjs.Rectangle(-20.5,-17.5,45,45), [rect]);


(lib.mc_nicki = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// IMAGE
	this.instance = new lib.image();
	this.instance.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_nicki, rect = new cjs.Rectangle(-50,-100,200,400), [rect]);


(lib.mc_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.logo();
	this.instance.setTransform(-83,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_logo, rect = new cjs.Rectangle(-83,0,165,50), [rect]);


(lib.mc_crosshairs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AAAAAIAAD6AD6AAIj6AAAAAj5IAAD5Ij5AA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_crosshairs, rect = new cjs.Rectangle(-26,-26,52,52), [rect]);


(lib.mc_bottle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.bottle();
	this.instance.setTransform(-17.5,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bottle, rect = new cjs.Rectangle(-17.5,-1,35,70), [rect]);


(lib.mc_bg_ko = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg_ko();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bg_ko, rect = new cjs.Rectangle(-150,-125,300,250), [rect]);


(lib.mc_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_bg, rect = new cjs.Rectangle(0,0,300,250), [rect]);


(lib.btn_shop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 4
	this.instance = new lib.btn_buy();
	this.instance.setTransform(-37,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-37,0,74,25);
p.frameBounds = [rect, rect, rect, rect];


(lib._null = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mc_crosshairs
	this.mc_crosshairs = new lib.mc_crosshairs();
	this.mc_crosshairs.name = "mc_crosshairs";
	this.mc_crosshairs.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_crosshairs).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._null, rect = new cjs.Rectangle(-25.5,-25.5,51,51), [rect]);


(lib.mc_starspin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mc_starburst02
	this.mc_starburst02 = new lib.mc_starburst();
	this.mc_starburst02.name = "mc_starburst02";
	this.mc_starburst02.setTransform(1000,1000);

	this.timeline.addTween(cjs.Tween.get(this.mc_starburst02).wait(1));

	// mc_starburst01
	this.mc_starburst01 = new lib.mc_starburst();
	this.mc_starburst01.name = "mc_starburst01";
	this.mc_starburst01.setTransform(1000,1000);

	this.timeline.addTween(cjs.Tween.get(this.mc_starburst01).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_starspin, rect = new cjs.Rectangle(0,0,2000,2000), [rect]);


(lib.mc_image = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mc_nicki
	this.mc_nicki = new lib.mc_nicki();
	this.mc_nicki.name = "mc_nicki";
	this.mc_nicki.setTransform(-50,-100);

	this.timeline.addTween(cjs.Tween.get(this.mc_nicki).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mc_image, rect = new cjs.Rectangle(-49,-99,90,225), [rect]);


// stage content:
(lib.CR_4852_NMPF_US_Walmart_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {scriptFrame:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		//gotoAndPlay("scriptFrame");
	}
	this.frame_1 = function() {
		"use strict";
		
		
		//===================================================
		//==================== FUNCTIONS ====================
		//===================================================
		
		//-------------------- FUNCTION: consoleLog(message) --------------------
		
		function consoleLog(message) {
			// alert(message);
			// trace(message);
			console.log(message);
		}
		
		
		//-------------------- PARTICLE SYSTEM (REF: https://codepen.io/jamiejefferson/pen/rJtjw, particle01c.js) --------------------
		
		//thisEmitter.alpha = 0;
		
		//var thisEmitterSize = 100;
		var dotPool = [];
		var dotIndex = 0;
		var dotQuantity = 200;
		//var dotSizeMax = 30;
		//var dotSizeMin = 10;
		//var speed = 0.5;
		//var gravity = -1;
		//var speed = (100 + Math.random() * 250) * 0.625;
		//var gravity = -250;
		var speed = 0.25;
		var gravity = -200;
		
		
		function placeDots() {
		
			// console.log("PING!!!! FUNCTION: placeDots() triggered!");
		
			for (var i = dotQuantity - 1; i >= 0; i--) {
			// for (var i = dotQuantity - 1; i >= 1; i--) {
		
				var dot = new lib.MC_sparkle();
				thisEmitter.addChild(dot);
		
				TweenLite.set(dot, {scaleX:0.25, scaleY:0.25});
		
				dotPool[i] = dot;
			}
		}
		
		var explosion = new TimelineMax({repeat: -1})
		//var explosion = new TimelineMax({paused:true, repeat: -1})
			.call(shootDot, [thisEmitter], null, 2/dotQuantity)
		//	.call(shootDot, [thisEmitter], 2/dotQuantity)
		//	.call(shootDot, [thisEmitter], dot, 2/dotQuantity)
		;
		
		
		function shootDot(thisEmitter) {
		
			var angle = Math.random() * Math.PI*2;
			var dot = dotPool[dotIndex++];
			var thisScale = getRandom(0.5, 1.5);
		
			console.log("dotPool.length = " + dotPool.length);
			//console.log("thisScale = " + thisScale);
			console.log("dot = " + dot);
			console.log(dot);
		
		//	TweenLite.set(dot, {scaleX:0.25, scaleY:0.25});
		
		//	TweenLite.to(dot, 1 + Math.random(), {
			TweenLite.to(dot, speed + Math.random(), {
				alpha: 0,
		
				scaleX: thisScale,
				scaleY: thisScale,
		
				physics2D: {
					angle: angle * 180 / Math.PI, 				//translate radians to degrees
		//			angle: angle * 90 / Math.PI, 					//translate radians to degrees
		//			velocity: (100 + Math.random() * 250) * speed, 	//initial velocity
					velocity: (50 + Math.random() * 500) * speed, 	//initial velocity
		//			gravity: 500 * gravity 						//you could increase/decrease this to give gravity more or less pull
		//			velocity: speed,
					gravity: gravity
				}
		
				//if you'd rather not do physics, you could just animate out directly by using the following 2 lines instead of the physics2D:
				//x:Math.cos(angle) * length * 6, 
				//y:Math.sin(angle) * length * 6
		
			}, 0);
		}
		
		
		function getRandom(min, max) {
			return min + Math.random() * (max - min);
		}
		
		
		
		
		//===================================================
		//==================== ANIMATION ====================
		//===================================================
		
		var staggerDuration = 0.125;
		var staggerDelay = 0.0375;
		
		var animDuration00 = 0.125;
		var animDuration01 = 0.5;
		var animDuration02 = 1;
		var animDuration03 = 1.5;
		var animDuration04 = 2;
		var animDuration05 = 2.5;
		var animDuration06 = 3;
		var animDuration07 = 3.5;
		var animDuration08 = 4;
		var animDuration09 = 4.5;
		var animDuration10 = 5;
		
		
		//=================================================
		//==================== OBJECTS ====================
		//=================================================
		
		var thisEmitter = this.emitter;
		
		var starspin = this.mc_starspin;
		var starspinArray = this.mc_starspin.children;
		
		//console.log("starspinArray = " + starspinArray + "     starspinArray.length = " + starspinArray.length + "     starspinArray[0] = " + starspinArray[0]);
		
		var logo = this.mc_logo;
		var image = this.mc_image;
		var bottle = this.mc_bottle;
		var tag = this.mc_tag;
		var shop = this.btn_shop;
		
		
		
		
		//=======================================================
		//==================== MAIN TIMELINE ====================
		//=======================================================
		
		//var tl = new TimelineLite({delay:2.5, repeat:3, repeatDelay:2});
		//var tl = new TimelineLite({delay:.25});
		//var tl = new TimelineLite({delay:0.25});
		//var tl = new TimelineMax({delay:0});
		var tl = new TimelineMax({delay:0.25});
		
		tl
		
		
		//==================== FRAME 01 ====================
		
			.call(consoleLog, ["FRAME 01 BEGIN!!!"], "frame01")
		
			.call(placeDots, [], "frame01 +=0")
		
			// .add(explosion, 0)
		
			.fromTo([starspin], animDuration03, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame01 +=0")
			.set(starspinArray, {alpha:0.25}, "frame01 +=0")
			// .staggerTo(starspinArray, animDuration06, {cycle:{rotation:["35", "-35"]}, ease:Power0.easeNone, delay:0.5}, "frame01 +=0")
			.staggerTo(starspinArray, animDuration06, {cycle:{rotation:["20", "-20"]}, ease:Power0.easeNone, delay:0.5}, "frame01 +=0")
		
			.fromTo([image], animDuration02, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame01 +=1.25")
			.fromTo([logo], animDuration02, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame01 +=1.5")
		
			.add(explosion, "frame01 +=2.5")
		
			.fromTo([bottle], animDuration01, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame01 +=2.5")
			.fromTo([tag], animDuration01, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame01 +=2.75")
		
			.to([starspin], animDuration03, {alpha:0}, "frame01 +=3")
		
			.fromTo([shop], animDuration02, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame01 +=3.5")
		
			.call(consoleLog, ["FRAME 01 END!!!"], "frame01 +=3.5")
		
		
		//==================== FRAME 02 ====================
		
			// .call(consoleLog, ["FRAME 02 BEGIN!!!"], "frame02")
		
			// .fromTo([image], animDuration02, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame02 +=0")
			// .fromTo([logo], animDuration02, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame02 +=0.25")
		
			// .fromTo([bottle], animDuration02, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame02 +=1")
			// .fromTo([tag], animDuration02, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame02 +=1.25")
			// .fromTo([shop], animDuration02, {alpha:0}, {alpha:1, ease:Power3.easeOut}, "frame02 +=1.75")
		
			// .call(consoleLog, ["FRAME 02 END!!!"], "frame02 +=2")
		;
		
		
		
		
		
		//tl.duration(1.5);
		
		console.log("timing = " + tl.duration() + " secs");
		
		
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// btn_shop
	this.btn_shop = new lib.btn_shop("synched",0);
	this.btn_shop.name = "btn_shop";
	this.btn_shop.setTransform(50,218);
	this.btn_shop.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.btn_shop).wait(2));

	// mc_logo
	this.mc_logo = new lib.mc_logo();
	this.mc_logo.name = "mc_logo";
	this.mc_logo.setTransform(150.1,9.2,1,1,0,0,0,0.1,-0.8);
	this.mc_logo.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_logo).wait(2));

	// mc_tag
	this.mc_tag = new lib.mc_tag();
	this.mc_tag.name = "mc_tag";
	this.mc_tag.setTransform(150,237.5,1,1,0,0,0,0,5);
	this.mc_tag.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_tag).wait(2));

	// mc_bottle
	this.mc_bottle = new lib.mc_bottle();
	this.mc_bottle.name = "mc_bottle";
	this.mc_bottle.setTransform(312.5,272.5,1,1,0,0,0,95,92.5);
	this.mc_bottle.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_bottle).wait(2));

	// mc_image
	this.mc_image = new lib.mc_image();
	this.mc_image.name = "mc_image";
	this.mc_image.setTransform(150,125);
	this.mc_image.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_image).wait(2));

	// particle system
	this.destination = new lib._null();
	this.destination.name = "destination";
	this.destination.setTransform(150,-25);

	this.emitter = new lib._null();
	this.emitter.name = "emitter";
	this.emitter.setTransform(150,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.emitter},{t:this.destination}]}).wait(2));

	// mc_bg_ko
	this.mc_bg_ko = new lib.mc_bg_ko();
	this.mc_bg_ko.name = "mc_bg_ko";
	this.mc_bg_ko.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.mc_bg_ko).wait(2));

	// mc_starspin
	this.mc_starspin = new lib.mc_starspin();
	this.mc_starspin.name = "mc_starspin";
	this.mc_starspin.setTransform(-72.5,-89.95,0.2225,0.24,0,0,0,0,0.2);
	this.mc_starspin.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_starspin).wait(2));

	// mc_bg
	this.mc_bg = new lib.mc_bg();
	this.mc_bg.name = "mc_bg";
	this.mc_bg.setTransform(80,300,1,1,0,0,0,80,300);

	this.timeline.addTween(cjs.Tween.get(this.mc_bg).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(77.5,35,445,480);
p.frameBounds = [rect, rect];
// library properties:
lib.properties = {
	id: '60E6F545D9858144BEBBA7AAC67DD68E',
	width: 300,
	height: 250,
	fps: 30,
	color: "#DE8FA1",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1771978071224", id:"bg"},
		{src:"images/bg_ko.png?1771978071224", id:"bg_ko"},
		{src:"images/bottle.png?1771978071224", id:"bottle"},
		{src:"images/btn_buy.png?1771978071224", id:"btn_buy"},
		{src:"images/image.png?1771978071224", id:"image"},
		{src:"images/logo.png?1771978071224", id:"logo"},
		{src:"images/sparkle.png?1771978071224", id:"sparkle"},
		{src:"images/starspin_mask.png?1771978071224", id:"starspin_mask"},
		{src:"images/tag.png?1771978071224", id:"tag"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['60E6F545D9858144BEBBA7AAC67DD68E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;