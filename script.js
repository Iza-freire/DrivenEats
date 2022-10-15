function selectPlates(platesclicked) {
    const platespreviouslyselected = document.querySelector(".Plates .selected");
  
    if (platespreviouslyselected !== null) {
      platespreviouslyselected.classList.remove("selected");
    }
  
    platesclicked.classList.add("selected");
  
}

function selectdrinks(drinksclicked) {
    const drinkspreviouslyselected = document.querySelector(".drinks .selected");
  
    if (drinkspreviouslyselected !== null) {
      drinkspreviouslyselected.classList.remove("selected");
    }
  
    drinksclicked.classList.add("selected");
}

function selectdesserts(dessertsclicked) {
    const dessertpreviouslyselected = document.querySelector(
      ".desserts .selected"
    );
  
    if (dessertpreviouslyselected !== null) {
      dessertpreviouslyselected.classList.remove("selected");
    }
  
    dessertsclicked.classList.add("selected");
}