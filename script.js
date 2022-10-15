function selectdishes(dishesclicked) {
    const dishespreviouslyselected = document.querySelector(".dishes .selected");
  
    if (dishespreviouslyselected !== null) {
        dishespreviouslyselected.classList.remove("selected");
    }
  
    dishesclicked.classList.add("selected");

    dishes = dishesclicked.querySelector(".title1").innerHTML;
    pricedishes = dishesclicked.querySelector(".price").innerHTML;
  
    liberaPedido();
  
}

function selectdrinks(drinksclicked) {
    const drinkspreviouslyselected = document.querySelector(".drinks .selected");
  
    if (drinkspreviouslyselected !== null) {
      drinkspreviouslyselected.classList.remove("selected");
    }
  
    drinksclicked.classList.add("selected");

    drinks = drinksclicked.querySelector(".title1").innerHTML;
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

    desserts = dessertsclicked.querySelector(".title1").innerHTML;
    pricedesserts = dessertsclicked.querySelector(".price").innerHTML;
  
    liberaPedido();
}

function liberaPedido() {
    let button = document.querySelector(".finish");
  
    if (dishes !== undefined && drinks !== undefined && desserts !== undefined) {
      button.classList.add("finish-button");
      button.disabled = false;
      button.innerHTML = "Fechar pedido";
    }
}
