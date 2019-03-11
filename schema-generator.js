/* Copyright ©, 2019, Eric Warncke. ericwarncke@gmail.com */

"use strict";

///////////////////////////////////////////////////////////////////////////////////////////////
//                         ADD OR DELETE BUTTONS (Alt name & Reviews)                        //
///////////////////////////////////////////////////////////////////////////////////////////////

jQuery(document).ready(function() {
	
	/////////////////////////////////////////////////////////////////////////////////////////////
	//                                      ADD REVIEWS                                        //
	/////////////////////////////////////////////////////////////////////////////////////////////
	
	// make a variable to count the number of reviews
	let schema_count = 0;
	
	// schema_count starts at zero, so add 1 to it to show the number of reviews visually starting at 1
	let schema_count_plus_one = schema_count + 1;
		
	// whenever ADD REVIEW button is clicked
	$('.addreviewschema').click(function(e) {
		
		// make a variable for the add reviews button container
		let addReviewsButton2 = document.getElementById("addreviewsul");
			
		// if there are less than 5000 reviews, allow the add reviews button to be seen
		addReviewsButton2.style.display = "block";
		
		e.preventDefault();
		// add the following code inside the INDIVIDUAL REVIEWS div
		$(".individualreviews").append(

			// opening tag
			'<li class="reviewli' + schema_count + '">'
		  + '<div class="footer-schema"><div class="titlebar"><h4>Review ' + schema_count_plus_one + '</h4></div>'

			// review author 
		  + '<div class="reviewsquestions"><div class="questionSixteen"><p>What is the name of the person that wrote the review?</p><label for="reviewauthor' + schema_count + '">Reviewer\'s Name: </label><input type="text" id="reviewauthor' + schema_count + '" name="reviewauthor' + schema_count + '" onKeyPress="return noenter()"></div>'

			// review date
		  + '<div class="questionSeventeen"><p>What is the date that the review was written?</p><label for="reviewdate' + schema_count + '">Review Date: </label><input type="text" id="reviewdate' + schema_count + '" name="reviewdate' + schema_count + '" onKeyPress="return noenter()"></div>'

			// review text
		  + '<div class="questionEighteen"><p>Enter the review below.</p><label for="reviewtext' + schema_count + '">Review: </label><textarea type="text" id="reviewtext' + schema_count + '" name="reviewtext' + schema_count + '" rows="5" onKeyPress="return noenter()"></textarea></div>'

			// review score
		  + '<div class="questionNineteen"><p>What is the score that the reviewer left?</p><label for="reviewscore' + schema_count + '">Reviewer\'s Score: </label><!-- write a rule later that says IF the score left below is higher than question 14, make the form spit an error message --><input type="text" id="reviewscore' + schema_count + '" name="reviewscore' + schema_count + '" value="100" onKeyPress="return noenter()"></div>'
		  
		  // this is the thing people will click to delete the review if they choose
		  + '</div></div><a href="#" class="deletereviewschema">Delete</a></li>'
		  
		);

		// increase the schema count by 1 every time someone clicks the ADD REVIEW button
		schema_count++;
		schema_count_plus_one++;
		
		// only allow up to 10 alternate names
		if (schema_count > 4999) {
			
			let schema_count = 4999;
			
			// make a variable for the add alternate names button
			let addReviewsButton = document.getElementById("addReviewsButton");
			
			// if there are 10 alternate names fields, make the add alternate names button disappear
			addReviewsButton.style.display = "none";
		}
		
	});
	
	/////////////////////////////////////////////////////////////////////////////////////////////
	//                                     DELETE REVIEWS                                      //
	/////////////////////////////////////////////////////////////////////////////////////////////

	// if someone clicks the DELETE REVIEW button, do this
	$('.individualreviews').on('click', '.deletereviewschema', function(f) {
		f.preventDefault();

		$(this).parent().remove();
		
		schema_count--;
		schema_count_plus_one -= 1;
		
		if (schema_count >= 0 && schema_count <= 4999) {
					
			// make a variable for the add review button
			let addReviewsButton = document.getElementById("addReviewsButton");
			
			// make a variable for the add review button container
			let addReviewsButton2 = document.getElementById("addmorereviewscontainer");
			
			// make a variable for the add review button container
			let addReviewsButton3 = document.getElementById("addreviewsul");
				
			// once there are 4999 reviews, make the add reviews button disappear
			addReviewsButton.style.display = "block";
			addReviewsButton2.style.display = "block";
			addReviewsButton3.style.display = "block";
			
		// don't allow the number of reviews to be less than 1
		} else if (schema_count < 0) {
			
			let schema_count = 0;
			
		// don't allow the number of reviews to be more than 5000
		} else if (schema_count > 4999) {
			
			let schema_count = 4999;
		}
		
	});
	
	/////////////////////////////////////////////////////////////////////////////////////////////
	//                                      ADD ALT NAMES                                      //
	/////////////////////////////////////////////////////////////////////////////////////////////
	
	// make a variable to count the number of alternate names
	let altname_count = 0;
	
	// altname_count starts at zero, so add 1 to it to show the number of alt names visually starting at 1
	let altname_count_plus_one = altname_count + 1;
		
	// whenever ADD ALT NAME button is clicked
	$('.addaltNames').click(function(g) {
		
		
		// make a variable for the add alternate names button container
		let addAltNamesButton3 = document.getElementById("altnamesul");
			
		// if there are less than 10 alt name fields, allow the add alt names button to be seen
		addAltNamesButton3.style.display = "block";
		
		g.preventDefault();
		// add the following code inside the ALT NAMES div
		$(".altNames").append(

			// opening li
			'<li class="reviewli' + altname_count + '">'

			// alt name label and input 
		  + '<label for="altschemaname' + altname_count + '">Alt Name ' + altname_count_plus_one + ': </label><input type="text" id="altschemaname' + altname_count + '" name="altschemaname" onKeyPress="return noenter()"><br>'

			// this is the thing people will click to delete the alt name if they choose
		  + '<a href="#" class="deletealtname">Delete</a></li>'
		  
		);
		
		// increase the schema count by 1 every time someone clicks the ADD REVIEW button
		altname_count++;
		altname_count_plus_one++;
		
		// after someone clicks on the "add alt name" button, create a variable for the alt name
		let altSchemaName = document.forms["schemageneratorform"]["altschemaname"].value; // alternate name
		
		// only allow up to 10 alternate names
		if (altname_count > 9) {
			
			let altname_count = 9;
			
			// make a variable for the add alternate names button
			let addAltNamesButton = document.getElementById("addAltNamesButton");
			
			// once the user clicks on the add alternate names button 10 times, make the add alternate names button disappear
			addAltNamesButton.style.display = "none";
		}
		
	});
	
	/////////////////////////////////////////////////////////////////////////////////////////////
	//                                    DELETE ALT NAMES                                     //
	/////////////////////////////////////////////////////////////////////////////////////////////
	
	// if someone clicks the DELETE REVIEW button, do this
	$('.altNames').on('click', '.deletealtname', function(h) {
		h.preventDefault();

		$(this).parent().remove();
		
		altname_count -= 1;
		altname_count_plus_one -= 1;
		
		if (altname_count <= 10) {
					
			// make a variable for the add alternate names button
			let addAltNamesButton = document.getElementById("addAltNamesButton");
			
			// make a variable for the add alternate names button container
			let addAltNamesButton2 = document.getElementById("addAltNamesButtonContainer");
			
			// make a variable for the add alternate names button container
			let addAltNamesButton3 = document.getElementById("altnamesul");
				
			// once the user clicks on the add alternate names button 10 times, make the add alternate names button disappear
			addAltNamesButton.style.display = "block";
			addAltNamesButton2.style.display = "block";
			addAltNamesButton3.style.display = "block";
			
		} else if (altname_count < 0) {
			
			let altname_count = 0;
			
		} else if (altname_count > 10) {
			
			let altname_count = 10;
		}
	});
	
});

