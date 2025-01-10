"use strict";
const compteur = document.querySelector("#compteur");
const input1 = document.querySelector("#n1");
const input2 = document.querySelector("#n2");
const result = document.querySelector("#result");
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector("span");
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);
const sumFunction = (e) => {
    const sumResult = parseFloat(input1.value) + parseFloat(input2.value);
    result.textContent = sumResult.toString();
};
result === null || result === void 0 ? void 0 : result.addEventListener('click', sumFunction);
