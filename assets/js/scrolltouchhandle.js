$(document).ready(function() {
    function enableScrollEffect($element) {
        var $scrollGradientLeft = $element.siblings('.scroll-gradient.left');
        var $scrollGradientRight = $element.siblings('.scroll-gradient.right');

        function updateScrollEffect() {
            var scrollLeft = $element.scrollLeft();
            var maxScrollLeft = $element[0].scrollWidth - $element.outerWidth();

            if (scrollLeft === 0) {
                $scrollGradientLeft.css('opacity', 0);
            } else {
                $scrollGradientLeft.css('opacity', 1);
            }

            if (scrollLeft >= maxScrollLeft - 1) { // Use a small tolerance for Chrome
                $scrollGradientRight.css('opacity', 0);
            } else {
                $scrollGradientRight.css('opacity', 1);
            }
        }

        $element.swipe({
            swipeStatus: function(event, phase, direction, distance, duration, fingers) {
                var scrollLeft = $element.scrollLeft();

                if (phase === "move" && (direction === "left" || direction === "right")) {
                    if (direction === "left") {
                        $element.scrollLeft(scrollLeft + distance);
                    }
                    if (direction === "right") {
                        $element.scrollLeft(scrollLeft - distance);
                    }
                    updateScrollEffect();
                }
            },
            threshold: 0,
            fingers: 'all'
        });

        $element.on('mousedown', function(e) {
            var startX = e.pageX;
            var scrollLeft = $element.scrollLeft();

            $(document).on('mousemove.detailsMainArea', function(e) {
                var x = e.pageX;
                $element.scrollLeft(scrollLeft - (x - startX));
                updateScrollEffect();
            });

            $(document).on('mouseup.detailsMainArea', function() {
                $(document).off('.detailsMainArea');
            });

            return false;
        });

        $element.on('scroll', function() {
            updateScrollEffect();
        });

        // Initial call to set the correct state
        updateScrollEffect();
    }

    // Apply the scroll effect to each .details-main-area
    $('.details-main-area').each(function() {
        enableScrollEffect($(this));
    });
});
