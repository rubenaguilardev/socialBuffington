const primaryHeader = document.querySelector(".primaryHeader");
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(function (entries) {
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
});

navObserver.observe(scrollWatcher);


const instagramPrev = document.getElementById("instagramPrevBtn");
const instagramNext = document.getElementById("instagramNextBtn");
const list = document.getElementById("instagramItemList");
const itemWidth = 340;
const padding = 10;

instagramPrev.addEventListener('click', function() {
    list.scrollLeft -= (itemWidth + padding); 
    buttonAnimation(instagramPrev)  
});

instagramNext.addEventListener('click', function() {
    list.scrollLeft += (itemWidth + padding);
    buttonAnimation(instagramNext)
});


const blogPrev = document.getElementById("blogPrevBtn");
const blogNext = document.getElementById("blogNextBtn");
const blogList = document.getElementById("blogItemList");
const blogItemWidth = 620;
const blogPadding = 20;


blogPrev.addEventListener('click', function() {
    buttonAnimation(blogPrev)
    blogList.scrollLeft -= (blogItemWidth + blogPadding);
    
});
blogNext.addEventListener('click', function() {
    buttonAnimation(blogNext)
    blogList.scrollLeft += (blogItemWidth + blogPadding);
    
});


function buttonAnimation (currentButton) {

    currentButton.classList.add("darkPressed");

    setTimeout(function() {
        currentButton.classList.remove("darkPressed");
    }, 100);
}