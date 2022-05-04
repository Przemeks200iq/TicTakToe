const giveClassList = () => {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).classList.add("off");
    }
    playAgain.classList.remove("hidden");
};

export const winX = () => {
    round.innerHTML = `Wygrywa:X`;
    giveClassList();
};

export const win0 = () => {
    round.innerHTML = `Wygrywa:0`;
    giveClassList();
};

export const draw = () => {
    round.innerHTML = `REMIS`;
    giveClassList();
};
