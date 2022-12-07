window.addEventListener('scroll', function(){
    const nav = document.querySelector('nav');
    nav.classList.toggle("sticky", window.scrolly > 0);
});