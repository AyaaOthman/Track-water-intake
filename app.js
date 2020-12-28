const bigContainer = document.querySelector(".total-water-container");
const water = document.querySelector(".water");
const cupWaters = document.querySelectorAll(".cup-water");
const smallCups = document.querySelectorAll(".small-water-container");
const remainedWater = document.querySelector('.water-content')
const drankWater = document.querySelector('.new-water')
const arrSmallCups = Array.from(smallCups);
let current;
arrSmallCups.map((cup, idx) => {
  cup.addEventListener("click", () => {
    bigContainerFiller(idx);
    smallCupFill(idx);
    
  });
});

function bigContainerFiller(idx) {
  current = 1 + idx;
  const waterAmount = current * 12.5;
  const backgroundRatio = 100 - waterAmount;
  water.style.height = `${backgroundRatio}%`;
  water.style.borderRadius = "0px";
  const waterRemainedValue = 2 - (current*0.25)
  remainedWater.textContent =  waterRemainedValue

  if (waterRemainedValue === 0){
      remainedWater.parentNode.style.display = 'none'
  }else{
    remainedWater.parentNode.style.display = 'block'
  }
  
  drankWater.textContent = `${current*0.25} L`
}

function smallCupFill(idx) {
  arrSmallCups.map((cup, idx2) => {
    if (idx2 <= idx) {
      cup.style.background = "rgb(0, 116, 211)";
      cup.style.color = "white";
    } else {
      cup.style.background = "white";
      cup.style.color = "rgb(0, 116, 211)"
    }
  });
}
