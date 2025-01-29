let changeImage = document.getElementById("skillsBackground");
let changeSkillsH2 = document.querySelector(".skillsHeading");
let changeSkillsP = document.querySelector(".skillsParagraph");
let changeSkillsButton = document.querySelector(".skillsButton");
let skillsLeftButton = document.getElementById("skillsLeftButton");
let skillsRightButton = document.getElementById("skillsRightButton");
let i = 0;


skillsRightButton.addEventListener('click', function() {
    i++;
    if (i > 3) i = 0;
    buttonAnimation(skillsRightButton);
    changeSkill(i);
});

skillsLeftButton.addEventListener('click', function() {
    i--;
    if (i < 0) i = 3;
    buttonAnimation(skillsLeftButton);
    changeSkill(i);
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.fade').forEach((element) => {
        element.classList.add('show');
    });
});


function changeSkill(index) {

    document.querySelectorAll('.fade').forEach((element) => {
        element.classList.remove('show');
    });

    setTimeout(function () {
        
        changeImage.style.backgroundImage = `url('img/skills${index}.jpg')`;

        const parentAnchor = changeSkillsButton.closest('a');
        switch (index) {
            case 1:
                changeSkillsH2.innerText = "Photography";
                changeSkillsP.innerText = "Capturing moments with artistic flair and emotional resonance";
                changeSkillsButton.innerText = "View My Photographs";
                if (parentAnchor) {
                    parentAnchor.href = "photos.html";
                }
                break;
            case 2:
                changeSkillsH2.innerText = "Event Marketing";
                changeSkillsP.innerText = "Campaigns that engage and amplify brand stories";
                changeSkillsButton.innerText = "View My Work";
                if (parentAnchor) {
                    parentAnchor.href = "work.html";
                }
                break;
            case 3:
                changeSkillsH2.innerText = "Food & Beverage";
                changeSkillsP.innerText = "Crafted with irresistible charm and delicious detail";
                changeSkillsButton.innerText = "View My Work";
                break;
            default:
                changeSkillsH2.innerText = "Creative Storytelling";
                changeSkillsP.innerText = "Crafted to captivate and inspire";
                changeSkillsButton.innerText = "View My Work";
                if (parentAnchor) {
                    parentAnchor.href = "work.html";
                }
        }

        document.querySelectorAll('.fade').forEach((element) => {
            element.classList.add('show');
        });
    }, 600);
}


const primaryHeader = document.querySelector(".primaryHeader");
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher', '');
primaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver(function (entries) {
    primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
});

navObserver.observe(scrollWatcher);


function buttonAnimation (currentButton) {

    currentButton.classList.add("pressed");

    setTimeout(function() {
        currentButton.classList.remove("pressed");
    }, 100);
}