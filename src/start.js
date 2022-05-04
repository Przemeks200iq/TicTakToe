import { winX, win0, draw } from "../src/win.js";
const round = document.getElementById("round");
const blank = document.querySelectorAll(".blank");
let useX = true;
const check = (id) => {
    return document.getElementById(id.toString()).innerHTML;
};

for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).addEventListener("click", () => {
        click(i);
    });
}

const checkWinCondition = () => {
    if (
        "X" === check(1) &&
        "X" === check(2) &&
        "X" === check(3) &&
        check(2) !== ""
    ) {
        winX();
    }
    if (
        "0" === check(1) &&
        "0" === check(2) &&
        "0" === check(3) &&
        check(2) !== ""
    ) {
        win0();
    }
    if (
        "X" === check(4) &&
        "X" === check(5) &&
        "X" === check(6) &&
        check(4) !== ""
    ) {
        winX();
    }
    if (
        "0" === check(4) &&
        "0" === check(5) &&
        "0" === check(6) &&
        check(4) !== ""
    ) {
        win0();
    }
    if (
        "X" === check(7) &&
        "X" === check(8) &&
        "X" === check(9) &&
        check(8) !== ""
    ) {
        winX();
    }
    if (
        "0" === check(7) &&
        "0" === check(8) &&
        "0" === check(9) &&
        check(8) !== ""
    ) {
        win0();
    }
    if (
        "X" === check(1) &&
        "X" === check(4) &&
        "X" === check(7) &&
        check(4) !== ""
    ) {
        winX();
    }
    if (
        "0" === check(1) &&
        "0" === check(4) &&
        "0" === check(7) &&
        check(4) !== ""
    ) {
        win0();
    }
    if (
        "X" === check(2) &&
        "X" === check(5) &&
        "X" === check(8) &&
        check(5) !== ""
    ) {
        winX();
    }
    if (
        "0" === check(2) &&
        "0" === check(5) &&
        "0" === check(8) &&
        check(5) !== ""
    ) {
        win0();
    }
    if (
        "X" === check(3) &&
        "X" === check(6) &&
        "X" === check(9) &&
        check(6) !== ""
    ) {
        winX();
    }
    if (
        "0" === check(3) &&
        "0" === check(6) &&
        "0" === check(9) &&
        check(6) !== ""
    ) {
        win0();
    }
    if (
        "X" === check(1) &&
        "X" === check(5) &&
        "X" === check(9) &&
        check(5) !== ""
    ) {
        winX();
    }
    if (
        "0" === check(1) &&
        "0" === check(5) &&
        "0" === check(9) &&
        check(5) !== ""
    ) {
        win0();
    }
    if (
        "X" === check(3) &&
        "X" === check(5) &&
        "X" === check(7) &&
        check(5) !== ""
    ) {
        winX();
    }
    if (
        "0" === check(3) &&
        "0" === check(5) &&
        "0" === check(7) &&
        check(5) !== ""
    ) {
        win0();
    }
    if (
        check(1) !== "" &&
        check(2) !== "" &&
        check(3) !== "" &&
        check(4) !== "" &&
        check(5) !== "" &&
        check(6) !== "" &&
        check(7) !== "" &&
        check(8) !== "" &&
        check(9) !== ""
    ) {
        draw();
    }
};

export const start = () => {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i.toString()).classList.remove("off");
    }
    for (let i = 0; i < blank.length; i++) {
        blank[i].innerHTML = "";
    }

    useX = true;
    round.innerHTML = "Tura:X";
    playAgain.classList.add("hidden");
};

const click = (numberOfDiv) => {
    if (!document.getElementById("1").classList.contains("off")) {
        document.getElementById(numberOfDiv.toString()).innerHTML = useX
            ? "X"
            : "0";
        round.innerHTML = `Tura:${useX ? "0" : "X"}`;
        checkWinCondition();
        useX = useX ? false : true;
        debugger;
    }
};
