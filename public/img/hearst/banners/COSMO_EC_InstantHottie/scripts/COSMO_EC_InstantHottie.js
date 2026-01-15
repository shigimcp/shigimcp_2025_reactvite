// #region ==================== FUNCTION init() ====================

gsap.registerPlugin(CSSRulePlugin);

var clickTagBGRule = CSSRulePlugin.getRule('html .bannerContainer .clickTag');
var clickTagBeforeRule = CSSRulePlugin.getRule('html .bannerContainer .clickTag:before');


function init() {

    // // console.log('');
    // console.log('==========================================================');
    // console.log('==================== FUNCTION: init() ====================');
    // console.log('==========================================================');

    // console.log('');
    // console.log('clickTagBGRule = ' + clickTagBGRule);
    // console.log(clickTagBGRule);

    // console.log('');
    // console.log('clickTagBeforeRule = ' + clickTagBeforeRule);
    // console.log(clickTagBeforeRule);


    initTimelines();
    initEventListeners();
}

// #endregion ==================== FUNCTION init() ====================


// * * * * * * * * * * EVENTLISTENERS * * * * * * * * * *

// #region ==================== EVENTLISTENERS ====================

function initEventListeners() {

    // #region -------------------- EVENTLISTENER: clickTag --------------------

    $('#clickTagID').click(function (e) {

        // console.log('');
        // console.log('-------------------- EVENTLISTENER: clickTag --------------------');

        // gsap.set([clickTagID], { autoAlpha: 0 });

        gsap.set([clickTagBGRule], { cssRule:{ backgroundImage: 'none' } }, 'frame05 +=0')
        gsap.set([clickTagBeforeRule], { cssRule:{ backgroundColor: 'rgba(255, 255, 255, 0)' } }, 'frame05 +=0')
        gsap.set([btnPlayID], { autoAlpha: 0 }, 'frame05 +=0')

        // gsap.set([clickTagID], { autoAlpha: 1 }, 'frame05 +=0')


        // $('#soundtrack01ID').stop();
        killAllAudio();

        $('#soundtrack01ID').trigger('play');
        tl.play(0);

        // $('.soundtrack').prop('volume', 0.1);
    });

    // #endregion -------------------- EVENTLISTENER: clickTag --------------------


    // #region -------------------- EVENTLISTENER: btn_audioToggle --------------------

    let isAudioPlaying = true;

    $('#btn_audioToggleID').click(function () {

        // console.log('');
        // console.log('-------------------- EVENTLISTENER: btn_audioToggle --------------------');

        if (isAudioPlaying) {

            // $('.soundtrack').prop('volume', 0.1);
            $('.soundtrack').prop('volume', 0);

            $('#btn_audioToggleOffID').attr('class', 'btn_audioToggleOn');

        } else {

            $('.soundtrack').prop('volume', 1);

            $('#btn_audioToggleOffID').attr('class', 'btn_audioToggleOff');
        }

        isAudioPlaying = !isAudioPlaying;
    });

    // #endregion -------------------- EVENTLISTENER: btn_audioToggle --------------------
}

// #endregion ==================== EVENTLISTENERS ====================


// * * * * * * * * * * FUNCTIONS (GENERAL) * * * * * * * * * *

// #region ==================== FUNCTIONS (GENERAL) ====================

// #region -------------------- FUNCTION (GENERAL) - AUDIO: audio.stop() - via Audio.prototype.stop / killAllAudio() --------------------

Audio.prototype.stop = function () {
    this.pause();
    this.currentTime = 0;
};

function killAllAudio() {

    // let audioList = document.querySelectorAll('audio');
    let audioList = $('audio');
    let i = audioList.length;

    while (i--) {
        audioList[i].stop();
    }
};

// #endregion -------------------- FUNCTION (GLOBAL) - AUDIO: audio.stop() - via Audio.prototype.stop / killAllAudio() --------------------

// #endregion ==================== FUNCTIONS (GENERAL) ====================


// * * * * * * * * * * FUNCTIONS (TIMELINES) * * * * * * * * * *

// #region ==================== FUNCTIONS (TIMELINES) ====================

// #region -------------------- FUNCTION (TIMELINES): playTL(thisTL) --------------------

function playTL(thisTL) {

    // // console.log('');
    // console.log('');
    // console.log('==============================================================================');
    // console.log('==================== FUNCTION (TIMELINES): playTL(thisTL) ====================');
    // console.log('==============================================================================');

    // console.log('thisTL = ' + thisTL);
    // console.log('thisDir = ' + thisDir);

    thisTL.play();
    // thisTL.thisDir();
}

// #endregion -------------------- FUNCTION (TIMELINES): playTL(thisTL) --------------------


// #region -------------------- FUNCTION (TIMELINES): initTimelines() --------------------

const tl = gsap.timeline({ delay: 0, paused: true });


