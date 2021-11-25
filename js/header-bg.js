(function () {
    let start = document.querySelector('.header');
   window.onscroll = () => {
       if (window.scrollY > 50) {
           start.classList.add ('header__active');
       } else {
           start.classList.remove ('header__active');
       }
   };
}());