// reset the page when the reset button is clicked
function resetpage() {
  location.reload();
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
//                      HIDE OR DISPLAY QUESTIONS BASED ON SCHEMA TYPE                       //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////

// this function allows question 2 and beyond to appear when a bullet is clicked
function nextQuestion() {
	
	// make variables that contains user inputs
	//              check document,[   form name=""     ][input name=""].value
	let schemaType = document.forms["schemageneratorform"]["schematype"].value; // schema type
	
	// This creates an array of the 3 schema type choices
	let schematypes = document.getElementsByName("schematype");
	
	// if the schema type is LOCAL BUSINESS
	if (schemaType == "localbusiness") {
	
		// make a variable for the div that contains question 2 and beyond
		let nextBlock = document.getElementById("nextBlock");
		
		// once the user clicks on the bullet, make question #2 and beyond appear
		nextBlock.style.display = "block";
		
		// make a variable for the div that contains the product condition question
		let productcondition = document.getElementById("productcondition");
		
		// once the user clicks on the service bullet, make the product condition question disappear
		productcondition.style.display = "none";
		
		// inside the name field label, make it say the schemaType
		document.getElementById('schematypechoice').innerHTML = "Local Business";
		document.getElementById('schematypechoice2').innerHTML = "Local Business";
		document.getElementById('schematypechoice3').innerHTML = "Local Business";
		
	} else if (schemaType == "product") {
	
		// make a variable for the div that contains question 2
		let nextBlock = document.getElementById("nextBlock");
		
		// once the user clicks on the bullet, make question #2 appear
		nextBlock.style.display = "block";
		
		// inside the name field label, make it say the schemaType
		document.getElementById('schematypechoice').innerHTML = "Product";
		document.getElementById('schematypechoice2').innerHTML = "Product";
		document.getElementById('schematypechoice3').innerHTML = "Product";
		
		// make a variable for the div that contains the product condition question
		let productcondition = document.getElementById("productcondition");
		
		// once the user clicks on the product bullet, make the product condition question appear
		productcondition.style.display = "block";
		
	} else if (schemaType == "service") {
	
		// make a variable for the div that contains question 2
		let nextBlock = document.getElementById("nextBlock");
		
		// once the user clicks on the bullet, make question #2 appear
		nextBlock.style.display = "block";
		
		// make a variable for the div that contains the product condition question
		let productcondition = document.getElementById("productcondition");
		
		// once the user clicks on the service bullet, make the product condition question disappear
		productcondition.style.display = "none";
		
		// inside the name field label, make it say the schemaType
		document.getElementById('schematypechoice').innerHTML = "Service";
		document.getElementById('schematypechoice2').innerHTML = "Service";
		document.getElementById('schematypechoice3').innerHTML = "Service";
		
	} else {
	
		// make a variable for the div that contains questions 2 and beyond
		let nextBlock = document.getElementById("nextBlock");
		
		// if no bullet list has been selected, keep question 2 and beyond hidden
		nextBlock.style.display = "none";
		
	}
}

// don't allow the enter button to be pressed on input fields
function noenter() {
	return !(window.event && window.event.keyCode == 13);
}

///////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                           //
//                      OUTPUT VALID SCHEMA BASED ON THE USER'S CHOICES                      //
//                                                                                           //
///////////////////////////////////////////////////////////////////////////////////////////////

// the final output when the submit button is pressed
function outputSchema() {

	// GLOBAL VARIABLES
	const localBusinessBegin = '&lt;script type="application/ld+json"> { <br> &emsp;"@context": "https://schema.org", <br> &emsp;"@type": "LocalBusiness",';
	const productBegin = '&lt;script type="application/ld+json"> { <br> &emsp;"@context": "https://schema.org", <br> &emsp;"@type": "Product",';
	const serviceBegin = '&lt;script type="application/ld+json"> { <br> &emsp;"@context": "https://schema.org", <br> &emsp;"@type": "Service",';
	const lineEndComma = '",';
	const lineEnd = '"';
	const isThereAnotherReview = ',';
	const schemaEnd = '&lt;/script>';
	
	// make variables that contains user inputs
	//              check document,[   form name=""     ][input name=""].value
	let schemaType = document.forms["schemageneratorform"]["schematype"].value; // schema type
	let schemaName = document.forms["schemageneratorform"]["schemaname"].value; // product/service/business name
	let schemaCondition = document.forms["schemageneratorform"]["schemacondition"].value; // condition

	// This creates an array of the 3 schema type choices
	let schematypes = document.getElementsByName("schematype");
	
	/////////////////////////////////////////////////////////////////////////////////////////////
	//                                 LOCAL BUSINESS SCHEMA                                   //
	/////////////////////////////////////////////////////////////////////////////////////////////
	
	// if the schema type is LOCAL BUSINESS
	if (schemaType == "localbusiness") {
	
		// create a variable that says the chosen schema type was local business
		let chosenSchemaType = "Local Business";
		
		//////////////////////////////////////////////////////////////////////////
		//                                                                      //
		//                                                                      //
		//                                                                      //
		//                                                                      //
		//                                                                      //
		//                                                                      //
		//                                                                      //
		//                                                                      //
		//                                                                      //
		//////////////////////////////////////////////////////////////////////////
		
		
		// inside the output box, make it say the schemaType
		document.getElementById('output').innerHTML = chosenSchemaType;
		
	/////////////////////////////////////////////////////////////////////////////////////////////
	//                                     PRODUCT SCHEMA                                      //
	/////////////////////////////////////////////////////////////////////////////////////////////
		
	// if the schema type is PRODUCT
	} else if (schemaType == "product") {
	
		// create a variable that says the chosen schema type was product
		let chosenSchemaType = "Product";
		
		// whatever the user enters as the name in the name input field will become the variable called schemaName
		let schemaName = document.getElementById("schemaname").value;
		
		// whatever the user enters as the description in the description input field will become the variable called schemaDescription
		let schemaDescription = document.getElementById("schemadescription").value;
		
		// whatever the user enters an image URL into the input field will become the variable called schemaImage
		let schemaImage = document.getElementById("schemaimage").value;
		
		// whatever the user enters as alt name #1 will become the variable called altNameOne
		let altNameOne = document.getElementById("altnameone").value;
		
		// whatever the user enters as alt name #2 will become the variable called altNameTwo
		let altNameTwo = document.getElementById("altnametwo").value;
		
		
		// insert schema code for the condition based on what condition the user selects
		//if (schemaconditions[0].checked == true) {
		if (document.getElementById('schemacondition').value == "new") {
			
			// if the user selects the product condition as new, make a variable pointing to the schema page for new products
			let schemaCondition2 = "https://schema.org/NewCondition";
			
			// split the product schema into tons of parts
			let productName = '<br> &emsp;"name": "' + schemaName + lineEndComma;
			
			/* This is not working */
			if (altNameOne != "" && altNameOne != "") {
				alert("alt name 1 is not blank and alt 2 is not blank");
				let productAltNames = '<br> &emsp;"alternateName": [<br>&emsp;&emsp;"' + altNameOne + lineEndComma + '<br> &emsp;"alternateName": [<br>&emsp;&emsp;"' + altNameTwo + lineEnd + '&emsp;],';
			} else if (altNameOne == "" && altNameOne != "") {
				alert("alt name 1 is blank, but alt name 2 is not");
				let productAltNames = '<br> &emsp;"alternateName": [<br>&emsp;&emsp;"' + altNameTwo + lineEnd + '&emsp;],';
			} else if (altNameOne != "" && altNameOne == "") {
				alert("alt name 1 is not blank, but alt name 2 is");
				let productAltNames = '<br> &emsp;"alternateName": [<br>&emsp;&emsp;"' + altNameOne + lineEnd + '&emsp;],';
			}
			
			
			let productDesc = '<br> &emsp;"description": "' + schemaDescription + lineEndComma;
			let productImage = '<br> &emsp;"image": "' + schemaImage + lineEndComma;
			let productItemCond = '<br> &emsp;"itemCondition": "' + schemaCondition2 + lineEndComma;
			let productManufacturer = '<br> &emsp;"manufacturer": "Example Manufacturer Co' + lineEndComma;
			// need to do more work here
			let additionalProp = '<br> &emsp;"additionalProperty": [<br> &emsp;&emsp;"handicap accessible",<br> &emsp;&emsp;"Fun for the whole family"<br> &emsp;],';

			let aggregateRatingBegin = '<br> &emsp;"aggregateRating": {<br> &emsp;&emsp;"@type": "AggregateRating' + lineEndComma;
			let aggregateRatingValue = '<br> &emsp;&emsp;"ratingValue": "96' + lineEndComma;
			let aggregateRatingCount = '<br> &emsp;&emsp;"reviewCount": "42' + lineEndComma;
			let aggregateRatingBestRating = '<br> &emsp;&emsp;"bestRating": "100"<br> &emsp;},';

			let reviewsBegin = '<br> &emsp;"review": [';

			let reviewOneAuthor = '<br> &emsp;&emsp;{<br> &emsp;&emsp;&emsp;"@type": "Review",<br> &emsp;&emsp;&emsp;"author": "Jon' + lineEndComma;
			let reviewOneDatePublished = '<br> &emsp;&emsp;&emsp;"datePublished": "2016-12-01' + lineEndComma;
			let reviewOneDescription = '<br> &emsp;&emsp;&emsp;"description": "It looks wonderful and makes me very happy.' + lineEndComma;
			let reviewOneRatingBegin = '<br> &emsp;&emsp;&emsp;"reviewRating": {<br> &emsp;&emsp;&emsp;&emsp;"@type": "Rating' + lineEndComma;
			//Notice this one below is different?
			let reviewsBestRating = '<br> &emsp;&emsp;&emsp;&emsp;"bestRating": "100' + lineEndComma;
			let reviewOneRatingValue = '<br> &emsp;&emsp;&emsp;&emsp;"ratingValue": "99"<br> &emsp;&emsp;&emsp;}<br> &emsp;&emsp;}';

			// Notice that I have identified the LAST review as here instead of ReviewTwo?
			let lastReviewAuthor = '<br> &emsp;&emsp;{<br> &emsp;&emsp;&emsp;"@type": "Review",<br> &emsp;&emsp;&emsp;"author": "Denise' + lineEndComma;
			let lastReviewDatePublished = '<br> &emsp;&emsp;&emsp;"datePublished": "2017-04-19' + lineEndComma;
			let lastReviewDescription = '<br> &emsp;&emsp;&emsp;"description": "The installation was good, it didn\'t take long and there were no complications and everything came out great.' + lineEndComma;
			let lastReviewRatingBegin = '<br> &emsp;&emsp;&emsp;"reviewRating": {<br> &emsp;&emsp;&emsp;&emsp;"@type": "Rating' + lineEndComma;
			//Notice this one below is different?
			let lastReviewRatingValue = '<br> &emsp;&emsp;&emsp;&emsp;"ratingValue": "93"<br> &emsp;&emsp;&emsp;}<br> &emsp;&emsp;}';

			let reviewsEnd = '<br> &emsp;]<br>}<br>';

			let productSchemaOutput = productBegin + productName /* not working + productAltNames */ + productDesc + productImage + productItemCond + productManufacturer + additionalProp + aggregateRatingBegin + aggregateRatingValue + aggregateRatingCount + aggregateRatingBestRating + reviewsBegin + reviewOneAuthor + reviewOneDatePublished + reviewOneDescription + reviewOneRatingBegin + reviewsBestRating + reviewOneRatingValue + isThereAnotherReview + lastReviewAuthor + lastReviewDatePublished + lastReviewDescription + lastReviewRatingBegin + reviewsBestRating + lastReviewRatingValue + reviewsEnd + schemaEnd;

			// inside the output box, make it say the schemaType
			document.getElementById('output').innerHTML = productSchemaOutput;
			
		} else if (document.getElementById('schemacondition').value == "used") {
			
			// if the user selects the product condition as used, make a variable pointing to the schema page for used products
			let schemaCondition2 = "https://schema.org/UsedCondition";
			
			// split the product schema into tons of parts
			let productName = '<br> &emsp;"name": "' + schemaName + '",';
			
			if (altNameOne != "" && altNameOne != "") {
				alert("alt name 1 is not blank and alt 2 is not blank");
				let productAltNames = '<br> &emsp;"alternateName": [<br>&emsp;&emsp;"' + altNameOne + lineEndComma + '<br> &emsp;"alternateName": [<br>&emsp;&emsp;"' + altNameTwo + lineEnd + '&emsp;],';
			} else if (altNameOne == "" && altNameOne != "") {
				alert("alt name 1 is blank, but alt name 2 is not");
				let productAltNames = '<br> &emsp;"alternateName": [<br>&emsp;&emsp;"' + altNameTwo + lineEnd + '&emsp;],';
			} else if (altNameOne != "" && altNameOne == "") {
				alert("alt name 1 is not blank, but alt name 2 is");
				let productAltNames = '<br> &emsp;"alternateName": [<br>&emsp;&emsp;"' + altNameOne + lineEnd + '&emsp;],';
			}
			
			let productDesc = '<br> &emsp;"description": "' + schemaDescription + '",';
			let productImage = '<br> &emsp;"image": "' + schemaImage + '",';
			let productItemCond = '<br> &emsp;"itemCondition": "' + schemaCondition2 + '",';
			let productManufacturer = '<br> &emsp;"manufacturer": "Example Manufacturer Co",';
			// need to do more work here
			let additionalProp = '<br> &emsp;"additionalProperty": [<br> &emsp;&emsp;"handicap accessible",<br> &emsp;&emsp;"Fun for the whole family"<br> &emsp;],';

			let aggregateRatingBegin = '<br> &emsp;"aggregateRating": {<br> &emsp;&emsp;"@type": "AggregateRating",';
			let aggregateRatingValue = '<br> &emsp;&emsp;"ratingValue": "96",';
			let aggregateRatingCount = '<br> &emsp;&emsp;"reviewCount": "42",';
			let aggregateRatingBestRating = '<br> &emsp;&emsp;"bestRating": "100"<br> &emsp;},';

			let reviewsBegin = '<br> &emsp;"review": [';

			let reviewOneAuthor = '<br> &emsp;&emsp;{<br> &emsp;&emsp;&emsp;"@type": "Review",<br> &emsp;&emsp;&emsp;"author": "Jon",';
			let reviewOneDatePublished = '<br> &emsp;&emsp;&emsp;"datePublished": "2016-12-01",';
			let reviewOneDescription = '<br> &emsp;&emsp;&emsp;"description": "It looks wonderful and makes me very happy.",';
			let reviewOneRatingBegin = '<br> &emsp;&emsp;&emsp;"reviewRating": {<br> &emsp;&emsp;&emsp;&emsp;"@type": "Rating",';
			//Notice this one below is different?
			let reviewsBestRating = '<br> &emsp;&emsp;&emsp;&emsp;"bestRating": "100",';
			let reviewOneRatingValue = '<br> &emsp;&emsp;&emsp;&emsp;"ratingValue": "99"<br> &emsp;&emsp;&emsp;}<br> &emsp;&emsp;}';

			let isThereAnotherReview = ',';

			// Notice that I have identified the LAST review as here instead of ReviewTwo?
			let lastReviewAuthor = '<br> &emsp;&emsp;{<br> &emsp;&emsp;&emsp;"@type": "Review",<br> &emsp;&emsp;&emsp;"author": "Denise",';
			let lastReviewDatePublished = '<br> &emsp;&emsp;&emsp;"datePublished": "2017-04-19",';
			let lastReviewDescription = '<br> &emsp;&emsp;&emsp;"description": "The installation was good, it didn\'t take long and there were no complications and everything came out great.",';
			let lastReviewRatingBegin = '<br> &emsp;&emsp;&emsp;"reviewRating": {<br> &emsp;&emsp;&emsp;&emsp;"@type": "Rating",';
			//Notice this one below is different?
			let lastReviewRatingValue = '<br> &emsp;&emsp;&emsp;&emsp;"ratingValue": "93"<br> &emsp;&emsp;&emsp;}<br> &emsp;&emsp;}';

			let reviewsEnd = '<br> &emsp;]<br>}<br>';

			let productSchemaOutput = productBegin + productName /* not working + productAltNames */ + productDesc + productImage + productItemCond + productManufacturer + additionalProp + aggregateRatingBegin + aggregateRatingValue + aggregateRatingCount + aggregateRatingBestRating + reviewsBegin + reviewOneAuthor + reviewOneDatePublished + reviewOneDescription + reviewOneRatingBegin + reviewsBestRating + reviewOneRatingValue + isThereAnotherReview + lastReviewAuthor + lastReviewDatePublished + lastReviewDescription + lastReviewRatingBegin + reviewsBestRating + lastReviewRatingValue + reviewsEnd + schemaEnd;

			// inside the output box, make it say the schemaType
			document.getElementById('output').innerHTML = productSchemaOutput;
			
		} else if (document.getElementById('schemacondition').value == "refurbished") {
		
			// if the user selects the product condition as refurbished, make a variable pointing to the schema page for refurbished products
			let schemaCondition2 = "https://schema.org/RefurbishedCondition";
			
			// split the product schema into tons of parts
			let productName = '<br> &emsp;"name": "' + schemaName + '",';
			
			if (altNameOne != "" && altNameOne != "") {
				alert("alt name 1 is not blank and alt 2 is not blank");
				let productAltNames = '<br> &emsp;"alternateName": [<br>&emsp;&emsp;"' + altNameOne + lineEndComma + '<br> &emsp;"alternateName": [<br>&emsp;&emsp;"' + altNameTwo + lineEnd + '&emsp;],';
			} else if (altNameOne == "" && altNameOne != "") {
				alert("alt name 1 is blank, but alt name 2 is not");
				let productAltNames = '<br> &emsp;"alternateName": [<br>&emsp;&emsp;"' + altNameTwo + lineEnd + '&emsp;],';
			} else if (altNameOne != "" && altNameOne == "") {
				alert("alt name 1 is not blank, but alt name 2 is");
				let productAltNames = '<br> &emsp;"alternateName": [<br>&emsp;&emsp;"' + altNameOne + lineEnd + '&emsp;],';
			}
			
			let productDesc = '<br> &emsp;"description": "' + schemaDescription + '",';
			let productImage = '<br> &emsp;"image": "' + schemaImage + '",';
			let productItemCond = '<br> &emsp;"itemCondition": "' + schemaCondition2 + '",';
			let productManufacturer = '<br> &emsp;"manufacturer": "Example Manufacturer Co",';
			// need to do more work here
			let additionalProp = '<br> &emsp;"additionalProperty": [<br> &emsp;&emsp;"handicap accessible",<br> &emsp;&emsp;"Fun for the whole family"<br> &emsp;],';

			let aggregateRatingBegin = '<br> &emsp;"aggregateRating": {<br> &emsp;&emsp;"@type": "AggregateRating",';
			let aggregateRatingValue = '<br> &emsp;&emsp;"ratingValue": "96",';
			let aggregateRatingCount = '<br> &emsp;&emsp;"reviewCount": "42",';
			let aggregateRatingBestRating = '<br> &emsp;&emsp;"bestRating": "100"<br> &emsp;},';

			let reviewsBegin = '<br> &emsp;"review": [';

			let reviewOneAuthor = '<br> &emsp;&emsp;{<br> &emsp;&emsp;&emsp;"@type": "Review",<br> &emsp;&emsp;&emsp;"author": "Jon",';
			let reviewOneDatePublished = '<br> &emsp;&emsp;&emsp;"datePublished": "2016-12-01",';
			let reviewOneDescription = '<br> &emsp;&emsp;&emsp;"description": "It looks wonderful and makes me very happy.",';
			let reviewOneRatingBegin = '<br> &emsp;&emsp;&emsp;"reviewRating": {<br> &emsp;&emsp;&emsp;&emsp;"@type": "Rating",';
			//Notice this one below is different?
			let reviewsBestRating = '<br> &emsp;&emsp;&emsp;&emsp;"bestRating": "100",';
			let reviewOneRatingValue = '<br> &emsp;&emsp;&emsp;&emsp;"ratingValue": "99"<br> &emsp;&emsp;&emsp;}<br> &emsp;&emsp;}';

			let isThereAnotherReview = ',';

			// Notice that I have identified the LAST review as here instead of ReviewTwo?
			let lastReviewAuthor = '<br> &emsp;&emsp;{<br> &emsp;&emsp;&emsp;"@type": "Review",<br> &emsp;&emsp;&emsp;"author": "Denise",';
			let lastReviewDatePublished = '<br> &emsp;&emsp;&emsp;"datePublished": "2017-04-19",';
			let lastReviewDescription = '<br> &emsp;&emsp;&emsp;"description": "The installation was good, it didn\'t take long and there were no complications and everything came out great.",';
			let lastReviewRatingBegin = '<br> &emsp;&emsp;&emsp;"reviewRating": {<br> &emsp;&emsp;&emsp;&emsp;"@type": "Rating",';
			//Notice this one below is different?
			let lastReviewRatingValue = '<br> &emsp;&emsp;&emsp;&emsp;"ratingValue": "93"<br> &emsp;&emsp;&emsp;}<br> &emsp;&emsp;}';

			let reviewsEnd = '<br> &emsp;]<br>}<br>';

			let productSchemaOutput = productBegin /* not working + productAltNames */ + productName + productDesc + productImage + productItemCond + productManufacturer + additionalProp + aggregateRatingBegin + aggregateRatingValue + aggregateRatingCount + aggregateRatingBestRating + reviewsBegin + reviewOneAuthor + reviewOneDatePublished + reviewOneDescription + reviewOneRatingBegin + reviewsBestRating + reviewOneRatingValue + isThereAnotherReview + lastReviewAuthor + lastReviewDatePublished + lastReviewDescription + lastReviewRatingBegin + reviewsBestRating + lastReviewRatingValue + reviewsEnd + schemaEnd;

			// inside the output box, make it say the schemaType
			document.getElementById('output').innerHTML = productSchemaOutput;
		
		} else if (document.getElementById('schemacondition').value == "damaged") {
			
			// if the user selects the product condition as damaged, make a variable pointing to the schema page for damaged products
			let schemaCondition2 = "https://schema.org/DamagedCondition";
			
			// split the product schema into tons of parts
			let productName = '<br> &emsp;"name": "' + schemaName + '",';
			
			if (altNameOne != "" && altNameOne != "") {
				alert("alt name 1 is not blank and alt 2 is not blank");
				let productAltNames = '<br> &emsp;"alternateName": [<br>&emsp;&emsp;"' + altNameOne + lineEndComma + '<br> &emsp;"alternateName": [<br>&emsp;&emsp;"' + altNameTwo + lineEnd + '&emsp;],';
			} else if (altNameOne == "" && altNameOne != "") {
				alert("alt name 1 is blank, but alt name 2 is not");
				let productAltNames = '<br> &emsp;"alternateName": [<br>&emsp;&emsp;"' + altNameTwo + lineEnd + '&emsp;],';
			} else if (altNameOne != "" && altNameOne == "") {
				alert("alt name 1 is not blank, but alt name 2 is");
				let productAltNames = '<br> &emsp;"alternateName": [<br>&emsp;&emsp;"' + altNameOne + lineEnd + '&emsp;],';
			}
			
			let productDesc = '<br> &emsp;"description": "' + schemaDescription + '",';
			let productImage = '<br> &emsp;"image": "' + schemaImage + '",';
			let productItemCond = '<br> &emsp;"itemCondition": "' + schemaCondition2 + '",';
			let productManufacturer = '<br> &emsp;"manufacturer": "Example Manufacturer Co",';
			// need to do more work here
			let additionalProp = '<br> &emsp;"additionalProperty": [<br> &emsp;&emsp;"handicap accessible",<br> &emsp;&emsp;"Fun for the whole family"<br> &emsp;],';

			let aggregateRatingBegin = '<br> &emsp;"aggregateRating": {<br> &emsp;&emsp;"@type": "AggregateRating",';
			let aggregateRatingValue = '<br> &emsp;&emsp;"ratingValue": "96",';
			let aggregateRatingCount = '<br> &emsp;&emsp;"reviewCount": "42",';
			let aggregateRatingBestRating = '<br> &emsp;&emsp;"bestRating": "100"<br> &emsp;},';

			let reviewsBegin = '<br> &emsp;"review": [';

			let reviewOneAuthor = '<br> &emsp;&emsp;{<br> &emsp;&emsp;&emsp;"@type": "Review",<br> &emsp;&emsp;&emsp;"author": "Jon",';
			let reviewOneDatePublished = '<br> &emsp;&emsp;&emsp;"datePublished": "2016-12-01",';
			let reviewOneDescription = '<br> &emsp;&emsp;&emsp;"description": "It looks wonderful and makes me very happy.",';
			let reviewOneRatingBegin = '<br> &emsp;&emsp;&emsp;"reviewRating": {<br> &emsp;&emsp;&emsp;&emsp;"@type": "Rating",';
			//Notice this one below is different?
			let reviewsBestRating = '<br> &emsp;&emsp;&emsp;&emsp;"bestRating": "100",';
			let reviewOneRatingValue = '<br> &emsp;&emsp;&emsp;&emsp;"ratingValue": "99"<br> &emsp;&emsp;&emsp;}<br> &emsp;&emsp;}';

			let isThereAnotherReview = ',';

			// Notice that I have identified the LAST review as here instead of ReviewTwo?
			let lastReviewAuthor = '<br> &emsp;&emsp;{<br> &emsp;&emsp;&emsp;"@type": "Review",<br> &emsp;&emsp;&emsp;"author": "Denise",';
			let lastReviewDatePublished = '<br> &emsp;&emsp;&emsp;"datePublished": "2017-04-19",';
			let lastReviewDescription = '<br> &emsp;&emsp;&emsp;"description": "The installation was good, it didn\'t take long and there were no complications and everything came out great.",';
			let lastReviewRatingBegin = '<br> &emsp;&emsp;&emsp;"reviewRating": {<br> &emsp;&emsp;&emsp;&emsp;"@type": "Rating",';
			//Notice this one below is different?
			let lastReviewRatingValue = '<br> &emsp;&emsp;&emsp;&emsp;"ratingValue": "93"<br> &emsp;&emsp;&emsp;}<br> &emsp;&emsp;}';

			let reviewsEnd = '<br> &emsp;]<br>}<br>';

			let productSchemaOutput = productBegin + productName /* not working + productAltNames */ + productDesc + productImage + productItemCond + productManufacturer + additionalProp + aggregateRatingBegin + aggregateRatingValue + aggregateRatingCount + aggregateRatingBestRating + reviewsBegin + reviewOneAuthor + reviewOneDatePublished + reviewOneDescription + reviewOneRatingBegin + reviewsBestRating + reviewOneRatingValue + isThereAnotherReview + lastReviewAuthor + lastReviewDatePublished + lastReviewDescription + lastReviewRatingBegin + reviewsBestRating + lastReviewRatingValue + reviewsEnd + schemaEnd;

			// inside the output box, make it say the schemaType
			document.getElementById('output').innerHTML = productSchemaOutput;
			
		} else {
			alert("You should not see this message.");
		}
		///// **END ONLY APPLIES TO PRODUCT SCHEMA SECTION


		// Display an option to have the outputted schema email to the user
		let emailtext = "Click the button below to have your schema emailed to you as well. ";

		// give people the option to get their schema export emailed to them if they wish
		document.getElementById('emailoutput').innerHTML = emailtext;
		
	/////////////////////////////////////////////////////////////////////////////////////////////
	//                                    SERVICE SCHEMA                                       //
	/////////////////////////////////////////////////////////////////////////////////////////////
		
	// if the schema type is SERVICE
	} else if (schemaType == "service") {
	
		// create a variable that says the chosen schema type was service
		let chosenSchemaType = "Service";
		
		// whatever the user enters as the name in the name input field will become the variable called schemaName
		let schemaName = document.getElementById("schemaname").value;
		
		//combine everything together
		let serviceOutput = chosenSchemaType + " " + schemaName;
		
		//////////////////////////////////////////////////////////////////////////
		//                                                                      //
		//                                                                      //
		//                                                                      //
		//                                                                      //
		//                                                                      //
		//                                                                      //
		//                                                                      //
		//                                                                      //
		//                                                                      //
		//////////////////////////////////////////////////////////////////////////
		
		
		
		// inside the output box, make it say the schemaType
		document.getElementById('output').innerHTML = serviceOutput;
		
	// if no schema type has been selected
	} else {

	}
}
