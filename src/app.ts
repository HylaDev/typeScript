const compteur = document.querySelector("#compteur") as HTMLButtonElement

const input1 = <HTMLInputElement>document.querySelector("#n1")
const input2 = <HTMLInputElement>document.querySelector("#n2")
const result = <HTMLButtonElement>document.querySelector("#result")

let i = 0


const increment = (e: Event) =>{
    e.preventDefault();
    i++;
    const span = compteur?.querySelector("span")
    if (span) {
        span.innerText = i.toString()
    }

}
compteur?.addEventListener('click', increment)

const sumFunction = (e: Event) =>{
    const sumResult = parseFloat(input1.value) + parseFloat(input2.value)
    result.textContent = sumResult.toString()
}
result?.addEventListener('click', sumFunction)
