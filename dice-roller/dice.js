const selector = document.querySelector("#selector")
const p = document.querySelector("p")

function sortNumber(dice) {
    const sortedNumber = Math.ceil((Math.random() * dice))
    return sortedNumber
}

function rollDice() {
    const selectedDice = selector.value
    let sortedNumber

    switch (selectedDice) {
        case '2':
            const sortedFace = sortNumber(2)

            if (sortedFace == 1)
                sortedNumber = "Heads"
            else
                sortedNumber = "Tails"

            p.innerHTML = `Winning side: <b>${sortedNumber}</b>!`
            break
        case '4':
            sortedNumber = sortNumber(4)
            p.innerHTML = `Sorted number: <b>${sortedNumber}</b>!`
            break
        case '6':
            sortedNumber = sortNumber(6)
            p.innerHTML = `Sorted number: <b>${sortedNumber}</b>!`
            break
        case '8':
            sortedNumber = sortNumber(8)
            p.innerHTML = `Sorted number: <b>${sortedNumber}</b>!`
            break
        case '10':
            sortedNumber = sortNumber(10)
            p.innerHTML = `Sorted number: <b>${sortedNumber}</b>!`
            break
        case '12':
            sortedNumber = sortNumber(12)
            p.innerHTML = `Sorted number: <b>${sortedNumber}</b>!`
            break
        case '20':
            sortedNumber = sortNumber(20)
            p.innerHTML = `Sorted number: <b>${sortedNumber}</b>!`
            break
    }
}