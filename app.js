const topBtn = document.getElementById('backToTop');

// 1. Show/Hide bubble on scroll
window.onscroll = () => {
    console.log(document.body.scrollTop)
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.classList.add('show');
    } else {
        topBtn.classList.remove('show');
    }
};

// 2. Scroll to top on click
topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};