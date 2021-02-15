// FBLA Website Design 2021
// Full Gallery Code
// Karen Gao, Elliot Huang, Saideep Ambari

// Imports
import {timeline} from 'wix-animations'

// Function that runs when all the elements on the page have finished loading
// ------------------------------------------------------------------------------------------------
$w.onReady(function () {
	
	// Define initial constants
	// --------------------------------------------------------------------------------------------
	
	// High-Rise
	// --------------------------------------------------------------
	// Menu content
	const highRiseBox = $w('#box12');
	const highRiseIcon = $w('#vectorImage1');
	const highRiseText = $w('#text13');
	
	// Title content
	const highRiseTitleBox = $w('#box6');
	const highRiseLineLeft = $w('#line7');
	const highRiseLineRight = $w('#line8');
	const highRiseTitle = $w('#text9');

	// Residential
	// --------------------------------------------------------------
	// Menu content
	const residentialBox = $w('#box13');
	const residentialIcon = $w('#vectorImage2');
	const resdentialText = $w('#text14');

	// Title content
	const residentialTitleBox = $w('#box11');
	const resLineLeft = $w('#line10');
	const resLineRight = $w('#line9');
	const residentialTitle = $w('#text12');

	// Hospitality
	// --------------------------------------------------------------
	// Menu content
	const hospitalityBox = $w('#box14');
	const hospitalityIcon = $w('#vectorImage3');
	const hospitalityText = $w('#text15');

	// Title content
	const hospitalityTitleBox = $w('#box15');
	const hospLineLeft = $w('#line14');
	const hospLineRight = $w('#line13');
	const hospitalityTitle = $w('#text16');

	// Gallery boxes
	const highRiseGalBox = $w('#box16');
	const residentialGalBox = $w('#box17');
	const hospitalityGalBox = $w('#box18');
	
	// Set current gallery box to high rise
	var currentGalBox = highRiseGalBox;


	// Store initial times in variables
	// This will be used to make sure animations fully finish before another one begins
	var highRisePrevTime = Date.now();
	var residentialPrevTime = Date.now();
	var hospitalityPrevTime = Date.now();
	var currentTime = Date.now();

	// Reset animations
	const reset = {y: 0, x: 0, scale: 1, duration: 150, easing: 'easeOutCirc'};

	
	// Menu animations
	// --------------------------------------------------------------------------------------------
	// High-rise box
	highRiseBox.onMouseIn(() => {
		timeline()
			.add(highRiseText, {y: 0, x: 10, scale: 1, duration: 200, easing: 'easeOutCirc'})
			.add(highRiseIcon, {y: 0, x: 0, scale: 1.1, rotate: 90, duration: 500, easing: 'easeOutCirc'}, "-=200")
			.play()
	})

	highRiseBox.onMouseOut(() => {

		timeline()
			.add(highRiseText, reset)
			.add(highRiseIcon, {y: 0, x: 0, scale: 1, rotate: -90, duration: 200, easing: 'easeOutCirc'}, "-=150")
			.play()
	})

	// Residential box
	residentialBox.onMouseIn(() => {
		timeline()
			.add(resdentialText, {y: 0, x: 10, scale: 1, duration: 200, easing: 'easeOutCirc'})
			.add(residentialIcon, {y: 0, x: 0, scale: 1.1, rotate: 90, duration: 500, easing: 'easeOutCirc'}, "-=200")
			.play()
	})

	residentialBox.onMouseOut(() => {

		timeline()
			.add(resdentialText, reset)
			.add(residentialIcon, {y: 0, x: 0, scale: 1, rotate: -90, duration: 500, easing: 'easeOutCirc'}, "-=150")
			.play()
	})

	// Hospitality box
	hospitalityBox.onMouseIn(() => {
		timeline()
			.add(hospitalityText, {y: 0, x: 10, scale: 1, duration: 200, easing: 'easeOutCirc'})
			.add(hospitalityIcon, {y: 0, x: 0, scale: 1.1, rotate: 90, duration: 500, easing: 'easeOutCirc'}, "-=200")
			.play()
	})

	hospitalityBox.onMouseOut(() => {

		timeline()
			.add(hospitalityText, reset)
			.add(hospitalityIcon, {y: 0, x: 0, scale: 1, rotate: -90, duration: 500, easing: 'easeOutCirc'}, "-=150")
			.play()
	})

	// Menu click actions
	// --------------------------------------------------------------------------------------------
	// Click High-Rise Box
	highRiseBox.onClick( () => {
		currentTime = Date.now();

		if ((currentTime - highRisePrevTime) > 2200 && (currentTime - residentialPrevTime) > 2200 && (currentTime - hospitalityPrevTime) > 2200) {
			
			currentGalBox.hide();
			currentGalBox = highRiseGalBox;		
			currentGalBox.show("fade");
		
			highRisePrevTime = currentTime;
		}
		
	})

	// Click Residential Box
	residentialBox.onClick( () => {
		currentTime = Date.now();

		if ((currentTime - highRisePrevTime) > 2200 && (currentTime - residentialPrevTime) > 2200 && (currentTime - hospitalityPrevTime) > 2200) {
			
			currentGalBox.hide();
			currentGalBox = residentialGalBox;		
			currentGalBox.show("fade");
		
			residentialPrevTime = currentTime;
		}
		
	})

	// Click High-Rise Box
	hospitalityBox.onClick( () => {
		currentTime = Date.now();

		if ((currentTime - highRisePrevTime) > 2200 && (currentTime - residentialPrevTime) > 2200 && (currentTime - hospitalityPrevTime) > 2200) {
			
			currentGalBox.hide();
			currentGalBox = hospitalityGalBox;		
			currentGalBox.show("fade");
		
			hospitalityPrevTime = currentTime;
		}
		
	})

	
	// Title box animations
	// --------------------------------------------------------------------------------------------
	// High-Rise
	// --------------------------------------------------------------------------------------------
	// When mouse is on high-rise box, expand text and shift lines out
	highRiseTitleBox.onMouseIn(() => {

		timeline()
			.add(highRiseLineLeft, {y: 0, x: -20, scale: 1, duration: 500, easing: 'easeOutCirc'})
			.add(highRiseLineRight, {y: 0, x: 20, scale: 1, duration: 500, easing: 'easeOutCirc'}, "-=500")
			.add(highRiseTitle, {scale: 1.05, duration: 500, easing: 'easeOutCirc'}, "-=500")
			.play()

	})

	// When mouse comes off high-rise box, reset elements
	highRiseTitleBox.onMouseOut(() => {

		timeline()
			.add(highRiseLineLeft, {y: 0, x: 0, scale: 1, duration: 500, easing: 'easeOutCirc'})
			.add(highRiseLineRight, {y: 0, x: 0, scale: 1, duration: 500, easing: 'easeOutCirc'}, "-=500")
			.add(highRiseTitle, {y: 0, x: 0, scale: 1, duration: 500, easing: 'easeOutCirc'}, "-=500")
			.play()
	})


	// Residential
	// --------------------------------------------------------------------------------------------
	// When mouse is on residential box, expand text and shift lines out
	residentialTitleBox.onMouseIn(() => {

		timeline()
			.add(resLineLeft, {y: 0, x: -20, scale: 1, duration: 500, easing: 'easeOutCirc'})
			.add(resLineRight, {y: 0, x: 20, scale: 1, duration: 500, easing: 'easeOutCirc'}, "-=500")
			.add(residentialTitle, {scale: 1.05, duration: 500, easing: 'easeOutCirc'}, "-=500")
			.play()

	})

	// When mouse comes off residential box, reset elements
	residentialTitleBox.onMouseOut(() => {

		timeline()
			.add(resLineLeft, {y: 0, x: 0, scale: 1, duration: 500, easing: 'easeOutCirc'})
			.add(resLineRight, {y: 0, x: 0, scale: 1, duration: 500, easing: 'easeOutCirc'}, "-=500")
			.add(residentialTitle, {scale: 1, duration: 500, easing: 'easeOutCirc'}, "-=500")
			.play()
	})

	
	// Hospitality
	// --------------------------------------------------------------------------------------------
	// When mouse is on hospitality box, expand text and shift lines out
	hospitalityTitleBox.onMouseIn(() => {

		timeline()
			.add(hospLineLeft, {y: 0, x: -20, scale: 1, duration: 500, easing: 'easeOutCirc'})
			.add(hospLineRight, {y: 0, x: 20, scale: 1, duration: 500, easing: 'easeOutCirc'}, "-=500")
			.add(hospitalityTitle, {scale: 1.05, duration: 500, easing: 'easeOutCirc'}, "-=500")
			.play()

	})

	// When mouse comes off hospitality box, reset elements
	hospitalityTitleBox.onMouseOut(() => {

		timeline()
			.add(hospLineLeft, {y: 0, x: 0, scale: 1, duration: 500, easing: 'easeOutCirc'})
			.add(hospLineRight, {y: 0, x: 0, scale: 1, duration: 500, easing: 'easeOutCirc'}, "-=500")
			.add(hospitalityTitle, {scale: 1, duration: 500, easing: 'easeOutCirc'}, "-=500")
			.play()
	})

	

});