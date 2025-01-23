// Skills Section

let changeImage = document.getElementById("skillsBackground");
let changeSkillsH2 = document.querySelector(".scrollH2");
let changeSkillsP = document.querySelector(".scrollP");
let changeSkillsButton = document.querySelector(".skillsButton")
let skillsLeftScroll = document.getElementById("leftScroll");
let skillsRightScroll = document.getElementById("rightScroll");
console.log(skillsRightScroll)

skillsRightScroll.addEventListener('click', function() {
    changeImage.style.backgroundImage = "url('img/skills1.jpg')";
    changeSkillsH2.innerText = "Photography"
    changeSkillsP.innerText = "Capturing moments with artistic flair and emotional resonance";
    changeSkillsButton.innerText = "View My Photography"
})



// Blog Gallery

let scrollContainer = document.querySelector(".blogGallery");
let backBtn = document.getElementById("backButton");
let nextBtn = document.getElementById("nextButton");

scrollContainer.addEventListener("wheel", function(event) {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
});

nextBtn.addEventListener('click', function() {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 800;
})

backBtn.addEventListener('click', function() {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 800;
})