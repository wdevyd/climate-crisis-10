const images = document.querySelectorAll('.fact-image img');


images.forEach((img) => {
    img.addEventListener('mouseenter', function() {
        img.style.transition = 'transform 0.3s'
        img.style.transform = 'scale(1.15)';
    });
    img.addEventListener('mouseleave', function(){
        img.style.transform = 'scale(1)';
    });
});
