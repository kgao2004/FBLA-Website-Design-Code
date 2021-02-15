// FBLA Website Design 2021
// Menu Animations Code (For all pages except Portfolio and Full Gallery)
// Karen Gao, Elliot Huang, Saideep Ambari

// Imports
import { timeline } from 'wix-animations';

// Function that runs when all the elements on the page have finished loading
// ------------------------------------------------------------------------------------------------
$w.onReady(function () {

	// Define constants for menu items
    const header = $w('#header1');
    const homeButton = $w('#button3');
    const mikeAndersText = $w('#text4');
    const archPhotText = $w('#text3');
    const menu = $w('#horizontalMenu1');

	// When mouse is on the header, expand mike anderson and menu, compress arch. photography
    header.onMouseIn(() => {
        timeline()
            .add(mikeAndersText, {scaleX: 1.07, duration: 500, easing: 'easeOutCirc'})
            .add(archPhotText, {scaleX: 0.93, duration: 500, easing: 'easeOutCirc'}, "-=500")
            .add(menu, {scale: 1.05, duration: 500, easing: 'easeOutCirc'}, "-=500")
            .play()
    })    

	// When mouse moves off header, reset animations
    header.onMouseOut(() => {
        timeline()
            .add(mikeAndersText, {scaleX: 1, duration: 500, easing: 'easeOutCirc'})
            .add(archPhotText, {scaleX: 1, duration: 500, easing: 'easeOutCirc'}, "-=500")
            .add(menu, {scale: 1, duration: 500, easing: 'easeOutCirc'}, "-=500")
            .play()
    })


});