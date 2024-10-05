var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 2, // Default number of slides
    spaceBetween: 10, // Default space between slides
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
    }
  });

  function openSignIn(){
    document.getElementById('myform').classList.remove('hidden');
    
  }

  function closeform(){
     document.getElementById('myform').classList.add('hidden');
  }

  function openCart(){
     document.getElementById("myCart").classList.remove('hidden');
  }

  function closeCart(){
    document.getElementById('myCart').classList.add('hidden');
  }