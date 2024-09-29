let lastScrollTop = 0;
const header = document.querySelector('.left-side'); // Adjust this selector if necessary

window.addEventListener('scroll', function() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        // Scrolling down
        header.classList.add('header-hidden');
    } else {
        // Scrolling up
        header.classList.remove('header-hidden');
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});