function initTimelines() {

    // console.log('');
    // console.log('===============================================================================');
    // console.log('==================== FUNCTION (TIMELINES): initTimelines() ====================');
    // console.log('===============================================================================');

    // console.log('');
    // console.log('tl = ' + tl);
    // console.log(tl);


    // // var clickTagRule = CSSRulePlugin.getRule('.clickTag');
    // var clickTagRule = CSSRulePlugin.getRule('.clickTag:before');

    // #region ==================== INITIALIZE OBJECTS ====================

    // #region -------------------- AUTOALPHA --------------------

    // gsap.set([
    //     clickTagID, 
    //     btn_audioToggleID,

    //     poolboyID,
    //     bgID,

    //     copy01ID,
    //     copy02ID,
    //     copy03ID,
    //     copy04ID,

    //     logo_cosmoSVGID,
    //     logo_bachelorsSVGID,

    //     url_cosmoBachelorsID, 

    // ], { autoAlpha: 0 });

    // gsap.set([poolboyID], { x: 110, y: -80, scale: 2 });
    // gsap.set([poolboyID], { x: 140, y: 15, scale: 2 });
    // gsap.set([poolboyID], { x: 0, y: 0, scale: 1 });

    // gsap.set([bgID], { x: 225, y: 180, scale: 2 });
    // gsap.set([bgID], { x: 0, y: 70, scale: 2 });
    // gsap.set([bgID], { x: 0, y: 0, scale: 1 });

    // #endregion -------------------- AUTOALPHA --------------------


    // #region -------------------- SET TRANSFORM ORIGiNS / willChange --------------------

    gsap.set([rippleMaskEllipseID], { transformOrigin: '50% 50%', immediateRender: true });

    gsap.set([poolboyID, bgID], { willChange: 'transform', immediateRender: true });
    gsap.set([feTurbulenceID, rippleMaskEllipseID], { willChange: 'transform', immediateRender: true });
    gsap.set([logo_cosmoSVGID, logo_bachelorsSVGID], { willChange: 'transform', immediateRender: true });

    // #endregion -------------------- SET TRANSFORM ORIGiNS / willChange --------------------


    // #region -------------------- OTHER INIT STATES --------------------

    gsap.set([rippleSVGID], { scaleX: -1 });

    // #endregion -------------------- OTHER INIT STATES --------------------

    // #endregion ==================== INITIALIZE OBJECTS ====================


    // #region ==================== TIMELINE: tl ====================

    tl

        // #region -------------------- FRAME 01 --------------------

        .fromTo([poolboyID], { x: 110, y: -80, scale: 2 }, { x: 140, y: 15, ease: 'none', duration: 3.25 }, 'frame01 +=0')
        .fromTo([bgID], { x: 225, y: 180, scale: 2 }, { x: 0, y: 70, ease: 'none', duration: 3.25 }, 'frame01 +=0')

        // #endregion -------------------- FRAME 01 --------------------


        // #region -------------------- FRAME 02 --------------------

        .to([poolboyID, bgID], { x: 0, y: 0, scale: 1, ease: 'none', duration: 0.5 }, 'frame02 +=0')

        // #endregion -------------------- FRAME 02 --------------------


        // #region -------------------- FRAME 03 --------------------

        .from(['.copy'], { x: -100, autoAlpha: 0, ease: 'expo.out', stagger: 0.3125 }, 'frame03 +=0.25')
        .from([copy04ID], { y: -100, autoAlpha: 0, ease: 'back.out(1)', duration: 0.3125 }, 'frame03 +=2.25')

        .fromTo([feTurbulenceID], { attr: {baseFrequency: '0.0125 0.05'} }, { attr: {baseFrequency: '0 0'}, ease: 'expo.out', duration: 3.75 }, 'frame03 +=2.375')
        .fromTo([rippleMaskEllipseID], { scale: 0 }, { scale: 6.25, ease: 'expo.out', duration: 1 }, 'frame03 +=2.375')
        .fromTo([rippleMaskEllipseID], { autoAlpha: 1 }, { autoAlpha: 0, ease: 'expo.out', duration: 3.75 }, 'frame03 +=2.625')

        // #endregion -------------------- FRAME 03 --------------------


        // #region -------------------- FRAME 04 --------------------

        .from([logo_cosmoSVGID], { y: 100, autoAlpha: 0, ease: 'expo.out', duration: 1.75 }, 'frame04 -=3.625')
        .from([logo_bachelorsSVGID], { x: -100, autoAlpha: 0, ease: 'expo.out', duration: 1.5 }, 'frame04 -=3.25')

        // #endregion -------------------- FRAME 04 --------------------


        // #region -------------------- FRAME 05 --------------------

        // .set([clickTagBGRule], { cssRule:{ backgroundImage: 'none' } }, 'frame05 +=0')
        // .set([clickTagBeforeRule], { cssRule:{ backgroundColor: 'rgba(255, 255, 255, 0)' } }, 'frame05 +=0')
        // .set([btnPlayID], { autoAlpha: 0 }, 'frame05 +=0')

        // .set([clickTagID], { autoAlpha: 1 }, 'frame05 +=0')

        // #endregion -------------------- FRAME 05 --------------------
    ;

    // tl.duration(6.75);

    // console.log('');
    console.log('tl timing = ' + tl.duration() + ' secs');

    // #endregion ==================== TIMELINE: tl ====================
}

// #endregion -------------------- FUNCTION (TIMELINES): initTimelines() --------------------

// #endregion ==================== FUNCTIONS (TIMELINES) ====================
