/* Slider */
$(function() {
	var $slideNow = 1,
		$slideCount = $('.carousel-list').children().length,
		$dotId = 1,
		$translateWidth = 0;

	function dotNow() {
		$('.dot').removeClass('js-dot-active').eq($slideNow - 1).addClass('js-dot-active');
	}

	function nextSlide() {
		if ($slideNow === $slideCount || $slideNow <= 0 || $slideNow > $slideCount) { // возврат к первому слайду
			$('.carousel-list').css('transform', 'translate(0, 0)');
			$slideNow = 1;
			dotNow();
		}
		else {
			$translateWidth = -$('.carousel').width() * ($slideNow);
			$('.carousel-list').css({
				'transform': 'translate(' + $translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + $translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + $translateWidth + 'px, 0)',
			});
			$slideNow++;
			dotNow();
		}

	}

	function prevSlide() {
		if ($slideNow === 1 || $slideNow <= 0 || $slideNow > $slideCount) { // переход к последнему слайду
			$translateWidth = -$('.carousel').width() * ($slideCount - 1);
			$('.carousel-list').css({
				'transform': 'translate(' + $translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + $translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + $translateWidth + 'px, 0)',
			});
			$slideNow = $slideCount;
			dotNow();
		}
		else {
			$translateWidth = -$('.carousel').width() * ($slideNow - 2);
			$('.carousel-list').css({
				'transform': 'translate(' + $translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + $translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + $translateWidth + 'px, 0)',
			});
			$slideNow--;
			dotNow();
		}

	}

	$('.slide-button__next').on('click', function() {
		nextSlide();
	});

	$('.slide-button__prev').on('click', function() {
		prevSlide();
	});

	$('.dot').on('click', function() {
		$dotId = $(this).index();

		$('.dot').removeClass('js-dot-active');
		$(this).addClass('js-dot-active');

		if ($dotId + 1 !== $slideNow) {
			$translateWidth = -$('.carousel').width() * ($dotId);
			$('.carousel-list').css({
				'transform': 'translate(' + $translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + $translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + $translateWidth + 'px, 0)',
			});
			$slideNow = $dotId + 1;
		}
	});

});
