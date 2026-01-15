// #region ==================== FUNCTION init() ====================

gsap.registerPlugin(CSSRulePlugin);

var clickTagBGRule = CSSRulePlugin.getRule('html .bannerContainer .clickTag');
var clickTagBeforeRule = CSSRulePlugin.getRule('html .bannerContainer .clickTag:before');


function init() {

    initTimelines();
    initEventListeners();
}

// #endregion ==================== FUNCTION init() ====================



// #region ==================== EVENTLISTENERS ====================

function initEventListeners() {

    // #region -------------------- EVENTLISTENER: clickTag --------------------

    $('#clickTagID').click(function (e) {

        gsap.set([clickTagBGRule], { cssRule:{ backgroundImage: 'none' } })
        gsap.set([clickTagBeforeRule], { cssRule:{ backgroundColor: 'rgba(255, 255, 255, 0)' } })
        gsap.set([btnPlayID], { autoAlpha: 0 })


        var highestIntervalId = setTimeout(";");

        for (var i = 0 ; i < highestIntervalId ; i++) {
            clearInterval(i); 
        }

        killAllAudio();

        $('.soundtrack').prop('volume', 1);
        tl.play(0);
    });

    // #endregion -------------------- EVENTLISTENER: clickTag --------------------


    // #region -------------------- EVENTLISTENER: btn_audioToggle --------------------

    let isAudioPlaying = true;

    $('#btn_audioToggleID').click(function () {

        if (isAudioPlaying) {

            $('.soundtrack').prop('volume', 0);

            $('#btn_audioToggleOffID').attr('class', 'btn_audioToggleOn');
            gsap.set([btn_audioToggleID], { autoAlpha: 0.125 });

        } else {

            $('.soundtrack').prop('volume', 1);

            $('#btn_audioToggleOffID').attr('class', 'btn_audioToggleOff');
            gsap.set([btn_audioToggleID], { autoAlpha: 0.25 });
        }

        isAudioPlaying = !isAudioPlaying;
    });

    // #endregion -------------------- EVENTLISTENER: btn_audioToggle --------------------
}

// #endregion ==================== EVENTLISTENERS ====================



// #region ==================== FUNCTIONS (GENERAL) ====================

// #region -------------------- FUNCTION (GENERAL) - AUDIO: audio.stop() - via Audio.prototype.stop / killAllAudio() --------------------

Audio.prototype.stop = function () {
    this.pause();
    this.currentTime = 0;
};

function killAllAudio() {

    let audioList = $('audio');
    let i = audioList.length;

    while (i--) {
        audioList[i].stop();
    }
};

// #endregion -------------------- FUNCTION (GLOBAL) - AUDIO: audio.stop() - via Audio.prototype.stop / killAllAudio() --------------------


// #region -------------------- FUNCTION (GENERAL) - AUDIO: playAudio(thisSound) --------------------

function playAudio(thisSound) {

    killAllAudio();
    $('#' + thisSound.id).trigger('play');
};

// #endregion -------------------- FUNCTION (GLOBAL) - AUDIO: playAudio(thisSound) --------------------


// #region -------------------- FUNCTION (GENERAL) - AUDIO: fadeAllAudio(fadeTime) --------------------

function fadeAllAudio(fadeTime) {

    var i = fadeTime;

    var int = setInterval(function () {

        $('.soundtrack').prop('volume', i/fadeTime);

        i-- || clearInterval(int);
    }, 1);
};

// #endregion -------------------- FUNCTION (GLOBAL) - AUDIO: fadeAllAudio(fadeTime) --------------------


// #region -------------------- FUNCTION (TIMELINES): playTL(thisTL) --------------------

function playTL(thisTL) {

    thisTL.play();
}

// #endregion -------------------- FUNCTION (TIMELINES): playTL(thisTL) --------------------

// #endregion ==================== FUNCTIONS (GENERAL) ====================



// #region ==================== FUNCTION (TIMELINES): initTimelines() ====================

const tl = gsap.timeline({ delay: 0, paused: true });


