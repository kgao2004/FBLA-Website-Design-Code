// FBLA Website Design 2021
// Portfolio Code
// Karen Gao, Elliot Huang, Saideep Ambari


// Imports
// ----------------------------------------------------------------------------------------------------
import {timeline} from 'wix-animations';
import wixWindow from 'wix-window';
	

// Function that runs when all the elements on the page have finished loading
// ----------------------------------------------------------------------------------------------------
$w.onReady(function () {

	// Function to rotate the images
	// --------------------------------------------------------------------------------------------
	// Input: "next" or "prev" to indicate direction
	function rotateImgs(direction) {
		
		// Next
		// Current picture will rotate right and hide
		// Next picture will rotate left and show
		if (direction === "next") {
			let arcOptions1 = {
				"direction": "right"
			}

			let arcOptions2 = {
				"direction": "left"
			}

			imgs[currentImgIndex].hide("arc", arcOptions1);
		
			if (currentImgIndex === 0) {
				currentImgIndex = imgs.length-1;
			}
			else {
				currentImgIndex--;
			}

			imgs[currentImgIndex].show("arc", arcOptions2);
		}

		// Previous
		// Current picture will rotate left and hide
		// Previous picture will rotate right and show
		else {
			let arcOptions1 = {
			"direction": "left"
			}

			let arcOptions2 = {
			"direction": "right"
			}

			imgs[currentImgIndex].hide("arc", arcOptions1);
		
			if (currentImgIndex === imgs.length-1) {
				currentImgIndex = 0;
			}
			else {
				currentImgIndex++;
			}

			imgs[currentImgIndex].show("arc", arcOptions2);
		}

	}

	// Skip to a certain image
	// --------------------------------------------------------------------------------------------
	// When user clicks on an image in the lower gallery
	// Input: index of new image to skip to
	function skipToImg(newImgIndex) {
		
		// If the new image comes after the current image in array
		// Rotate current image right and hide
		// Rotate new image left and show
		if (newImgIndex > currentImgIndex) {
			let arcOptions1 = {
				"direction": "right"
			}

			let arcOptions2 = {
				"direction": "left"
			}

			imgs[currentImgIndex].hide("arc", arcOptions1);

			imgs[newImgIndex].show("arc", arcOptions2);
		}

		// If the new image comes before the current image in array
		// Rotate current image left and hide
		// Rotate new image right and show
		else if (newImgIndex < currentImgIndex) {
			let arcOptions1 = {
			"direction": "left"
			}

			let arcOptions2 = {
			"direction": "right"
			}

			imgs[currentImgIndex].hide("arc", arcOptions1);

			imgs[newImgIndex].show("arc", arcOptions2);
		}

	}

	// Get the index of an image in the array
	// --------------------------------------------------------------------------------------------
	// Each image array has 5 elements
	// The first image in the respective arrays are img1, img6, and img11
	// Input: title of image (from gallery)
	function getImgIndex(imgTitle) {
		if (imgTitle === "img1" || imgTitle === "img6" || imgTitle === "img11") {
			return 0;
		}
		else if (imgTitle === "img2" || imgTitle === "img7" || imgTitle === "img12") {
			return 1;
		}
		else if (imgTitle === "img3" || imgTitle === "img8" || imgTitle === "img13") {
			return 2;
		}
		else if (imgTitle === "img4" || imgTitle === "img9" || imgTitle === "img14") {
			return 3;
		}
		else if (imgTitle === "img5" || imgTitle === "img10" || imgTitle === "img15") {
			return 4;
		}
	}

	// Hide all images in an array
	// --------------------------------------------------------------------------------------------
	// Input: current image array
	function hideImgs(imgList) {
		var i;
		for (i=0; i<imgList.length; i++) {
			imgList[i].hide();
		}
	}
	
	// Defining initial constants and variables
	// --------------------------------------------------------------------------------------------

	// Menu
	const homeButton = $w('#button8');
    	const mikeAndersText = $w('#text12');
    	const archPhotText = $w('#text13');
	const menu = $w('#horizontalMenu3')
	const topStrip = $w('#columnStrip1');
	const menuBox = $w('#box12');

	// Buttons
	const highRiseButton = $w('#button4');
	const residentialButton = $w('#button5');
	const hospitalityButton = $w('#button6');
	const viewAllButton = $w('#button7');

	// High-Rise (no box containing these images)
	// --------------------------------------------------------------
	const highRiseTitleBox = $w('#box7');
	const highRiseTitle = $w('#text8');
	const highRiseLineLeft = $w('#line5');
	const highRiseLineRight = $w('#line6');
	
	// High-Rise Images (bottom to top)
	const img1 = $w('#image1');
	const img2 = $w('#image2');
	const img3 = $w('#image3');
	const img4 = $w('#image4');
	const img5 = $w('#image6');

	// Array to store high-rise images
	var highRiseImgs = [img1, img2, img3, img4, img5];
	
	
	// Residential
	// --------------------------------------------------------------
	const residentialTitleBox = $w('#box6');
	const residentialTitle = $w('#text9');
	const resLineLeft = $w('#line7');
	const resLineRight = $w('#line8');
	const residentialImgsBox = $w('#box5');
	
	// Residential Images (bottom to top)
	const img6 = $w('#image8');
	const img7 = $w('#image9');
	const img8 = $w('#image10');
	const img9 = $w('#image11');
	const img10 = $w('#image12');

	// Array to store residential images
	var residentialImgs = [img6, img7, img8, img9, img10];

	
	// Hospitality
	// --------------------------------------------------------------
	const hospitalityTitleBox = $w('#box8');
	const hospitalityTitle = $w('#text10');
	const hospLineLeft = $w('#line10');
	const hospLineRight = $w('#line9');
	const hospitalityImgsBox = $w('#box9');
	
	// Hospitality Images (bottom to top)
	const img11 = $w('#image13');
	const img12 = $w('#image14');
	const img13 = $w('#image15');
	const img14 = $w('#image16');
	const img15 = $w('#image17');

	// Array to store hospitality images
	var hospitalityImgs = [img11, img12, img13, img14, img15];

	
	// Featured box and text
	// --------------------------------------------------------------
	const featuredBox = $w('#box10');
	const featuredText = $w('#text11');

	
	// Current variables
	// --------------------------------------------------------------
	// Set current title to high rise
	var currentTitle = highRiseTitleBox;
	
	// Set previous images array to high rise image array
	var prevImgs = highRiseImgs;
	
	// Set current images array to high rise image
	var imgs = highRiseImgs;
	
	// Set current image index to top most image in above array
	// Top-most image = last index
	var currentImgIndex = imgs.length-1;		


	// Galleries
	// --------------------------------------------------------------------------------------------
	const highRiseGallery = $w('#gallery1');
	const residentialGallery = $w('#gallery2');
	const hospitalityGallery = $w('#gallery3');
	
	// Setting gallery items
	// --------------------------------------------------------------------------------------------
	// When I created the img gallery I added the pictures in backwards
	// The first image that pops up on the screen is actually img5 (last index of imgs array)
	
	
	// High-Rise Gallery
	highRiseGallery.items = [
		{
			"type": "image",
			"title": "img5",
			"src": "https://static.wixstatic.com/media/c5c84b_1220223ff5ec45ffaf641dd3d64f329b~mv2.jpg/v1/fill/w_764,h_1140,al_c,q_85,usm_0.66_1.00_0.01/pexels-elizaveta-kozorezova-1838471.webp"
			
		}, 
		{
			"type": "image",
			"title": "img4",
			"src": "https://static.wixstatic.com/media/c5c84b_e1224ca6dd114e72beb091dab7a3e329~mv2.jpg/v1/fill/w_738,h_1104,al_c,q_85,usm_0.66_1.00_0.01/pexels-louis-1796505.webp"
		}, 
		{
			"type": "image",
			"title": "img3",
			"src": "https://static.wixstatic.com/media/c5c84b_fa0fb9e12d274464a17b431f6ec882de~mv2.jpg/v1/fill/w_870,h_1068,al_c,q_85,usm_0.66_1.00_0.01/pexels-thiago-matos-2008426.webp"
		}, 
		{
			"type": "image",
			"title": "img2",
			"src": "https://static.wixstatic.com/media/c5c84b_c2741ddffdc942ffbbf88c6bf8110702~mv2.jpg/v1/fill/w_894,h_1114,al_c,q_85,usm_0.66_1.00_0.01/pexels-benjamin-suter-3617458.webp"
		},
		{
			"type": "image",
			"title": "img1",
			"src": "https://static.wixstatic.com/media/c5c84b_a9e378c9f91e4e3bb6db5e91b86cca89~mv2.jpg/v1/fill/w_856,h_1068,al_c,q_85,usm_0.66_1.00_0.01/pexels-guillaume-meurice-2529179.webp"
		}
		
	];

	// Residential Gallery
	residentialGallery.items = [
		{
			"type": "image",
			"title": "img10",
			"src": "https://static.wixstatic.com/media/c5c84b_79d236464bbe4278a41a5b7c067ef6b2~mv2.jpg/v1/fill/w_998,h_654,al_c,q_85,usm_0.66_1.00_0.01/c5c84b_79d236464bbe4278a41a5b7c067ef6b2~mv2.webp"
			
		}, 
		{
			"type": "image",
			"title": "img9",
			"src": "https://static.wixstatic.com/media/c5c84b_f728beea383c413da399f784f7b2b64c~mv2.jpg/v1/fill/w_990,h_674,al_c,q_85,usm_0.66_1.00_0.01/pexels-binyamin-mellish-186077.webp"
		}, 
		{
			"type": "image",
			"title": "img8",
			"src": "https://static.wixstatic.com/media/c5c84b_f9df220179214abca81e7ebb44fd9669~mv2.jpg/v1/fill/w_990,h_654,al_c,q_85,usm_0.66_1.00_0.01/pexels-mark-mccammon-2724748.webp"
		}, 
		{
			"type": "image",
			"title": "img7",
			"src": "https://static.wixstatic.com/media/c5c84b_ee3a6d3ceb4f4a928a36af0935a1a7fd~mv2.jpg/v1/fill/w_988,h_532,al_c,q_85,usm_0.66_1.00_0.01/pexels-alex-1732414.webp"
		},
		{
			"type": "image",
			"title": "img6",
			"src": "https://static.wixstatic.com/media/c5c84b_414b0a0d42d0410d914c6621f923eac2~mv2.jpg/v1/fill/w_988,h_586,al_c,q_85,usm_0.66_1.00_0.01/pexels-frans-van-heerden-1438832.webp"
		}
		
	];

	// Hospitality Gallery
	hospitalityGallery.items = [
		{
			"type": "image",
			"title": "img15",
			"src": "https://static.wixstatic.com/media/c5c84b_ffcce56ddf634491a473b7180283d111~mv2.jpg/v1/fill/w_968,h_636,al_c,q_85,usm_0.66_1.00_0.01/c5c84b_ffcce56ddf634491a473b7180283d111~mv2.webp"
			
		}, 
		{
			"type": "image",
			"title": "img14",
			"src": "https://static.wixstatic.com/media/c5c84b_c2c9d9d6af4f4d7f8b5eb91de8051138~mv2.jpg/v1/fill/w_980,h_548,al_c,q_85,usm_0.66_1.00_0.01/c5c84b_c2c9d9d6af4f4d7f8b5eb91de8051138~mv2.webp"
		}, 
		{
			"type": "image",
			"title": "img13",
			"src": "https://static.wixstatic.com/media/c5c84b_9a94054c1ae2487abefd7a6ec888f083~mv2.jpg/v1/fill/w_968,h_636,al_c,q_85,usm_0.66_1.00_0.01/c5c84b_9a94054c1ae2487abefd7a6ec888f083~mv2.webp"
		}, 
		{
			"type": "image",
			"title": "img12",
			"src": "https://static.wixstatic.com/media/c5c84b_d27ae5044a4e41acb154420f59ade928~mv2.jpg/v1/fill/w_988,h_654,al_c,q_85,usm_0.66_1.00_0.01/c5c84b_d27ae5044a4e41acb154420f59ade928~mv2.webp"
		},
		{
			"type": "image",
			"title": "img11",
			"src": "https://static.wixstatic.com/media/c5c84b_508fe9fe1c894ae0af1d6bfb4e8a2079~mv2.jpg/v1/fill/w_980,h_654,al_c,q_85,usm_0.66_1.00_0.01/c5c84b_508fe9fe1c894ae0af1d6bfb4e8a2079~mv2.webp"
		}
		
	];

	// Set current gallery to high rise gallery
	var currentGallery = highRiseGallery;

	// Next
	const nextText = $w('#text6');
	const nextArrow = $w('#line3');
	const nextBox = $w('#box3');

	// Prev
	const prevText = $w('#text7');
	const prevArrow = $w('#line4');
	const prevBox = $w('#box4');

	// Reset animation
	const reset = {y: 0, x: 0, scale: 1, duration: 500, easing: 'easeOutCirc'};

	// Get current times
	// This will be used to make sure animations fully finish before restarting again
	var prevPrevTime = Date.now();
	var nextPrevTime = Date.now();
	var highRisePrevTime = Date.now();
	var residentialPrevTime = Date.now();
	var hospitalityPrevTime = Date.now();

	var highRiseGalPrevTime = Date.now();
	var residentialGalPrevTime = Date.now();
	var hospitalityGalPrevTime = Date.now();

	var currentTime = Date.now();

	// Menu animations
	// --------------------------------------------------------------------------------------------
	// When mouse is on top strip, expand mike anderson and menu, compress arch. photography 
	topStrip.onMouseIn(() => {
		timeline()
		    .add(mikeAndersText, {scaleX: 1.07, duration: 500, easing: 'easeOutCirc'})
		    .add(archPhotText, {scaleX: 0.93, duration: 500, easing: 'easeOutCirc'}, "-=500")
		    .add(menu, {scale: 1.05, duration: 500, easing: 'easeOutCirc'}, "-=500")
		    .play()
    	})

	// When mouse moves off top strip, reset animations
    	topStrip.onMouseOut(() => {
		timeline()
		    .add(mikeAndersText, {scaleX: 1, duration: 500, easing: 'easeOutCirc'})
		    .add(archPhotText, {scaleX: 1, duration: 500, easing: 'easeOutCirc'}, "-=500")
		    .add(menu, {scale: 1, duration: 500, easing: 'easeOutCirc'}, "-=500")
		    .play()
    	})

	// When mouse is on menu box, expand mike anderson and menu, compress arch. photography
	menuBox.onMouseIn(() => {
		timeline()
		    .add(mikeAndersText, {scaleX: 1.07, duration: 500, easing: 'easeOutCirc'})
		    .add(archPhotText, {scaleX: 0.93, duration: 500, easing: 'easeOutCirc'}, "-=500")
		    .add(menu, {scale: 1.05, duration: 500, easing: 'easeOutCirc'}, "-=500")
		    .play()
    	})

	// When mouse moves off menu box, reset animations
    	menuBox.onMouseOut(() => {
		timeline()
		    .add(mikeAndersText, {scaleX: 1, duration: 500, easing: 'easeOutCirc'})
		    .add(archPhotText, {scaleX: 1, duration: 500, easing: 'easeOutCirc'}, "-=500")
		    .add(menu, {scale: 1, duration: 500, easing: 'easeOutCirc'}, "-=500")
		    .play()
    	})

	
	// Buttons animations
	// --------------------------------------------------------------------------------------------
	
	// Click High-Rise Button
	// --------------------------------------------------------------------------------------------
	highRiseButton.onClick( () => {
		
		
		// Get time when clicked
		currentTime = Date.now();
		
		// Make sure any previous button animations have finished before proceeding
		if ((currentTime - highRisePrevTime) > 2300 && (currentTime - residentialPrevTime) > 2300 && (currentTime - hospitalityPrevTime) > 2300) {
			
			// Hide all current images, titles, boxes, and galleries
			hideImgs(imgs);
			currentTitle.hide();
			currentGallery.hide();
			residentialImgsBox.hide();
			hospitalityImgsBox.hide();
			
			// Set current image array, index, gallery, and title
			imgs = highRiseImgs;
			currentImgIndex = imgs.length-1;
			currentTitle = highRiseTitleBox;
			currentGallery = highRiseGallery;

			// Hide previous title and show new title
			currentTitle.show("fade");
			imgs[currentImgIndex].show("fade");
			currentGallery.show("fade");

			// Adjust the positions of the previous and next boxes if current image array is high rise
			// (high rise images are taller)
			// Only for desktop users
			if (wixWindow.formFactor === "Desktop") {
				if (imgs !== highRiseImgs) {
				timeline()
				.add([prevBox, nextBox], 
					reset, 
					reset) 
				.play()
				}
			}
		
			// Change prev time to current time
			highRisePrevTime = currentTime;
		}
		
	})

	// Click Residential Button
	// --------------------------------------------------------------------------------------------
	residentialButton.onClick( () => {
		
		// Get time when clicked
		currentTime = Date.now();

		// Make sure any previous button animations have finished before proceeding
		if ((currentTime - highRisePrevTime) > 2300 && (currentTime - residentialPrevTime) > 2300 && (currentTime - hospitalityPrevTime) > 2300) {
			
			// Hide all current images, titles, boxes, and galleries
			hideImgs(imgs);
			currentTitle.hide();
			currentGallery.hide();
			hospitalityImgsBox.hide();

			// Set previous images to image array before button was clicked
			prevImgs = imgs;
			
			// Set current image array, index, gallery, and title
			imgs = residentialImgs;
			currentImgIndex = imgs.length-1;
			currentTitle = residentialTitleBox;
			currentGallery = residentialGallery;

			// Hide previous title and show new title
			imgs[currentImgIndex].show("fade");
			currentTitle.show("fade");
			residentialImgsBox.show("fade");
			currentGallery.show("fade");

			// Adjust the positions of the previous and next boxes
			// Only if previous image array was high rise
			// Only for desktop users
			if (wixWindow.formFactor === "Desktop") {
				if (prevImgs === highRiseImgs) {
				timeline()
				.add([prevBox, nextBox], 
					{y: -100, x: 0, scale: 1, duration: 500, easing: 'easeOutCirc'}, 
					{y: -100, x: 0, scale: 1, duration: 500, easing: 'easeOutCirc'}) 
				.play()
				}
			}
			
			// Change prev time to current time
			residentialPrevTime = currentTime;

		}
		
	})

	// Click Hospitality Button
	hospitalityButton.onClick( () => {
		
		// Get time when clicked
		currentTime = Date.now();
		
		// Make sure any previous button animations have finished before proceeding
		if ((currentTime - highRisePrevTime) > 2300 && (currentTime - residentialPrevTime) > 2300 && (currentTime - hospitalityPrevTime) > 2300) {
			
			// Hide all current images, titles, boxes, and galleries
			hideImgs(imgs);
			currentTitle.hide();
			currentGallery.hide();
			residentialImgsBox.hide();

			// Set previous images to image array before button was clicked
			prevImgs = imgs;
			
			// Set current image array, index, gallery, and title
			imgs = hospitalityImgs;
			currentImgIndex = imgs.length-1;
			currentTitle = hospitalityTitleBox;
			currentGallery = hospitalityGallery;

			// Hide previous title and show new title
			imgs[currentImgIndex].show("fade");
			currentTitle.show("fade");
			hospitalityImgsBox.show("fade");
			currentGallery.show("fade");

			// Adjust the positions of the previous and next boxes
			// Only if previous image array was high rise
			// Only for desktop users
			if (wixWindow.formFactor === "Desktop") {
				if (prevImgs === highRiseImgs) {
				timeline()
				.add([prevBox, nextBox], 
					{y: -100, x: 0, scale: 1, duration: 500, easing: 'easeOutCirc'}, 
					{y: -100, x: 0, scale: 1, duration: 500, easing: 'easeOutCirc'}) 
				.play()
				}
			}

			// Change prev time to current time
			hospitalityPrevTime = currentTime;

		} 
				
	})

	// When An Image is Clicked (not gallery images), open the image in a popup window
	// --------------------------------------------------------------------------------------------
	var j;
	for (j=0; j<imgs.length; j++) {
		highRiseImgs[j].clickAction = "expand";
		residentialImgs[j].clickAction = "expand";
		hospitalityImgs[j].clickAction = "expand";
	}

	// Featured Box Animation
	// --------------------------------------------------------------------------------------------
	
	// When mouse is on featured box, expand the text
	featuredBox.onMouseIn(() => {

		timeline()
			.add(featuredText, {scale: 1.05, duration: 600, easing: 'easeOutCirc',})
			.play()

	})

	// When mouse moves off featured box, reset text size
	featuredBox.onMouseOut(() => {

		timeline()
			.add(featuredText, {scale: 1, duration: 600, easing: 'easeOutCirc'})
			.play()

	})

	
	// Next Animation
	// --------------------------------------------------------------------------------------------
	
	// When mouse is on next box
	nextBox.onMouseIn(() => {
		
		// Current Image
		var currentImg = imgs[currentImgIndex];
		
		// Shift arrow to the right and "shake" the current image 
		timeline()
			.add(nextArrow, {y: 0, x: 10, scale: 1, duration: 500, easing: 'easeOutCirc'})
			.add(currentImg, {rotate: 3, scale: 1, duration: 200, easing: 'easeOutCirc'}, "-=500")
			.add(currentImg, {rotate: -3, scale: 1, duration: 300, easing: 'easeOutCirc'}, "-=300") 
			.add(currentImg, {rotate: 0, scale: 1, duration: 200, easing: 'easeOutCirc'})
			.play()

	})

	// When mouse comes off next box
	nextBox.onMouseOut(() => {
		
		// Reset arrow position
		timeline()
			.add(nextArrow, reset)  
			.play()
	})

	// When next is clicked
	nextBox.onClick(() => {

		// Get current time
		currentTime = Date.now();

		// Make sure any previous image animations are finished
		if ((currentTime - highRiseGalPrevTime) > 1300 && (currentTime - residentialGalPrevTime) > 1300 && (currentTime - hospitalityGalPrevTime) > 1300 && (currentTime - prevPrevTime) > 1200 && (currentTime - nextPrevTime) > 1200) {
			
			// Rotate image to next one
			rotateImgs("next");
			
			// Set prev time to current time
			nextPrevTime = currentTime;
		}
		
	})

	// Prev Animation
	// --------------------------------------------------------------------------------------------
	
	// When mouse is on prev box
	prevBox.onMouseIn(() => {

		// Current image
		var currentImg = imgs[currentImgIndex];

		// Shift arrow to the left and "shake" current image
		timeline()
			.add(prevArrow, {y: 0, x: -10, scale: 1, duration: 500, easing: 'easeOutCirc'})
			.add(currentImg, {rotate: -3, scale: 1, duration: 200, easing: 'easeOutCirc'}, "-=500")
			.add(currentImg, {rotate: 3, scale: 1, duration: 300, easing: 'easeOutCirc'}, "-=300") 
			.add(currentImg, {rotate: 0, scale: 1, duration: 200, easing: 'easeOutCirc'})
			.play()

	})

	// When mouse comes off prev box
	prevBox.onMouseOut(() => {

		// Reset arrow position
		timeline()
			.add(prevArrow, reset)  
			.play()
	})
	
	// When prev is clicked
	prevBox.onClick(() => {

		// Get current time
		currentTime = Date.now();
		
		// Make sure any previous image animations are finished
		if ((currentTime - highRiseGalPrevTime) > 1300 && (currentTime - residentialGalPrevTime) > 1300 && (currentTime - hospitalityGalPrevTime) > 1300 && (currentTime - prevPrevTime) > 1200 && (currentTime - nextPrevTime) > 1200) {
			
			// Rotate image to prev one
			rotateImgs("prev");
			
			// Set prev time to current time
			prevPrevTime = currentTime;
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
			.add(highRiseLineLeft, reset)
			.add(highRiseTitle, reset, "-=500")
			.add(highRiseLineRight, reset, "-=500")
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
			.add(resLineLeft, reset)
			.add(resLineRight, reset, "-=500")
			.add(residentialTitle, reset, "-=500")
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
			.add(hospLineLeft, reset)
			.add(hospLineRight, reset, "-=500")
			.add(hospitalityTitle, reset, "-=500")
			.play()
	})

	
	// When an image in the lower image gallery is clicked, show that image
	// --------------------------------------------------------------------------------------------
	currentGallery.onItemClicked( (event) => {
		
		// Get current time
		currentTime = Date.now();

		// Make sure any previous gallery animations are done
		if ((currentTime - highRiseGalPrevTime) > 1300 && (currentTime - residentialGalPrevTime) > 1300 && (currentTime - hospitalityGalPrevTime) > 1300 && (currentTime - prevPrevTime) > 1200 && (currentTime - nextPrevTime) > 1200) {
			
			// Store current image title in a variable
			let itemTitle = event.item.title;
			
			// Get current image index based on image title
			let newImgIndex = getImgIndex(itemTitle);
			
			// Rotate to new image
			skipToImg(newImgIndex);
			
			// Update current image index
			currentImgIndex = newImgIndex;

			// Update prev times stored in variables depending on the gallery
			if (currentGallery === highRiseGallery) {
				highRiseGalPrevTime = currentTime;
			}
			else if (currentGallery === residentialGallery) {
				residentialGalPrevTime = currentTime;
			}
			else if (currentGallery === hospitalityGallery) {
				hospitalityGalPrevTime = currentTime;
			}
		}

	})

});
