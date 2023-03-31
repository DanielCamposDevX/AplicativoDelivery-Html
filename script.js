let drink;
let drinkname;
let desert;
let desertname;
const frango = 14.90;
const carne = 20.90;
const trio = 19.90;
const batata = 15.90;
const lasanha = 19;
const coca = 4.90;
const guarana = 3.90;
const fanta = 3.90;
const coca2 = 6.90;
const guarana2 = 5.90;
const pudim = 7.90;
const brigadeiro = 4;
const bolo = 5.90;
const sorvete = 5;
const doce = 6.90;

function foodselect(food) {
    const botaoanterior = document.querySelector('.selected');
    if (botaoanterior !== null) {
        botaoanterior.classList.remove('.selected');
    }

    const botao = document.querySelector(food);
    botao.classList.add('selected');
}


function drinkselect(drink) {
    const botaoanterior = document.querySelector('.selected');
    if (botaoanterior !== null) {
        botaoanterior.classList.remove('.selected')

        const botao = document.querySelector(drink);
        botao.classList.add('selected');
    }}


    function desertselect(desert) {
        const botaoanterior = document.querySelector('.selected');
        if (botaoanterior !== null) {
            botaoanterior.classList.remove('.selected')

            const botao = document.querySelector(desert);
            botao.classList.add('selected');
        }}


        function final() {
            const total = food + drink + desert;
            alert(total.toFixed(2))
        }



