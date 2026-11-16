function converti() {
    let f = parseFloat(document.getElementById("input").value);

    let p1, p2, p3;
    let r1, r2, r3;
    p1 = document.getElementById("Dollaro");
    r1 = f * 1.1051;
    p1.innerHTML = "Risultato: " + r1.toFixed(2) + "$";

    p2 = document.getElementById("Sterlina");
    r2 = f * 0.835375;
    p2.innerHTML = "Risultato: " + r2.toFixed(2) + "£";

    p3 = document.getElementById("Yen");
    r3 = f * 176.86;
    p3.innerHTML = "Risultato: " + r3.toFixed(2) + "¥";

}

function accendi(){
    let icon = document.getElementById("off");

    icon.classList.toggle("bi-toggle2-off");
    icon.classList.toggle("bi-toggle2-on");

    document.body.classList.toggle("dark-mode");
}

function scambiaTema() {
    let body = document.body;
    body.classList.toggle("dark-mode");
    
}