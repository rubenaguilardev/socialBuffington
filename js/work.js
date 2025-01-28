const primaryHeader = document.querySelector(".primaryHeader");
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(function (entries) {
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
});

navObserver.observe(scrollWatcher);


const prev = document.getElementById("instagramPrevBtn");
const next = document.getElementById("instagramNextBtn");
const list = document.getElementById("instagramItemList");
const itemWidth = 540;
const padding = 10;


prev.addEventListener('click', () => {
    list.scrollLeft -= (itemWidth + padding);
    
});
next.addEventListener('click', () => {
    list.scrollLeft += (itemWidth + padding);
    
});


const blogPrev = document.getElementById("blogPrevBtn");
const blogNext = document.getElementById("blogNextBtn");
const blogList = document.getElementById("blogItemList");
const blogItemWidth = 620;
const blogPadding = 20;


blogPrev.addEventListener('click', () => {
    blogList.scrollLeft -= (blogItemWidth + blogPadding);
    
});
blogNext.addEventListener('click', () => {
    blogList.scrollLeft += (blogItemWidth + blogPadding);
    
});
