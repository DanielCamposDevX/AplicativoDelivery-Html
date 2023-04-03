function foodselect(food) {
    const botaoanterior = document.querySelector('.foods .selected');
    console.log(botaoanterior);
    if (botaoanterior !== null) {
        botaoanterior.classList.remove('selected');
    }

    const botao1 = document.querySelector(food);
    botao1.classList.add('selected');
    const botao2 = document.querySelector('.drinks .selected');
    const botao3 = document.querySelector('.deserts .selected');
    if (botao1 !== null && botao2 !== null && botao3 !== null) {
        const enable = document.querySelector('.infbar button');
        enable.innerHTML = 'Finalizar Pedido'
        enable.disabled = false;
    }

}


function drinkselect(drink) {
    const botaoanterior = document.querySelector('.drinks .selected');
    console.log(botaoanterior);
    if (botaoanterior !== null) {
        botaoanterior.classList.remove('selected');
    }
    const botao2 = document.querySelector(drink);
    botao2.classList.add('selected');
    const botao1 = document.querySelector('.foods .selected');
    const botao3 = document.querySelector('.deserts .selected');
    if (botao1 !== null && botao2 !== null && botao3 !== null) {
        enable = document.querySelector('.infbar button');
        enable.innerHTML = 'Finalizar Pedido'
        enable.disabled = false;
    }

}


function desertselect(desert) {
    const botaoanterior = document.querySelector('.deserts .selected');
    console.log(botaoanterior);
    if (botaoanterior !== null) {
        botaoanterior.classList.remove('selected');
    }
    const botao3 = document.querySelector(desert);
    botao3.classList.add('selected');
    const botao2 = document.querySelector('.drinks .selected');
    const botao1 = document.querySelector('.foods .selected');
    if (botao1 !== null && botao2 !== null && botao3 !== null) {
        const enable = document.querySelector('.infbar button');
        enable.innerHTML = 'Finalizar Pedido'
        enable.disabled = false;
    }
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
    tot.innerHTML = 'R$' + total.toFixed(2);

}
function back() {
    const botao = document.querySelector('.confirm');
    botao.classList.add('escondido');
}

function wpp() {
    const nome = prompt('Digite seu nome')
    const endereco = prompt ( 'Digite seu endereço:')
    const a = document.querySelector('.confirmed');
    const foodname = document.querySelector('.foods .selected .foodname h1');
    const drinkname = document.querySelector('.drinks .selected .foodname h1');
    const desertname = document.querySelector('.deserts .selected .foodname h1');
    const food = document.querySelector('.foods .selected .preco h2 ');
    const drink = document.querySelector('.drinks .selected .preco h2');
    const desert = document.querySelector('.deserts .selected .preco h2');
    const total = Number(food.innerHTML) + Number(drink.innerHTML) + Number(desert.innerHTML);
    a.href = "https://wa.me/5532988757666?text=Ol%C3%A1%2C+gostaria+de+fazer+o+pedido%3A%0A-+Prato%3A+" + foodname.innerHTML + "%0A-+Bebida%3A+" + drinkname.innerHTML + "%0A-+Sobremesa%3A+" + desertname.innerHTML + "%0ATotal%3A+R%24+" + total.toFixed(2) + "%0ANome%3A" + nome + "%0AEndere%C3%A7o%3A" + endereco;
    window.location.href = a.href;
}




