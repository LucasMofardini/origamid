//mudar tab ao click
$('[data-group]').each(function() {
    var $allTarget = $(this).find('[data-target]'),
        $allClick = $(this).find('[data-click]'),
        activeClass = 'active';

    $allTarget.first().addClass(activeClass);
    $allClick.first().addClass(activeClass);

    $allClick.click(function(e) {
        e.preventDefault();

        var id = $(this).data('click'),
            $target = $('[data-target="' + id + '"]');

        $allClick.removeClass(activeClass);
        $allTarget.removeClass(activeClass);

        $target.addClass(activeClass);
        $(this).addClass(activeClass);
    });
});

//scroll suave link interno
$('.menu-nav a[href^="#"]').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        menuHeight = $('.menu').innerHeight(),
        targetOffset = $(id).offset().top;
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    }, 500);
});
//scroll suave logo pro topo

$('.logo').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 500)
});
//mudar pra active conforme a area
$('section').each(function() {
    var height = $(this).height(),
        offsetTop = $(this).offset().top,
        menuHeight = $('.menu').innerHeight(),
        id = $(this).attr('id'),
        $itemMenu = $('a[href="#' + id + '"]');

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (offsetTop - menuHeight < scrollTop && offsetTop + height - menuHeight > scrollTop) {
            $itemMenu.addClass('active');
        } else {
            $itemMenu.removeClass('active');
        }
    });
});


$('.mobile-btn').click(function() {
    $(this).toggleClass('active');
    $('.mobile-menu').toggleClass('active');
});

//deixa ativo o primeiro slide
function slider(SliderName) {
    var sliderClass = '.' + SliderName;
    var activeClass = 'active';
    var rotate = setInterval(rotateSlide, 500);
    $(sliderClass + ' > :first').addClass(activeClass);

    $(sliderClass).hover(function() {
        clearInterval(rotate);
    }, function() {
        rotate = setInterval(rotateSlide, 500);
    });

    function rotateSlide() {
        var activeSlide = $(sliderClass + ' > .active'),
            nextSlide = activeSlide.next();
        //pega o tamanho do proximo slide e se for igual a zero, atribui o primeiro slide para o proximo
        if (nextSlide.length == 0) {
            nextSlide = $(sliderClass + ' > :first');
        }
        activeSlide.removeClass(activeClass);
        nextSlide.addClass(activeClass);
    }


}
slider('introdução');