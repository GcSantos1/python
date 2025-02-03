let time = "";
let vasco = 0;
let flamengo = 0;
let fluminense = 0;
let botafogo = 0;
let outroTime = 0;


for (let i = 10; i > 0; i--) {
    time = prompt("Qual o seu time?").toLowerCase();
    if (time == "botafogo") {
        botafogo++;
    } else if (time == "flamengo") {
        flamengo++;
    }else if (time == "fluminense") {
        fluminense++;
    }else if (time == "vasco") {
        vasco++;
    }else{
        outroTime++;
    }
}

document.write(`
Total de Botafoguenses: ${botafogo}.<br>
Total de Vascainos: ${vasco}.<br>
Total de Flamenguistas: ${flamengo}.<br>
Total de Tricolores: ${fluminense}.<br>
Outros times: ${outroTime}.<br>`);