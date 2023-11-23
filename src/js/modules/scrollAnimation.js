document.addEventListener('DOMContentLoaded', () => {
	const scrollItems = document.querySelectorAll('.scroll-animation-item');
	const heroArea = document.querySelector('.hero-area');
    heroArea.classList.add('animated')
	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight) + window.scrollY;
		scrollItems.forEach(el => {
			let scrollOffset = getOffsetTop(el) + (el.offsetHeight / 2);
			if (windowCenter >= scrollOffset) {
				el.classList.add('animated');
			} else {
                if(!(el.classList[0] == 'header'  || el.classList[0] == 'hero-area')){
                    el.classList.remove('animated');
                }
			}
		});
	};
	function getOffsetTop(element) {
    return element ? (element.offsetTop + getOffsetTop(element.offsetParent)) : 0;
}
	scrollAnimation();
	window.addEventListener('scroll', () => {
		scrollAnimation();
	});
});