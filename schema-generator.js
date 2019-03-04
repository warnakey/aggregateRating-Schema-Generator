/* Copyright ©, 2019, Eric Warncke. ericwarncke@gmail.com */

"use strict";

jQuery(document).ready(function() {
	let schema_count = 1;
	// whenever ADD SCHEMA REVIEW button is clicked
	$('.addreviewschema').click(function(e) {
		e.preventDefault();
		// add the following code inside the INDIVIDUAL REVIEWS div
		$(".individualreviews").append(

			// opening tag
			'<li><div class="footer-schema">'
		  + '<h4>REVIEW #' + schema_count + '</h4>'

			// review author 
		  + '<div class="questionSixteen"><p>What is the name of the person that wrote the review?</p><label for="reviewauthor' + schema_count + '">Reviewer\'s Name: </label><input type="text" id="reviewauthor' + schema_count + '" name="reviewauthor' + schema_count + '" onKeyPress="return noenter()"></div>'

			// review date
		  + '<div class="questionSeventeen"><p>What is the date that the review was written?</p><label for="reviewdate' + schema_count + '">Review Date: </label><input type="text" id="reviewdate' + schema_count + '" name="reviewdate' + schema_count + '" onKeyPress="return noenter()"></div>'

			// review text
		  + '<div class="questionEighteen"><p>Enter the review below.</p><label for="reviewtext' + schema_count + '">Review: </label><textarea type="text" id="reviewtext' + schema_count + '" name="reviewtext' + schema_count + '" rows="5" onKeyPress="return noenter()"></textarea></div>'

			// review score
		  + '<div class="questionNineteen"><p>What is the score that the reviewer left?</p><label for="reviewscore' + schema_count + '">Reviewer\'s Score: </label><!-- write a rule later that says IF the score left below is higher than question 14, make the form spit an error message --><input type="text" id="reviewscore' + schema_count + '" name="reviewscore' + schema_count + '" value="100" onKeyPress="return noenter()"></div>'

			// closing tag
		  + '</div><br>'

			// this is the thing people will click to delete the review if they choose
		  + '<a href="#" class="deletereviewschema">Delete Review</a></li>');

		// increase the schema count by 1 every time someone clicks the ADD REVIEW button
		schema_count++;
		
	});

	// if someone clicks the DELETE REVIEW button, do this
	$('.individualreviews').on('click', '.deletereviewschema', function(f) {
		f.preventDefault();

		$(this).parent().remove();
		
		schema_count--;

		if (schema_count <= 0) {
			let schema_count = 1;
		}
	});

	// TESTING REMOVE LATER
	/*$('.add_project_file').click(function(g) {
		g.preventDefault();
		$(".project_images").append(
			'<li>'
		  + '<a href="#" class="remove_project_file" border="2" style="float: left;width: 100%;">DELETE</a>'
		  + '</li>');
	});
	// Remove parent of 'remove' link when link is clicked.
	$('.project_images').on('click', '.remove_project_file', function(h) {
		h.preventDefault();

		$(this).parent().remove();
	});*/
});


// Remove parent of 'remove' link when link is clicked.
$('.project_images').on('click', '.remove_project_file', function(e) {
    e.preventDefault();

    $(this).parent().remove();
});

function resetpage() {
  location.reload();
}

