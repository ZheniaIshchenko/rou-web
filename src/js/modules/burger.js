const $burgerMenu = document.querySelector('.burger-menu')
const $navigation = document.querySelector('.navigation')

$burgerMenu.addEventListener('click', ( ) =>{
    console.log(window.scrollY);        $navigation.style.top = $burgerMenu.getBoundingClientRect().top + $burgerMenu.offsetHeight + 'px';
    $navigation.style.left = $burgerMenu.getBoundingClientRect().left + $navigation.offsetWidth/5 + 'px';
    $navigation.classList.toggle('active')
    if ($navigation.classList.contains('active')){
        $navigation.style.top = $burgerMenu.getBoundingClientRect().top + $burgerMenu.offsetHeight + 'px';
        $navigation.style.left = $burgerMenu.getBoundingClientRect().left + $burgerMenu.offsetWidth - $navigation.offsetWidth + 'px';
} else {
        $navigation.style.left = 3;

    }
    
})

