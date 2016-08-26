$(document).ready( function () {
	console.log("Działa");

	// tworzymy referencje do DOM
	var $skillBox = $('.skills__all-skills-container');

	$skillBox.on('click', '.single-skill__image', function () {
		console.log($(this).data('desc'));
	});

});