function initTimelines() {

    // #region -------------------- INITIALIZE OBJECTS --------------------

    // #region - - - - - - - - - - - SET TRANSFORM ORIGiNS - - - - - - - - - - -

    gsap.set(['.costumeImage'], { transformOrigin: '50% 37.5%', immediateRender: true });

    gsap.set([dialogueContainer01ID], { transformOrigin: '0 100%', immediateRender: true });
    gsap.set([dialogueContainer02ID], { transformOrigin: '100% 100%', immediateRender: true });
    gsap.set([dialogueContainer03ID], { transformOrigin: '50% 100%', immediateRender: true });

    // #endregion - - - - - - - - - - - SET TRANSFORM ORIGiNS - - - - - - - - - - -


    // #region - - - - - - - - - - - OBJECT INITs - - - - - - - - - - -

    gsap.set(['.dollImage'], { autoAlpha: 0 });
    gsap.set(['.costume'], {autoAlpha: 0 });
    gsap.set(['.dialogueContainer'], {autoAlpha: 0 });

    gsap.set([dialogueBubbleSVG02ID], { scaleX: -1 });

    // #endregion - - - - - - - - - - - OBJECT INITs - - - - - - - - - - -

    // #endregion -------------------- INITIALIZE OBJECTS --------------------


    tl

        // #region -------------------- FRAME 01 --------------------

        .set([doll01aImageID, doll02aImageID], { autoAlpha: 1 }, 'frame01 +=0')


        .call(playAudio, $('#soundtrack01ID'), 'frame01 +=0')

        .fromTo([doll01SVGID], { x: 450, y: 12.5, autoAlpha: 1 }, { x: 85, ease: 'expo.out', duration: 1 }, 'frame01 +=0')

        .fromTo([doll02SVGID], { x: -240, y: 17.5, autoAlpha: 1 }, { x: -45, ease: 'expo.out', duration: 0.75 }, 'frame01 +=0.5')

        .fromTo([dialogueContainer01ID], { x: 200, y: 17.5, scale: 0.75, autoAlpha: 0 }, { x: 220, y: 7.5, scale: 1, autoAlpha: 1, ease: 'back.out(1.5)', duration: 0.375 }, 'frame01 +=1.5')

        // #endregion -------------------- FRAME 01 --------------------


        // #region -------------------- FRAME 02 --------------------

        .to([dialogueContainer01ID], { x: 200, y: 17.5, scale: 0.75, autoAlpha: 0, ease: 'back.out(1.5)', duration: 0.5 }, 'frame02 +=1')


        .set(['.dollImage'], { autoAlpha: 0 }, 'frame02 +=1')
        .set([doll01aImageID, doll02aImageID], { autoAlpha: 1 }, 'frame02 +=1')


        .to([doll01SVGID], { x: 225, ease: 'expo.out', duration: 1 }, 'frame02 +=1')
        .to([doll02SVGID], { x: 95, ease: 'expo.out', duration: 0.75 }, 'frame02 +=1')


        .set(['.dollImage'], { autoAlpha: 0 }, 'frame02 +=2.375')
        .set([doll01aImageID, doll02bImageID], { autoAlpha: 1 }, 'frame02 +=2.375')

        .fromTo([dialogueContainer02ID], { x: 27.5, y: 17.5, scale: 0.75, autoAlpha: 0 }, { x: 7.5, y: 7.5, scale: 1, autoAlpha: 1, ease: 'back.out(1.5)', duration: 0.375 }, 'frame02 +=2.375')

        // #endregion -------------------- FRAME 02 --------------------


        // #region -------------------- FRAME 03 --------------------

        .to([dialogueContainer02ID], { x: 27.5, y: 17.5, scale: 0.75, autoAlpha: 0, ease: 'back.out(1.5)', duration: 0.5 }, 'frame03 +=1.25')


        .set(['.dollImage'], { autoAlpha: 0 }, 'frame03 +=1.25')
        .set([doll01aImageID, doll02aImageID], { autoAlpha: 1 }, 'frame03 +=1.25')


        .call(playAudio, $('#soundtrack02ID'), 'frame03 +=1.25')

        .to([doll01SVGID], { x: 185, ease: 'expo.out', duration: 0.5 }, 'frame03 +=1.25')
        .to([doll02SVGID], { x: 5, ease: 'expo.out', duration: 0.5 }, 'frame03 +=1.25')


        .set([costume0101ID], {autoAlpha: 1 }, 'frame03 +=1.5')

        .from(['.costumeImage01'], { x: 'random(100, -100)', y: 'random(100, -100)', rotation: 'random(180, -180)', autoAlpha: 0, ease: 'expo.out', stagger: 0.125 }, 'frame03 +=1.5')

        .set(['.dollImage'], { autoAlpha: 0 }, 'frame03 +=1.625')
        .set([doll01bImageID, doll02aImageID], { autoAlpha: 1 }, 'frame03 +=1.625')

        // #endregion -------------------- FRAME 03 --------------------


        // #region -------------------- FRAME 04 --------------------

        .set(['.dollImage'], { autoAlpha: 0 }, 'frame04 +=0.375')
        .set([doll01bImageID, doll02aImageID], { autoAlpha: 1 }, 'frame04 +=0.375')

        .set([costume0201ID], {autoAlpha: 1 }, 'frame04 +=0.375')


        .from(['.costumeImage02'], { x: 'random(100, -100)', y: 'random(100, -100)', rotation: 'random(180, -180)', autoAlpha: 0, ease: 'expo.out', stagger: 0.125 }, 'frame04 +=0.375')

        .set(['.dollImage'], { autoAlpha: 0 }, 'frame04 +=0.625')
        .set([doll01bImageID, doll02cImageID], { autoAlpha: 1 }, 'frame04 +=0.625')

        // #endregion -------------------- FRAME 04 --------------------


        // #region -------------------- FRAME 05 --------------------

        .set(['.dollImage'], { autoAlpha: 0 }, 'frame05 +=0.25')
        .set([doll01cImageID, doll02cImageID], { autoAlpha: 1 }, 'frame05 +=0.25')

        .set([costume0102ID], {autoAlpha: 1 }, 'frame05 +=0.25')


        .from(['.costumeImage03'], { x: 'random(100, -100)', y: 'random(100, -100)', rotation: 'random(180, -180)', autoAlpha: 0, ease: 'expo.out', stagger: 0.125 }, 'frame05 +=0.25')
        .to(['.costumeImage01'], { x: 'random(100, -100)', y: 'random(100, -100)', rotation: 'random(180, -180)', autoAlpha: 0, ease: 'expo.out', stagger: 0.0625 }, 'frame05 +=0.5')

        // #endregion -------------------- FRAME 05 --------------------


        // #region -------------------- FRAME 06 --------------------

        .set([costume0202ID], {autoAlpha: 1 }, 'frame06 +=0.25')


        .from(['.costumeImage04'], { x: 'random(100, -100)', y: 'random(100, -100)', rotation: 'random(180, -180)', autoAlpha: 0, ease: 'expo.out', stagger: 0.125 }, 'frame06 +=0.25')
        .to(['.costumeImage02'], { x: 'random(100, -100)', y: 'random(100, -100)', rotation: 'random(180, -180)', autoAlpha: 0, ease: 'expo.out', stagger: 0.0625 }, 'frame06 +=0.5')

        // #endregion -------------------- FRAME 06 --------------------


        // #region -------------------- FRAME 07 --------------------

        .set(['.dollImage'], { autoAlpha: 0 }, 'frame07 +=0.25')
        .set([doll01cImageID, doll02cImageID], { autoAlpha: 1 }, 'frame07 +=0.25')

        .set([costume0103ID], {autoAlpha: 1 }, 'frame07 +=0.25')


        .from(['.costumeImage05'], { x: 'random(100, -100)', y: 'random(100, -100)', rotation: 'random(180, -180)', autoAlpha: 0, ease: 'expo.out', stagger: 0.25 }, 'frame07 +=0.25')
        .to(['.costumeImage03'], { x: 'random(100, -100)', y: 'random(100, -100)', rotation: 'random(180, -180)', autoAlpha: 0, ease: 'expo.out', stagger: 0.125 }, 'frame07 +=0.5')

        .set(['.dollImage'], { autoAlpha: 0 }, 'frame07 +=0.5')
        .set([doll01dImageID, doll02cImageID], { autoAlpha: 1 }, 'frame07 +=0.5')

        // #endregion -------------------- FRAME 07 --------------------


        // #region -------------------- FRAME 08 --------------------

        .set(['.dollImage'], { autoAlpha: 0 }, 'frame08 +=1.25')
        .set([doll01aImageID, doll02aImageID], { autoAlpha: 1 }, 'frame08 +=1.25')

        .set(['.costume'], {autoAlpha: 0 }, 'frame08 +=1.25')

        .set([dialogueContainer01ID], { x: 220, y: 7.5, autoAlpha: 1 }, 'frame08 +=1.25')
        .set([dialogueID01], { x: 6.25, y: -2.5, width: 190, text: 'No matter what you decide to wear, you\'ll be so cute!', fontSize: 18.5, lineHeight: 1 }, 'frame08 +=1.25')


        .call(playAudio, $('#soundtrack03ID'), 'frame08 +=1.25')


        .to([doll01SVGID], { x: 85, ease: 'expo.out', duration: 0.5 }, 'frame08 +=1.25')
        .to([doll02SVGID], { x: -45, ease: 'expo.out', duration: 0.5 }, 'frame08 +=1.25')

        .fromTo([dialogueContainer01ID], { x: 200, y: 17.5, scale: 0.75, autoAlpha: 0 }, { x: 220, y: 7.5, scale: 1, autoAlpha: 1, ease: 'back.out(1.5)', duration: 0.375 }, 'frame08 +=1.25')

        // #endregion -------------------- FRAME 08 --------------------


        // #region -------------------- FRAME 09 --------------------

        .to([dialogueContainer01ID], { x: 200, y: 17.5, scale: 0.75, autoAlpha: 0, ease: 'back.out(1.5)', duration: 0.375 }, 'frame09 +=1.25')

        .to([doll01SVGID], { x: 247.5, y: 12.5, duration: 0.375 }, 'frame09 +=1.25')
        .to([doll02SVGID], { x: -65, y: 17.5, duration: 0.375 }, 'frame09 +=1.25')

        .fromTo([dialogueContainer03ID], { x: 7.5, y: 17.5, scale: 0.5, autoAlpha: 0 }, { y: 7.5, scale: 1, autoAlpha: 1, ease: 'back.out(1.5)', duration: 0.375 }, 'frame09 +=1.25')

        .call(fadeAllAudio, [500], 'frame09 +=5')

        // #endregion -------------------- FRAME 09 --------------------
    ;
}

// #endregion ==================== FUNCTION (TIMELINES): initTimelines() ====================
