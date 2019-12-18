// chiedo all’utente il numero di chilometri che vuole percorrere
var chilometriTragitto = parseInt(prompt("Quanti chilometri devi percorrere?"));
// chiedo la sua età
var etaPasseggero = parseInt(prompt("Quanti anni hai?"));
// stabilisco il costo del biglietto per 1km
var costoUnChilometro = 0.21;
// stabilisco il costo del biglietto in riferimento ai km inseriti dall'utente
var costoBiglietto = chilometriTragitto * costoUnChilometro;
// stabilisco gli sconti
var scontoVenti = (costoBiglietto * 20) / 100;
var scontoQuaranta = (costoBiglietto * 40) / 100;
// creo una condizione
if (etaPasseggero < 18) {
costoBiglietto = costoBiglietto - scontoVenti;
} else if (etaPasseggero > 65) {
costoBiglietto = costoBiglietto - scontoQuaranta;
} else {
  costoBiglietto;
}
// stampo il costo del biglietto
document.getElementById("costo-biglietto").innerHTML = costoBiglietto;

// stampo il riepilogo Dati
document.getElementById("chilometri-tragitto").innerHTML = chilometriTragitto;
document.getElementById("eta-passeggero").innerHTML = etaPasseggero;
