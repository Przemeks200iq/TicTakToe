'use strict';
const round = document.getElementById("round");
let useX = true;

for (let i=1; i<=9; i++)
{
    document.getElementById(i.toString()).addEventListener('click', () => {
        click(i)
    })
}

const check = (id) => {
    return document.getElementById(id.toString()).innerHTML;
}


const checkWinCondition = () => {
    if ("X" === check(1) && "X" === check(2) && "X" === check(3) && check(2) !== "")
    {
        round.innerHTML = `Wygrywa:X`;
    }
    if ("0" === check(1) && "0" === check(2) && "0" === check(3) && check(2) !== "")
    {
        round.innerHTML = `Wygrywa:0`;
    }
    if ("X" === check(4) && "X" === check(5) && "X" === check(6) && check(4) !== "")
    {
        round.innerHTML = `Wygrywa:X`;
    }
    if ("0" === check(4) && "0" === check(5) && "0" === check(6) && check(4) !== "")
    {
        round.innerHTML = `Wygrywa:0`;
    }
    if ("X" === check(7) && "X" === check(8) && "X" === check(9) && check(8) !== "")
    {
        round.innerHTML = `Wygrywa:X`;
    }
    if ("0" === check(7) && "0" === check(8) && "0" === check(9) && check(8) !== "")
    {
        round.innerHTML = `Wygrywa:0`;
    }
    if ("X" === check(1) && "X" === check(4) && "X" === check(7) && check(4) !== "")
    {
        round.innerHTML = `Wygrywa:X`;
    }
    if ("0" === check(1) && "0" === check(4) && "0" === check(7) && check(4) !== "")
    {
        round.innerHTML = `Wygrywa:0`;
    }
    if ("X" === check(2) && "X" === check(5) && "X" === check(8) && check(5) !== "")
    {
        round.innerHTML = `Wygrywa:X`;
    }
    if ("0" === check(2) && "0" === check(5) && "0" === check(8) && check(5) !== "")
    {
        round.innerHTML = `Wygrywa:0`;
    }
    if ("X" === check(3) && "X" === check(6) && "X" === check(9) && check(6) !== "")
    {
        round.innerHTML = `Wygrywa:X`;
    }
    if ("0" === check(3) && "0" === check(6) && "0" === check(9) && check(6) !== "")
    {
        round.innerHTML = `Wygrywa:0`;
    }
    if ("X" === check(1) && "X" === check(5) && "X" === check(9) && check(5) !== "")
    {
        round.innerHTML = `Wygrywa:X`;
    }
    if ("0" === check(1) && "0" === check(5) && "0" === check(9) && check(5) !== "")
    {
        round.innerHTML = `Wygrywa:0`;
    }
    if ("X" === check(3) && "X" === check(5) && "X" === check(7) && check(5) !== "")
    {
        round.innerHTML = `Wygrywa:X`;
    }
    if ("0" === check(3) && "0" === check(5) && "0" === check(7) && check(5) !== "")
    {
        round.innerHTML = `Wygrywa:0`;
    }
    if (check(1) !== "" && check(2) !== "" && check(3) !== "" && check(4) !== '' && check(5) !== '' && check(6) !== '' && check(7) !== '' && check(8) !== '' && check(9) !== "")
    {
        round.innerHTML = `REMIS`;
    }
}

const click = (numberOfDiv) => {
    document.getElementById(numberOfDiv.toString()).innerHTML = useX ? "X" : "0";
    round.innerHTML = `Tura:${useX ? "0" : "X"}`;
    checkWinCondition();
    useX = useX ? false : true;
}