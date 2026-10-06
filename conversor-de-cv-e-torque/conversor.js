const converterPotDe = document.querySelector("#converter-pot-de")
const converterPotPara = document.querySelector("#converter-pot-para")
const valorPot = document.querySelector("#valor-pot")
const buttonPot = document.querySelector("#conv-pot")

const converterTorqDe = document.querySelector("#converter-torq-de")
const converterTorqPara = document.querySelector("#converter-torq-para")
const valorTorq = document.querySelector("#valor-torq")
const buttonTorq = document.querySelector("#conv-torq")


function converter(tipoDeConversao) {
    const resultado = document.querySelector("#resultado")

    let valorConvertido

    if (tipoDeConversao === "potencia") {
        const CV_TO_KW = 0.7355;
        const KW_TO_CV = 1.3596;
        const HP_TO_KW = 0.7457;
        const KW_TO_HP = 1.3410;
        const CV_TO_HP = 0.9863;
        const HP_TO_CV = 1.0139;

        if (converterPotDe.value === "cv" && converterPotPara.value === "hp") {
            valorConvertido = valorPot.value * CV_TO_HP
        }
        else if (converterPotDe.value === "cv" && converterPotPara.value === "kw") {
            valorConvertido = valorPot.value * CV_TO_KW
        }
        else if (converterPotDe.value === "hp" && converterPotPara.value === "cv") {
            valorConvertido = valorPot.value * HP_TO_CV
        }
        else if (converterPotDe.value === "hp" && converterPotPara.value === "kw") {
            valorConvertido = valorPot.value * HP_TO_KW
        }
        else if (converterPotDe.value === "kw" && converterPotPara.value === "cv") {
            valorConvertido = valorPot.value * KW_TO_CV
        }
        else if (converterPotDe.value === "kw" && converterPotPara.value === "hp") {
            valorConvertido = valorPot.value * KW_TO_HP
        }
        else {
            valorConvertido = valorPot.value
        }

        resultado.innerHTML = `O resultado da conversao de <b>potencia</b> e: ${valorConvertido.toFixed(2)}!`
    } else {
        const KGFM_TO_NM = 9.80665;
        const NM_TO_KGFM = 0.10197;
        const LBFT_TO_NM = 1.35582;
        const NM_TO_LBFT = 0.73756;
        const KGFM_TO_LBFT = 7.23301;
        const LBFT_TO_KGFM = 0.13825;

        if (converterTorqDe.value === "kgfm" && converterTorqPara.value === "lbft") {
            valorConvertido = valorTorq.value * KGFM_TO_LBFT
        }
        else if (converterTorqDe.value === "kgfm" && converterTorqPara.value === "nm") {
            valorConvertido = valorTorq.value * KGFM_TO_NM
        }
        else if (converterTorqDe.value === "lbft" && converterTorqPara.value === "kgfm") {
            valorConvertido = valorTorq.value * LBFT_TO_KGFM
        }
        else if (converterTorqDe.value === "lbft" && converterTorqPara.value === "nm") {
            valorConvertido = valorTorq.value * LBFT_TO_NM
        }
        else if (converterTorqDe.value === "nm" && converterTorqPara.value === "kgfm") {
            valorConvertido = valorTorq.value * NM_TO_KGFM
        }
        else if (converterTorqDe.value === "nm" && converterTorqPara.value === "lbft") {
            valorConvertido = valorTorq.value * NM_TO_LBFT
        }
        else {
            valorConvertido = valorPot.value
        }

        resultado.innerHTML = `O resultado da conversao de <b>torque</b> e: ${valorConvertido.toFixed(2)}!`
    }

    console.log(valorConvertido)
}
