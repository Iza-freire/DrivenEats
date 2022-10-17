let nomePratoSelecionado;
let nomeBebidaSelecionada;
let nomeSobremesaSelecionada;

let pricedishes;
let pricedrinks;
let pricedesserts;

let precoTotal;

function selectdishes(dishesclicked) {
    const dishespreviouslyselected = document.querySelector(".dishes .selected");
  
    if (dishespreviouslyselected !== null) {
        dishespreviouslyselected.classList.remove("selected");
    }
  
    dishesclicked.classList.add("selected");

    nomePratoSelecionado = dishesclicked.querySelector(".title1").innerHTML;
    pricedishes = dishesclicked.querySelector(".price").innerHTML;
  
    liberaPedido();
  
}

function selectdrinks(drinksclicked) {
    const drinkspreviouslyselected = document.querySelector(".drinks .selected");
  
    if (drinkspreviouslyselected !== null) {
      drinkspreviouslyselected.classList.remove("selected");
    }
  
    drinksclicked.classList.add("selected");

    nomeBebidaSelecionada = drinksclicked.querySelector(".title1").innerHTML;
    pricedrinks = drinksclicked.querySelector(".price").innerHTML;
  
    liberaPedido();
}

function selectdesserts(dessertsclicked) {
    const dessertpreviouslyselected = document.querySelector(
      ".desserts .selected"
    );
  
    if (dessertpreviouslyselected !== null) {
      dessertpreviouslyselected.classList.remove("selected");
    }
  
    dessertsclicked.classList.add("selected");

    nomeSobremesaSelecionada = dessertsclicked.querySelector(".title1").innerHTML;
    pricedesserts = dessertsclicked.querySelector(".price").innerHTML;
  
    liberaPedido();
}

function liberaPedido() {
    let button = document.querySelector(".finish");
  
    if (nomePratoSelecionado !== undefined){
      if (nomeBebidaSelecionada !== undefined){
        if (nomeSobremesaSelecionada !== undefined){
          button.classList.add("finish-button");
          button.disabled = false;
          button.innerHTML = "Fechar pedido";
        }
      }
    } 
}

function finishorder(){
  if (nomePratoSelecionado !== undefined) {
    if (nomeBebidaSelecionada !== undefined) {
      if (nomeSobremesaSelecionada !== undefined) {
        const divfinishorder = document.querySelector(".whats");

        console.log(divfinishorder);

        divfinishorder.querySelector(".dishes .name").innerHTML = nomePratoSelecionado;

        divfinishorder.querySelector(".drink .name").innerHTML = nomeBebidaSelecionada;

        divfinishorder.querySelector(".dessert .name").innerHTML = nomeSobremesaSelecionada;

        pricedishes = pricedishes.replace("R$ ", "");
        divfinishorder.querySelector(".dishes .price").innerHTML = pricedishes;
        pricedishes = pricedishes.replace(",", ".");

        pricedrinks = pricedrinks.replace("R$ ", "");
        divfinishorder.querySelector(".drink .price").innerHTML = pricedrinks;
        pricedrinks = pricedrinks.replace(",", ".");

        pricedesserts = pricedesserts.replace("R$ ", "");
        divfinishorder.querySelector(".dessert .price").innerHTML = pricedesserts;
        pricedesserts = pricedesserts.replace(",", ".");

        precoTotal =
          Number(pricedesserts) + Number(pricedrinks) + Number(pricedishes);

        const divPrecoTotal = divfinishorder.querySelector(
          ".Total .price-total"
        );

        divPrecoTotal.innerHTML = `R$ ${precoTotal.toFixed(2)}`;

        let msg = `Olá, gostaria de fazer o pedido:
       - Prato: ${nomePratoSelecionado}
       - Bebida: ${nomeBebidaSelecionada}
       - Sobremesa: ${nomeSobremesaSelecionada}
       Total: R$ ${precoTotal.toFixed(2)}`;

        msg = encodeURIComponent(msg);

        const linkWP = `https://wa.me/5544991539736?text=${msg}`;

        window.open(linkWP);
        console.log(msg);
      }
    }
  }
}






