
  const slider = tns({
      container: '.carousel__slider',
      items: 1,
      slideBy: 'page',
      autoplay: false,
      controls: false,
      nav: false
    });
    document.querySelector('.click__left').onclick = function () {
      slider.goTo('prev'); 
    };
    document.querySelector('.click__right').onclick = function () {
      slider.goTo('next'); };
  
$('ul.catalog__subheader').on('click', 'li:not(.catalog__descr_active)', function() {
  $(this)
    .addClass('catalog__descr_active').siblings().removeClass('catalog__descr_active')
    .closest('div.contener').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

$('.catalog-item__link').each(function(i){
    $(this).on('click', function(e){
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
})
$('.catalog-item_back').each(function(i){
  $(this).on('click', function(e){
    e.preventDefault();
    $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  })
})
 //modal

 $('[data-modal=consultation_menu]').on('click',function( ){
   $('.overley, #consultation').fadeIn('slow');
 });
 $('.modal__close').on('click',function(){
  $('.overley, #consultation , #order , #mini ').fadeOut('slow'); 
  });


  $('.button__buy').each(function(i){
    $(this).on('click', function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overley, #order').fadeIn('slow');
    })
  })
//POST GO GO GO

  $('form').submit(function(e) {
    e.preventDefault();

       

        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #mini').fadeIn('fast');

            $('form').trigger('reset');
        });
    
    return false;
});
new WOW().init();

//
