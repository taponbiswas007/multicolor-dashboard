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
                var scrollTop = $element.scrollTop(); // Capture scrollTop for vertical scroll
        
                if (phase === "move") {
                    if (direction === "left") {
                        $element.scrollLeft(scrollLeft + distance);
                    }
                    if (direction === "right") {
                        $element.scrollLeft(scrollLeft - distance);
                    }
                    if (direction === "up") { // Handle vertical scroll up
                        $element.scrollTop(scrollTop - distance);
                    }
                    if (direction === "down") { // Handle vertical scroll down
                        $element.scrollTop(scrollTop + distance);
                    }
                    updateScrollEffect();
                }
            },
            threshold: 0,
            fingers: 'all'
        });
        

        $element.on('touchstart', function(e) {
            var startX = e.originalEvent.touches[0].pageX;
            var scrollLeft = $element.scrollLeft();
        
            $(document).on('touchmove.detailsMainArea', function(e) {
                var x = e.originalEvent.touches[0].pageX;
                $element.scrollLeft(scrollLeft - (x - startX));
                updateScrollEffect();
            });
        
            $(document).on('touchend.detailsMainArea', function() {
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
