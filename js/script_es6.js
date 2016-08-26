$(document).ready( function () {
	console.log("Działa");

	// tworzymy referencje do DOM
	var $portfolio = $('.portfolio'),
		$modal = $('.portfolio__modal');

	$portfolio.on('click', '.single-project', function () {
		$this = $(this);
		$modal.toggleClass('portfolio__modal--hidden');
		$modal.child().html($this.find('.single-project__caption').text());
	});
});