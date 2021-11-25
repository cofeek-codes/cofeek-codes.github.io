//! OPENING
(function () {
    const burgeritem = document.querySelector ('.burger');
    const menu = document.querySelector ('.header__nav');
    //! CLOSING
    const menuclose = document.querySelector ('.header__nav-close');
    //!
    burgeritem.addEventListener('click', () => {
       menu.classList.add('header__nav-active');
    });
    //! CLOSING
    menuclose.addEventListener('click', () => {
        menu.classList.remove ('header__nav-active');
    });
}());


