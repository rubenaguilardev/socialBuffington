function main() {

    // Skills Section

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
        changeSkill(i);
    });

    skillsLeftButton.addEventListener('click', function() {
        i--;
        if (i < 0) i = 3;
        changeSkill(i);
    });

    

function changeSkill(index) {

    changeImage.classList.remove('show');
    changeSkillsH2.classList.remove('show');
    changeSkillsP.classList.remove('show');
    changeSkillsButton.classList.remove('show');

    setTimeout(function () {
        changeImage.style.backgroundImage = `url('img/skills${index}.jpg')`;

        const parentAnchor = changeSkillsButton.closest('a');

        switch (index) {
            case 1:
                changeSkillsH2.innerText = "Photography"
                changeSkillsP.innerText = "Capturing moments with artistic flair and emotional resonance";
                changeSkillsButton.innerText = "View My Photographs"
                if (parentAnchor) {
                    parentAnchor.href = "photos.html";
                }
                break;
                break
            case 2:
                changeSkillsH2.innerText = "Event Marketing"
                changeSkillsP.innerText = "Campaigns that engage and amplify brand stories";
                changeSkillsButton.innerText = "View My Work"
                if (parentAnchor) {
                    parentAnchor.href = "work.html";
                }
                
                break
            case 3:
                changeSkillsH2.innerText = "Food & Beverage"
                changeSkillsP.innerText = "Crafted with irresistible charm and delicious detail";
                changeSkillsButton.innerText = "View My Work"
                break
            default:
                changeSkillsH2.innerText = "Creative Storytelling"
                changeSkillsP.innerText = "Crafted to captivate and inspire";
                changeSkillsButton.innerText = "View My Work"
                if (parentAnchor) {
                    parentAnchor.href = "work.html";
                }
        }

        changeImage.classList.add('show');
        changeSkillsH2.classList.add('show');
        changeSkillsP.classList.add('show');
        changeSkillsButton.classList.add('show');

    }, 500)
    
}



   
}


main()
