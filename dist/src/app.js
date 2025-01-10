"use strict";
const compteur = document.querySelector("#compteur");
const input1 = document.querySelector("#n1");
const input2 = document.querySelector("#n2");
const result = document.querySelector("#result");
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur?.querySelector("span");
    if (span) {
        span.innerText = i.toString();
    }
};
compteur?.addEventListener('click', increment);
const sumFunction = (e) => {
    const sumResult = parseFloat(input1.value) + parseFloat(input2.value);
    result.textContent = sumResult.toString();
};
result?.addEventListener('click', sumFunction);
