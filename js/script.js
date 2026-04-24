const btns = document.querySelectorAll(".btn");
const stages = document.querySelectorAll(".stage");

const nextStage = (e) => {
    // console.log("Clicked");
    console.log(e.target.textContent);
    switch(e.target.textContent) {
        case "Påbegynd scenarie": 
            console.log("Start was clicked");
            stages[0].classList.remove("active");
            stages[1].classList.add("active");
        break;
        case "Klikker på linket!":
            stages[1].classList.remove("active");
            stages[2].classList.add("active");
            break;
        case "Tjekker afsenderen":
            stages[1].classList.remove("active");
            stages[5].classList.add("active");
            break;
        case "Ignorerer den":
            stages[1].classList.remove("active");
            stages[6].classList.add("active");
            break;
        case "Indtaster mine oplysninger":
            stages[2].classList.remove("active");
            stages[3].classList.add("active");
            break;
        case "Stopper op og går tilbage":
            stages[2].classList.remove("active");
            stages[1].classList.add("active");
            break;
        case "Sletter mailen":
            stages[5].classList.remove("active");
            stages[6].classList.add("active");
            break;
        case "Tjekker IBA's officielle hjemmeside":
            stages[5].classList.remove("active");
            stages[8].classList.add("active");
            break;
        case "Klikker på linket":
            stages[5].classList.remove("active");
            stages[2].classList.add("active");
            break;
        case "Ignorer og slet mailen helt":
            stages[6].classList.remove("active");
            stages[7].classList.add("active");
            break;
        case "Kontakt skolen via officielle kanaler":
            stages[6].classList.remove("active");
            stages[8].classList.add("active");
            break;

        // TILBAGE TIL START KNAPPERNE, index 3, 4 , 7, 8
        case "Tilbage til start":
            stages[3].classList.remove("active");
            stages[4].classList.remove("active");
            stages[7].classList.remove("active");
            stages[8].classList.remove("active");
            stages[1].classList.add("active");
        default: console.log("Something else was clicked");

    }
};

for (const btn of btns) {
    btn.addEventListener("click", nextStage);
}