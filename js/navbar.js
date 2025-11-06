$(document).ready(function() {
    const $mobileMenuButton = $('#mobile-menu-button');
    const $mobileMenu = $('#mobile-menu');
    const $openIcon = $('#openIcon');
    const $closeIcon = $('#closeIcon');

    // Toggle mobile menu
    $mobileMenuButton.on('click', function(e) {
        e.stopPropagation(); // Prevent event from bubbling up to document
        const isExpanded = $(this).attr('aria-expanded') === 'true' || false;
        $(this).attr('aria-expanded', !isExpanded);
        $mobileMenu.toggleClass('hidden');
        $openIcon.toggleClass('hidden');
        $closeIcon.toggleClass('hidden');
    });

    // Close mobile menu when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#mobile-menu, #mobile-menu-button').length) {
            if (!$mobileMenu.hasClass('hidden')) {
                $mobileMenu.addClass('hidden');
                $openIcon.removeClass('hidden');
                $closeIcon.addClass('hidden');
                $mobileMenuButton.attr('aria-expanded', 'false');
            }
        }
    });
});