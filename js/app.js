function main() {

    // Skills Section

    let changeImage = document.getElementById("skillsBackground");
    let changeSkillsH2 = document.querySelector(".scrollH2");
    let changeSkillsP = document.querySelector(".scrollP");
    let changeSkillsButton = document.querySelector(".skillsButton")
    let skillsLeftScroll = document.getElementById("leftScroll");
    let skillsRightScroll = document.getElementById("rightScroll");
    let i = 0;




    skillsRightScroll.addEventListener('click', function() {
        i++;
        if (i > 3) i = 0;
        changeSkill(i);
    });

    skillsLeftScroll.addEventListener('click', function() {
        i--;
        if (i < 0) i = 3;
        changeSkill(i);
    });

    

function changeSkill(index) {

    setTimeout(function () {
        changeImage.style.backgroundImage = `url('img/skills${index}.jpg')`;

        switch (index) {
            case 1:
                changeSkillsH2.innerText = "Photography"
                changeSkillsP.innerText = "Capturing moments with artistic flair and emotional resonance";
                changeSkillsButton.innerText = "View My Photography"
                break
            case 2:
                changeSkillsH2.innerText = "Event Marketing"
                changeSkillsP.innerText = "Campaigns that engage and amplify brand stories";
                changeSkillsButton.innerText = "View My Work"
                break
            case 3:
                changeSkillsH2.innerText = "Food & Beverage"
                changeSkillsP.innerText = "Crafted with irresistible charm and delicious detail";
                changeSkillsButton.innerText = "View My Work"
                break
            default:
                changeSkillsH2.innerText = "Creative Storytelling"
                changeSkillsP.innerText = "Crafted to captivate and inspire";
        }
    }, 500)
    
}



   
}


main()
