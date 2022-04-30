'use strict';
const round = document.getElementById("round");
let useX = true;

for (let i=1; i<=9; i++)
{


    document.getElementById(i.toString()).addEventListener('click', () => {
        click(i)
    })
}

const click = (numberOfDiv) => {
    document.getElementById(numberOfDiv.toString()).innerHTML = useX ? "X" : "0";
    round.innerHTML = `Tura:${useX ? "0" : "X"}`;

    useX = useX ? false : true;
}
