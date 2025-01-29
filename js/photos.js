const primaryHeader = document.querySelector(".primaryHeader");
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(function (entries) {
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
});

navObserver.observe(scrollWatcher);


document.addEventListener('DOMContentLoaded', () => {
    
    const imgs = document.querySelectorAll('.photos img');
    const fullPage = document.querySelector('#fullpage');
    let currentIndex = 0;

    function showImage(index) {
        fullPage.style.backgroundImage = `url('${imgs[index].src}')`;
    }

    imgs.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            showImage(currentIndex);
            fullPage.style.display = 'block';
        });
    });

    const photosPrev = document.getElementById("photosPrevBtn");
    const photosNext = document.getElementById("photosNextBtn");

    photosPrev.addEventListener('click', function (event) {
        event.stopPropagation();
        currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
        showImage(currentIndex);
        buttonAnimation(photosPrev)
    });

    
    photosNext.addEventListener('click', function (event){
        event.stopPropagation();
        currentIndex = (currentIndex + 1) % imgs.length;
        showImage(currentIndex);
        buttonAnimation(photosNext);
    });

});


function buttonAnimation (currentButton) {

    currentButton.classList.add("pressed");

    setTimeout(function() {
        currentButton.classList.remove("pressed");
    }, 100);
}