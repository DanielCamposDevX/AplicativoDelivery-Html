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
    const botaoanterior = document.querySelector('.foods .selected');
    console.log(botaoanterior);
    if (botaoanterior !== null) {
        botaoanterior.classList.remove('selected');
    }

    const botao = document.querySelector(food);
    botao.classList.add('selected');
}


function drinkselect(drink) {
    const botaoanterior = document.querySelector('.drinks .selected');
    console.log(botaoanterior);
    if (botaoanterior !== null) {
        botaoanterior.classList.remove('selected');
    }
    const botao = document.querySelector(drink);
    botao.classList.add('selected');
}


function desertselect(desert) {
    const botaoanterior = document.querySelector('.deserts .selected');
    console.log(botaoanterior);
    if (botaoanterior !== null) {
        botaoanterior.classList.remove('selected');
    }
    const botao = document.querySelector(desert);
    botao.classList.add('selected');
}


function final() {
    const food = document.querySelector('.foods .selected .preco h2 ');
    const drink = document.querySelector('.drinks .selected .preco h2');
    const desert = document.querySelector('.deserts .selected .preco h2');
    const foodname = document.querySelector('.foods .selected .foodname h1');
    const drinkname = document.querySelector('.drinks .selected .foodname h1');
    const desertname = document.querySelector('.deserts .selected .foodname h1');
    const total = Number(food.innerHTML) + Number(drink.innerHTML) + Number(desert.innerHTML);
    console.log(total.toFixed(2));
    console.log(foodname)
    const botao = document.querySelector('.confirm');
    botao.classList.remove('escondido');
    let name1 = document.querySelector('.confirm .box .op .fo');
    let name2 = document.querySelector('.confirm .box .op .dr');
    let name3 = document.querySelector('.confirm .box .op .de');
    name1.innerHTML = foodname.innerHTML;
    name2.innerHTML = drinkname.innerHTML;
    name3.innerHTML = desertname.innerHTML;
    let p1 = document.querySelector('.confirm .box .op .fop');
    let p2 = document.querySelector('.confirm .box .op .drp');
    let p3 = document.querySelector('.confirm .box .op .dep');
    p1.innerHTML = food.innerHTML;
    p2.innerHTML = drink.innerHTML;
    p3.innerHTML = desert.innerHTML;
    let tot = document.querySelector('.confirm .box .op .total');
    tot.innerHTML = total.toFixed(2);
}
function back() {
    const botao = document.querySelector('.confirm');
    botao.classList.add('escondido');
}

function wpp() {
    const a = document.querySelector('.confirmed');
    const foodname = document.querySelector('.foods .selected .foodname h1');
    const drinkname = document.querySelector('.drinks .selected .foodname h1');
    const desertname = document.querySelector('.deserts .selected .foodname h1');
    const food = document.querySelector('.foods .selected .preco h2 ');
    const drink = document.querySelector('.drinks .selected .preco h2');
    const desert = document.querySelector('.deserts .selected .preco h2');
    const total = Number(food.innerHTML) + Number(drink.innerHTML) + Number(desert.innerHTML);
    a.href = "https://wa.me/5532988757666?text=Ol%C3%A1%2C+gostaria+de+fazer+o+pedido%3A%0A-+Prato%3A+" + foodname.innerHTML + "%0A-+Bebida%3A+" + drinkname.innerHTML + "%0A-+Sobremesa%3A+" + desertname.innerHTML + "%0ATotal%3A+R%24+"+total.toFixed(2);
    window.location.href = a.href;
}




