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
