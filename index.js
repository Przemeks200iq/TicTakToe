'use strict';

for (let i=1; i<=9; i++)
{
    i = i.toString();

    document.getElementById(i).addEventListener('click', () => {
        alert(i);
    })
}

