/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'customCSS': '<link rel=\"stylesheet\" type=\"text/css\" href=\"css/custom.css\" />',
            'Didot_Regular, serif': '<link rel=\"stylesheet\" href=\"fonts/fonts.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\" />'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            "https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js",
            "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js",
            "https://cdnjs.cloudflare.com/ajax/libs/three.js/r71/three.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'logo',
                            type: 'image',
                            rect: ['5px', '200px', '290px', '44px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"LOGO_EA_w.svg",'0px','0px'],
                            boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0)"],
                            transform: [[],[],[],['0.85','0.85']]
                        },
                        {
                            id: 'container02',
                            type: 'rect',
                            rect: ['0px', '0px', '298px', '598px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgba(255,0,0,0.00)","solid"],
                            userClass: "particle"
                        },
                        {
                            id: 'bg_dk',
                            type: 'image',
                            rect: ['0', '0', '300px', '600px', 'auto', 'auto'],
                            opacity: '0.5',
                            fill: ["rgba(0,0,0,0)",im+"bg_dk.jpg",'0px','0px'],
                            transform: [[],[],[],['1.25','1.25']]
                        },
                        {
                            id: 'image',
                            type: 'image',
                            rect: ['-25px', '-50px', '350px', '700px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"image.jpg",'0px','0px'],
                            transform: [[],[],[],['0.875','0.875']]
                        },
                        {
                            id: 'bg',
                            type: 'image',
                            rect: ['0', '0', '300px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bg.jpg",'0px','0px'],
                            transform: [[],[],[],['1.25','1.25']]
                        },
                        {
                            id: 'bg_lt',
                            type: 'image',
                            rect: ['0', '0', '300px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bg_lt.jpg",'0px','0px'],
                            transform: [[],[],[],['1.25','1.25']]
                        },
                        {
                            id: 'container01',
                            type: 'rect',
                            rect: ['0px', '0px', '298px', '598px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgba(255,0,0,0.00)","solid"],
                            userClass: "particle"
                        },
                        {
                            id: 'bottle',
                            type: 'image',
                            rect: ['65px', '0px', '170px', '445px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bottle.png",'0px','0px']
                        },
                        {
                            id: 'bottle_lt',
                            type: 'image',
                            rect: ['65px', '0px', '170px', '445px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bottle_lt.png",'0px','0px']
                        },
                        {
                            id: 'copy01',
                            type: 'text',
                            rect: ['0px', '20px', '300px', '30px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Light up the town</p>",
                            align: "center",
                            font: ['Didot_Regular, serif', [25, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["", "", "20px", "", ""]
                        },
                        {
                            id: 'copy02',
                            type: 'text',
                            rect: ['0px', '520px', '300px', '30px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">The daring new fragrance</p>",
                            align: "center",
                            font: ['Didot_Regular, serif', [14, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["", "", "20px", "", ""]
                        },
                        {
                            id: 'logo_red_r',
                            type: 'group',
                            rect: ['40px', '230px', '220px', '143px', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.75','0.75']],
                            c: [
                            {
                                id: 'logo_red_ds_r',
                                type: 'image',
                                rect: ['-40px', '-55px', '300px', '250px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"logo_red_ds_r.png",'0px','0px']
                            },
                            {
                                id: 'logo_red_ds_w',
                                type: 'image',
                                rect: ['-40px', '-55px', '300px', '250px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"logo_red_ds_w.png",'0px','0px']
                            },
                            {
                                id: 'logo_red_ds_k',
                                type: 'image',
                                rect: ['-40px', '-55px', '300px', '250px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"logo_red_ds_k.png",'0px','0px']
                            },
                            {
                                id: 'LOGO_RED_always_r',
                                type: 'image',
                                rect: ['0px', '0px', '220px', '143px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"LOGO_RED_always_r.svg",'0px','0px']
                            },
                            {
                                id: 'LOGO_RED_red_r',
                                type: 'image',
                                rect: ['0px', '0px', '220px', '143px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"LOGO_RED_red_r.svg",'0px','0px']
                            },
                            {
                                id: 'LOGO_RED_ea_w',
                                type: 'image',
                                rect: ['0px', '0px', '220px', '143px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"LOGO_RED_ea_w.svg",'0px','0px']
                            }]
                        },
                        {
                            id: 'cta',
                            type: 'image',
                            rect: ['105px', '560px', '90px', '15px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"cta_shop.svg",'0px','0px']
                        },
                        {
                            id: 'border',
                            type: 'rect',
                            rect: ['0px', '0', '298', '598px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [1,"rgba(0,0,0,0.00)","solid"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '300', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(228,31,13,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("CR_18951_ALWAYS_RED_DIGITAL_PLAN_1H15_300x600_edgeActions.js");
})("EA_AR_18951");
