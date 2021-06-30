$('.menu-btn').on('click', () => {
  $('.menu-btn').toggleClass('menu-btn_active');
  $('.dropdown').toggleClass('dropdown_active');
  $('body').toggleClass('body-active');
});

var isAnimatePriceInitialized = false;
var serversTop = $(".container-2").offset().top;

function animatePrice(){
    $({numberValue: 0}).animate({numberValue: 75}, {
        duration: 1500, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
        easing: "linear",
        step: function(val) {
            $(".con-3_block-1_content_1_text-2-1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
            $('.con-3_subscale-1').css('width', '75%');
        }
    });
    $({numberValue: 0}).animate({numberValue: 90}, {
        duration: 1500, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
        easing: "linear",
        step: function(val) {
            $(".con-3_block-1_content_1_text-2-2").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
            $('.con-3_subscale-2').css('width', '90%');
        }
    });
    $({numberValue: 0}).animate({numberValue: 65}, {
        duration: 1500, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
        easing: "linear",
        step: function(val) {
            $(".con-3_block-1_content_1_text-2-3").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
            $('.con-3_subscale-3').css('width', '65%');
        }
    });
    isAnimatePriceInitialized = true;
}

$(window).scroll(function() {
    if ($(this).scrollTop() > serversTop){
        if (!isAnimatePriceInitialized) {
            animatePrice();
        }
    }
});

$('.dop-con-5_block').hide();
$('.container-6').on('click', () => {
  $('.con-6_block-2').toggleClass('con-6_block-2_active');
  $('.con-6_block').toggleClass('con-6_block_active');
  $('.dop-con-5_block').slideToggle();
});

$('.video').parent().click(function () {

  if($(this).children(".video").get(0).paused){       
 $(this).children(".video").get(0).play();   
$(this).children(".playpause").fadeOut();

    }else{      
 $(this).children(".video").get(0).pause();

  $(this).children(".playpause").fadeIn();

    }

});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      loop:true,
      nav:false,
      navClass: ['slider_nav-left', 'slider_nav-right'],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })
});




$('.con-11_button').on('click', () => {
  $('.block-send').addClass('block-send_active');
  $('.wrapper--check').classList.add('animated')
});
$('.block-send_closed_block').on('click', () => {
  $('.block-send').removeClass('block-send_active');
});

var button = document.querySelector('.con-11_button');
var blockCheck = document.querySelector('.block-check');
var checkmark = document.querySelector('svg');
var className = "animate";

button.addEventListener('click', function(){
  if (!checkmark.classList.contains(className)) {
    checkmark.classList.add(className);
    
    setTimeout(function(){      
        checkmark.classList.remove(className);
    }, 60000);  
  } 
});

$('.content1').on('click', () => {
  $('.modal-img1').addClass('modal-img_active');
  $('.img-closed').css('display', 'block');
  $('.block-for-modal-img').addClass('block-for-modal-img_active');
});
$('.content2').on('click', () => {
  $('.modal-img2').addClass('modal-img_active');
  $('.img-closed').css('display', 'block');
  $('.block-for-modal-img').addClass('block-for-modal-img_active');
});
$('.content3').on('click', () => {
  $('.modal-img3').addClass('modal-img_active');
  $('.img-closed').css('display', 'block');
  $('.block-for-modal-img').addClass('block-for-modal-img_active');
});
$('.content4').on('click', () => {
  $('.modal-img4').addClass('modal-img_active');
  $('.img-closed').css('display', 'block');
  $('.block-for-modal-img').addClass('block-for-modal-img_active');
});
$('.content5').on('click', () => {
  $('.modal-img5').addClass('modal-img_active');
  $('.img-closed').css('display', 'block');
  $('.block-for-modal-img').addClass('block-for-modal-img_active');
});
$('.content6').on('click', () => {
  $('.modal-img6').addClass('modal-img_active');
  $('.img-closed').css('display', 'block');
  $('.block-for-modal-img').addClass('block-for-modal-img_active');
});
$('.content7').on('click', () => {
  $('.modal-img7').addClass('modal-img_active');
  $('.img-closed').css('display', 'block');
  $('.block-for-modal-img').addClass('block-for-modal-img_active');
});
$('.content8').on('click', () => {
  $('.modal-img8').addClass('modal-img_active');
  $('.img-closed').css('display', 'block');
  $('.block-for-modal-img').addClass('block-for-modal-img_active');
});
$('.img-closed').on('click', () => {
  $('.modal-img1').removeClass('modal-img_active');
  $('.modal-img2').removeClass('modal-img_active');
  $('.modal-img3').removeClass('modal-img_active');
  $('.modal-img4').removeClass('modal-img_active');
  $('.modal-img5').removeClass('modal-img_active');
  $('.modal-img6').removeClass('modal-img_active');
  $('.modal-img7').removeClass('modal-img_active');
  $('.modal-img8').removeClass('modal-img_active');
  $('.img-closed').css('display', 'none');
  $('.block-for-modal-img').removeClass('block-for-modal-img_active');
});
$('.block-for-modal-img').on('click', () => {
  $('.modal-img1').removeClass('modal-img_active');
  $('.modal-img2').removeClass('modal-img_active');
  $('.modal-img3').removeClass('modal-img_active');
  $('.modal-img4').removeClass('modal-img_active');
  $('.modal-img5').removeClass('modal-img_active');
  $('.modal-img6').removeClass('modal-img_active');
  $('.modal-img7').removeClass('modal-img_active');
  $('.modal-img8').removeClass('modal-img_active');
  $('.img-closed').css('display', 'none');
  $('.block-for-modal-img').removeClass('block-for-modal-img_active');
});