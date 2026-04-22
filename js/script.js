const btns = document.querySelectorAll(".btn");

const nextStage = (e) => {
    // console.log("Clicked");
    console.log(e.target.textContent);
    const currentStage = document.querySelector(".stage.active");
    const nextStageClass = e.target.dataset.next;

    if (!nextStageClass) return;

    const next = document.querySelector(`.${nextStageClass}`);

    currentStage.classList.remove("active");
    next.classList.add("active");
};

for (const btn of btns) {
    btn.addEventListener("click", nextStage);
}