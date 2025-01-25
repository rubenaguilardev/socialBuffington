const prev = document.getElementById("prevBtn");
    const next = document.getElementById("nextBtn");
    const list = document.getElementById("itemList");
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
    const blogItemWidth = 500;
    const blogPadding = 20;


    blogPrev.addEventListener('click', () => {
        blogList.scrollLeft -= (blogItemWidth + blogPadding);
       
    });
    blogNext.addEventListener('click', () => {
        blogList.scrollLeft += (blogItemWidth + blogPadding);
        
    });
