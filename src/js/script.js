//*hamburger-menu part



document.querySelector('.hamburger-menu').addEventListener('click', function (event) {

  event.stopPropagation();

  // document.querySelector('.mobile_version').classList.toggle('open');

  // document.querySelector('.hamburger-menu').classList.toggle('open');

  $('.mobile_version').fadeToggle()
  
  

});

document.querySelector(".mobile-close").addEventListener("click", function (event) {

  event.stopPropagation();

  $('.mobile_version').fadeToggle()


});


//general_page first_swiper

const swiper = new Swiper('#first_swiper_container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
 

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  
});


//general_page second_swiper

const second_swiper = new Swiper('#second_swiper_container', {
  
  direction: 'horizontal',
  loop: true,
  loopedSlides: 10,
    roundLengths: true,
  slidesPerView: 5,
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    324: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    330: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    340: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    350: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    370: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    371: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    372: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    373: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    374: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    375: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    376: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    378: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    379: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    380: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    420: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    426: {
      slidesPerView: 2,
      spaceBetween: 10
    },

    430: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    440: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    460: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    470: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    801: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    
    800: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    802: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    
    805: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    
    810: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    
    820: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    
    840: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    
    860: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    
    880: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    
    900: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1000: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1100: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1120: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1130: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1140: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1150: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1152: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1155: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1157: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1158: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1160: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1170: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1180: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1170: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1180: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1190: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    1216: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    1218: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    1220: {
      slidesPerView: 5,
      spaceBetween: 20
    },
    1230: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    1240: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    1250: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    1260: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    1270: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    1299: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    1300: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    1500: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    1600: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    1700: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    1800: {
      slidesPerView: 5,
      spaceBetween: 10
    },
    1920: {
      slidesPerView: 5,
      spaceBetween: 10
    }
  }
 
  

  
});



//general_page select's functional part

$(document).on("click", ".search_form_select_title_svg_wrapper", function(){
   $(this).closest(".search_form_select_wrapper").toggleClass("open");
   $(this).closest(".search_form_select_wrapper").removeClass("active");
})



$(document).on("click", ".search_form_select_menu_li", function(){
  var dataValue = $(this).data("value");
  var dataName = $(this).data("name");
 $(this).closest(".search_form_select_wrapper").find(".search_input").val(dataValue);
 $(this).closest(".search_form_select_wrapper").find(".search_form_select_title").html(dataName);
 $(this).closest(".search_form_select_wrapper").removeClass("open");
 $(this).closest(".search_form_select_wrapper").addClass("active");
})



//auto_parts_catalog page auto_parts_catalog_load_more_btn's functional part

$(document).on("click", ".auto_parts_catalog_load_more_btn", function(){
    $(".auto_parts_catalog_item_child_hidden").toggleClass("open");
})



//auto_parts_for_audi_page radio input's functional part

$(document).on("change", ".audi_radio_input", function(){
   $(".audi_radio_input_span_wrapper").removeClass("active");
   $(this).parent().toggleClass("active");
})


$(document).on("focusin", ".audi_small_item_price_input", function(){
  $(this).parent().addClass("active");

})





//auto_parts select's functional part

$(document).on("click", ".audi_big_item_select_title_svg_wrapper", function(){
  $(this).closest(".audi_big_item_select_wrapper").toggleClass("open");
  
})





$(document).on("click", ".audi_big_item_select_option", function(){
  var dataValue = $(this).data("value");
  var dataName = $(this).data("name");
 $(this).closest(".audi_big_item_select_wrapper").find(".auto_part_input").val(dataValue);
 $(this).closest(".audi_big_item_select_wrapper").find(".audi_big_item_select_title").html(dataName);
 $(this).closest(".search_form_select_wrapper").removeClass("open");
 
})



