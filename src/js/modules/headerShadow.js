window.addEventListener('scroll', function() {
    if(window.scrollY > 0){
        document.querySelector('.header-section').classList.add('shadow')
    } else {
        document.querySelector('.header-section').classList.remove('shadow')
    }
});