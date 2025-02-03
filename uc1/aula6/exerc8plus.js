let times = [];
let time;

let vasco = 0;
 let flamengo = 0;
 let fluminense = 0;
 let botafogo = 0;
 let outroTime = 0;


for (let i = 0; i < 3; i++) {
    time = prompt("Qual o seu time?").toLowerCase();
    times.push(time)
}

for(let i = 0;i<10;i++){
    switch(times[i]){
    case "flamengo":
        flamengo++
        break;
    case "botafogo":
        botafogo++
        break;
    case "vasco":
        vasco++
        break;
    case "fluminense":
        fluminense++
        break;
    default:
        outroTime++
        break;                

}
}

document.write(times)
document.write("flamengo..: "+flamengo+"<br>")      
document.write("botafogo..: "+botafogo+"<br>")      
document.write("fluminense..: "+fluminense+"<br>")      
document.write("vasco..: "+vasco+"<br>")      
//     if (time == "botafogo") {
//         botafogo++;
//     } else if (time == "flamengo") {
//         flamengo++;
//     }else if (time == "fluminense") {
//         fluminense++;
//     }else if (time == "vasco") {
//         vasco++;
//     }else{
//         outroTime++;
//     }



// document.write(`
// Total de Botafoguenses: ${botafogo}.<br>
// Total de Vascainos: ${vasco}.<br>
// Total de Flamenguistas: ${flamengo}.<br>
// Total de Tricolores: ${fluminense}.<br>
// Outros times: ${outroTime}.<br>`);