// auto_part page pagination_part's functional
$(document).on("click", ".audi_big_pagination_number", function(){
        $(".audi_big_pagination_number").removeClass("active");
       $(this).addClass("active");
})

  // auto_part page load_more button's functional part
  $(document).on("click", ".audi_big_item_load_more_btn", function(){
      $(".audi_big_items_wrapper_hidden").toggleClass("open");
  })

  $(document).on("click", ".filter_title_svg_wrapper", function(){
     $(this).parent().find(".auto_parts_for_audi_item_second ").slideToggle();
  })



  // auto_part page filter's close functional part
  $(document).on("click", ".close", function(){
    $(".auto_parts_for_audi_item_second ").slideToggle();
 })

// header's  search button's  and input's  functional part
 $(document).on("click", ".search_btn", function(){
    $(".hidden_input").fadeToggle();
 })


//auto_parts second page add image functional part
  $(document).on("click", ".add_child_image", function(){
    var imageSource = $(this).attr("src");
    $("#adds_parent_image").attr('src',imageSource);
    $(".auto_parts_card_slider_child_img").removeClass("active");
    $(this).parent().addClass("active");
})


//garage input's functional_part


$(document).on("focusin", ".personal_data_input_field", function(){
  $(this).parent().addClass("active");
  $(this).parent().addClass("active_permanent");
  $(this).parent().addClass("active_color");
})

$(document).on("focusout", ".personal_data_input_field", function(){
$(this).parent().removeClass("active_permanent");
$(this).parent().removeClass("active_color");
$(this).parent().addClass("active_color_grey");
var val = $(this).val();
if(val.length > 0){
  $(this).parent().addClass("done");
} else{
  $(this).parent().removeClass("done");
  $(this).parent().removeClass("active");

}

})



$(document).on("input", ".personal_data_input_field", function(){
  var val = $(this).val();
  console.log(val);
  if(val.length < 1){
    $(this).parent().removeClass("active");
    $(this).parent().removeClass("done")
    $(this).parent().removeClass("active_permanent");
    $(this).parent().removeClass("active_color_grey");
    $(this).parent().removeClass("active_color");
  } 
  
  })

//garage page bell's off and on functional part

$(document).on("click", ".bell_on_btn", function(){
    $(this).parent().find(".bell_off_btn").show();
    $(this).hide();
})

$(document).on("click", ".bell_off_btn", function(){
  $(this).parent().find(".bell_on_btn").show();
  $(this).hide();
})




//garage's page modal's select's functional part

$(document).on("click", ".modal_select_title_svg_wrapper", function(){
  $(this).closest(".modal_form_select_wrapper").toggleClass("open");
  $(this).closest(".modal_form_select_wrapper").removeClass("active");
})



$(document).on("click", ".modal_form_select_menu_li", function(){
 var dataValue = $(this).data("value");
 var dataName = $(this).data("name");
$(this).closest(".modal_form_select_wrapper").find(".search_input").val(dataValue);
$(this).closest(".modal_form_select_wrapper").find(".modal_form_select_title").html(dataName);
$(this).closest(".modal_form_select_wrapper").removeClass("open");
$(this).closest(".modal_form_select_wrapper").addClass("active");
})


//modal_open part

$(document).on("click", ".add_car_btn", function(){
     $(".modal").toggleClass("open");
     $("body").toggleClass("hidden_body");
})

$(document).on("click", ".add_car_btn_second", function(){
  $(".modal").toggleClass("open");
  $("body").toggleClass("hidden_body");
})

$(document).on("click", ".modal_close", function(event){
  event.stopPropagation();
  $(".modal").removeClass("open");

})

//minus_plus button's fucntional part

    $(document).on('click', ".shopping_cart_minus_btn", function(e) {
    
      var $this = $(this);
      var $input = $this.parent().find('.shopping_cart_minus_plus_input');
      var value = parseInt($input.val());
        if(value > 0 ){
            value = value - 1;
            $input.val(value);
        }
    });

    $(document).on('click', ".shopping_cart_plus_btn", function() {
  
      var $this = $(this);
      var $input = $this.parent().find('.shopping_cart_minus_plus_input');
      var value = parseInt($input.val());
        value = value + 1;
        $input.val(value);
    
    });