// this function let's question 2 appear when a bullet is clicked
function nextQuestion() {
	// This creates an array of the 3 schema type choices
	let schematypes = document.getElementsByName("schematype");
	
	// if the schema type is LOCAL BUSINESS
	if (schematypes[0].checked == true) {
	
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
		
	} else if (schematypes[1].checked == true) {
	
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
		
	} else if (schematypes[2].checked == true) {
	
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
	let altSchemaName = document.forms["schemageneratorform"]["altschemaname"].value; // alternate name
	let schemaCondition = document.forms["schemageneratorform"]["schemacondition"].value; // condition

	// This creates an array of the 3 schema type choices
	let schematypes = document.getElementsByName("schematype");
	
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
		
		
		
		
		///// **ONLY APPLIES TO PRODUCT SCHEMA, spit out the condition of the product
		// This creates an array of the 4 product condition types
		//let schemaconditions = document.getElementsByName("schemacondition");
		
		// insert schema code for the condition based on what condition the user selects
		//if (schemaconditions[0].checked == true) {
		if (document.getElementById('schemacondition').value == "new") {
			
			// if the user selects the product condition as new, make a variable pointing to the schema page for new products
			let schemaCondition2 = "https://schema.org/NewCondition";
			
			// split the product schema into tons of parts
			let productName = '<br> &emsp;"name": "' + schemaName + lineEndComma;
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

			let productSchemaOutput = productBegin + productName + productDesc + productImage + productItemCond + productManufacturer + additionalProp + aggregateRatingBegin + aggregateRatingValue + aggregateRatingCount + aggregateRatingBestRating + reviewsBegin + reviewOneAuthor + reviewOneDatePublished + reviewOneDescription + reviewOneRatingBegin + reviewsBestRating + reviewOneRatingValue + isThereAnotherReview + lastReviewAuthor + lastReviewDatePublished + lastReviewDescription + lastReviewRatingBegin + reviewsBestRating + lastReviewRatingValue + reviewsEnd + schemaEnd;

			// inside the output box, make it say the schemaType
			document.getElementById('output').innerHTML = productSchemaOutput;
			
		} else if (document.getElementById('schemacondition').value == "used") {
			
			// if the user selects the product condition as used, make a variable pointing to the schema page for used products
			let schemaCondition2 = "https://schema.org/UsedCondition";
			
			// split the product schema into tons of parts
			let productName = '<br> &emsp;"name": "' + schemaName + '",';
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

			let productSchemaOutput = productBegin + productName + productDesc + productImage + productItemCond + productManufacturer + additionalProp + aggregateRatingBegin + aggregateRatingValue + aggregateRatingCount + aggregateRatingBestRating + reviewsBegin + reviewOneAuthor + reviewOneDatePublished + reviewOneDescription + reviewOneRatingBegin + reviewsBestRating + reviewOneRatingValue + isThereAnotherReview + lastReviewAuthor + lastReviewDatePublished + lastReviewDescription + lastReviewRatingBegin + reviewsBestRating + lastReviewRatingValue + reviewsEnd + schemaEnd;

			// inside the output box, make it say the schemaType
			document.getElementById('output').innerHTML = productSchemaOutput;
			
		} else if (document.getElementById('schemacondition').value == "refurbished") {
		
			// if the user selects the product condition as refurbished, make a variable pointing to the schema page for refurbished products
			let schemaCondition2 = "https://schema.org/RefurbishedCondition";
			
			// split the product schema into tons of parts
			let productName = '<br> &emsp;"name": "' + schemaName + '",';
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

			let productSchemaOutput = productBegin + productName + productDesc + productImage + productItemCond + productManufacturer + additionalProp + aggregateRatingBegin + aggregateRatingValue + aggregateRatingCount + aggregateRatingBestRating + reviewsBegin + reviewOneAuthor + reviewOneDatePublished + reviewOneDescription + reviewOneRatingBegin + reviewsBestRating + reviewOneRatingValue + isThereAnotherReview + lastReviewAuthor + lastReviewDatePublished + lastReviewDescription + lastReviewRatingBegin + reviewsBestRating + lastReviewRatingValue + reviewsEnd + schemaEnd;

			// inside the output box, make it say the schemaType
			document.getElementById('output').innerHTML = productSchemaOutput;
		
		} else if (document.getElementById('schemacondition').value == "damaged") {
			
			// if the user selects the product condition as damaged, make a variable pointing to the schema page for damaged products
			let schemaCondition2 = "https://schema.org/DamagedCondition";
			
			// split the product schema into tons of parts
			let productName = '<br> &emsp;"name": "' + schemaName + '",';
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

			let productSchemaOutput = productBegin + productName + productDesc + productImage + productItemCond + productManufacturer + additionalProp + aggregateRatingBegin + aggregateRatingValue + aggregateRatingCount + aggregateRatingBestRating + reviewsBegin + reviewOneAuthor + reviewOneDatePublished + reviewOneDescription + reviewOneRatingBegin + reviewsBestRating + reviewOneRatingValue + isThereAnotherReview + lastReviewAuthor + lastReviewDatePublished + lastReviewDescription + lastReviewRatingBegin + reviewsBestRating + lastReviewRatingValue + reviewsEnd + schemaEnd;

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