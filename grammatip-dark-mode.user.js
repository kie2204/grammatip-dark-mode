// ==UserScript==
// @name         Grammatip DarkMode
// @namespace    https://kie2204.github.io/grammatip-dark-mode
// @version      1.1
// @description  Undgå dårlige øjne med dette smarte UserScript til Grammatip!
// @author       kie2204
// @match        https://www.grammatip.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var palettes = {
        dark: {
            background: "#222",
            border: "#333",
            text: "#ddd",
            darkBlue: "#9EB7C6",
            lightBlue: "#3A536D",
            blue: "#4A90E2"
        }
    }

    var defaultPalette = palettes.dark;

    // Vis tip efter installation
    setTimeout(function(){
    if (localStorage.gdmNoTip != 1) {
        document.body.innerHTML += '<div id="gdmTip" style="position:fixed;right:50%;bottom:20px;background-color:#222;border:1px solid #333;z-index:99999;transform:translate(50%);display:flex;align-items:center;border-radius:200px;"><div style="padding:12px 20px;"><b>DarkMode tip:</b><p style="margin:0">Husk at vælge en mørk baggrund i Temaindstillinger!</p></div><div onclick="localStorage.setItem(\'gdmNoTip\', 1);document.getElementById(\'gdmTip\').style.display = \'none\'" style="background-color:#d77;padding:12px;margin-right:12px;border-radius:200px;cursor:pointer">Forstået!</div></div>'
    }}, 1000)


    // Ændr farve på elementer
    // document.getElementById("main-content").style.backgroundColor = palettes.dark.background;

    var sheet = window.document.styleSheets[0];

    // Smooth transition
    sheet.insertRule('* { transition: background-color 0.25s; color: white; }', sheet.cssRules.length);

    // Baggrund
    sheet.insertRule('#main-content, .header, .nav-tabs > .active > a, .modal, .lp.background, .video-container .video-section, .user-settings-content, select { background-color: '+defaultPalette.background+' !important }', sheet.cssRules.length);

    // Lyseblå
    sheet.insertRule('a { color: '+defaultPalette.lightBlue+' !important }', sheet.cssRules.length);

    // Mørkeblå
    sheet.insertRule('.header-logo a, .header-menu .current, a:hover { color: '+defaultPalette.darkBlue+' !important }', sheet.cssRules.length);

    // Tekst
    sheet.insertRule('body, h1, h2, h3, h4, h5, h6, p, .nav-tabs > .active > a, li, input.dictationTextField, label, form#exercise-form .punctuation-place, select { color: '+defaultPalette.text+' !important }', sheet.cssRules.length);

    // Kanter
    sheet.insertRule('.nav > li > a:hover, .student-intro-exercise-box, .student-intro-feedback, input[type="text"], .header.frontpage-hd .gt-select, .header.frontpage-hd .gt-select .options, .gt-select .option { background-color: '+defaultPalette.border+' !important }', sheet.cssRules.length);
    sheet.insertRule('.nav-tabs, .student-stat .student-table td, .student-table, .nav-tabs > .active > a, .nav-tabs > li > a:hover, .student-intro-exercise-box, .student-intro-feedback, .modal-header, input.dictationTextField, table.radio-table, table.checkbox-table, table.radio-table tr td, table.checkbox-table tr td, select, select * { border-color: '+defaultPalette.border+' !important }', sheet.cssRules.length);
    sheet.insertRule('.student-table, .nav-tabs > .active > a, .nav-tabs > li > a:hover { border-bottom-color: transparent !important }', sheet.cssRules.length);

    // Normal blå
    sheet.insertRule('.student-stat .student-table td a { color: '+defaultPalette.blue+' !important }', sheet.cssRules.length);

    // Andre regler
    sheet.insertRule('.student-intro-img img { background-color: white !important; border-radius: 10px; padding: 10px 0 }', sheet.cssRules.length);
    sheet.insertRule('.student-intro-exercise-box, .student-intro-feedback { background: '+defaultPalette.border+' !important }', sheet.cssRules.length);
    sheet.insertRule('span *, .notice *  { color: inherit; }', sheet.cssRules.length);

})();
