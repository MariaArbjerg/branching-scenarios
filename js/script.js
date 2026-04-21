const btns = document.querySelectorAll(".btn");

const nextStage = (e) => {
    // console.log("Clicked");
    console.log(e.target.textContent);
    switch(e.target.dataset.action) {
        case "start": 
            console.log("Start was clicked");
            // Herfra fortsætter vi næste gang
        break;
        default: console.log("Something else was clicked");

    }
};

for (const btn of btns) {
    btn.addEventListener("click", nextStage);
}