const listaSpesa = [
    "Pane",
    "Latte",
    "Uova",
    "Mele",
    "Pere",
    "Mandarini"
];

const listaDom = document.getElementById('lista');

let i = 0;

while (i < listaSpesa.length) {
    listaDom.innerHTML += `<li>${listaSpesa[i]}</li>`
    console.log(listaSpesa[i]);
    i++;
}