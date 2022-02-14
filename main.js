let cheese = 0;

let clickUp = {
  cKnife: { price: 100, quantity: 0, multiplier: 2 },
  cDrill: { price: 1000, quantity: 0, multiplier: 5 }
}

let autoUp = {
  rover: { price: 600, quantity: 0, multiplier: 15 },
  grater: { price: 6000, quantity: 0, multiplier: 40 }
}

function mine() {
  cheese += 10
  updateTot()

}

function drawRsc() {
  let template = ''
  {
    template += `
  <div class="card seeThru text-info">
  <div class="card-header">
    <h3 class="display-3 fw-bold text-info">Resources</h3>
  </div>
  <div class="card-body">
    <h5>Cheese: <span> ${cheese}</span></h5>
    <h5>Cheese Knives: <span> ${clickUp.cKnife.quantity} x ${clickUp.cKnife.multiplier}</span></h5>
    <h5>Cheese Drills: <span> ${clickUp.cDrill.quantity} x ${clickUp.cDrill.multiplier}</span></h5>
    <h5>Cheese Carts: <span> ${autoUp.rover.quantity} x ${autoUp.rover.multiplier}</span></h5>
    <h5>Cheese Graters: <span> ${autoUp.grater.quantity} x ${autoUp.grater.multiplier}</span></h5>
  </div>
</div>
  `
  }
  document.getElementById('resources').innerHTML = template
}

function drawStats() {
  let template = ''
  {
    template += `
    <div class="card seeThru text-info">
    <div class="card-header">
      <h3 class="display-3 fw-bold text-info">Stats</h3>
    </div>
    <div class="card-body">
      <h5>CPS (Cheese per Second) <span> = 0</span></h5>
      <h5>CCM (Cheese Click Multiplier) <span> x 0</span></h5>
    </div>

    `
  }
  document.getElementById('stats').innerHTML = template
}

function buyCKnife() {
  if (cheese >= clickUp.cKnife.price) {
    cheese -= clickUp.cKnife.price
    clickUp.cKnife.quantity++
    clickUp.cKnife.price *= 2
    updateTot()
  } else {
    alert('Need more 🧀🧀🧀')
  }
}

function buyCDrill() {
  if (cheese >= clickUp.cDrill.price) {
    cheese -= clickUp.cDrill.price
    clickUp.cDrill.quantity++
    clickUp.cDrill.price *= 2
    updateTot()
  } else {
    alert('Need more 🧀🧀🧀')
  }
}

function buyRover() {
  if (cheese >= autoUp.rover.price) {
    cheese -= autoUp.rover.price
    autoUp.rover.quantity++
    autoUp.rover.price *= 2
    updateTot()
  } else {
    alert('Need more 🧀🧀🧀')
  }
}

function buyGrater() {
  if (cheese >= autoUp.grater.price) {
    cheese -= autoUp.grater.price
    autoUp.grater.quantity++
    autoUp.grater.price *= 2
    updateTot()
  } else {
    alert('Need more 🧀🧀🧀')
  }
}

function multiClick(num) {
  for (let i = 0; i < num; i++) {
    mine()
    console.log('mining')
  }
}

function autoInt() {
  let interval = setInterval(autoCollect, 3000)
}

function clickCount() {
  let countElem = (clickUp.cKnife.multiplier * clickUp.cKnife.quantity) + (clickUp.cDrill.multiplier * clickUp.cDrill.quantity)
  if (countElem == 0) {
    countElem++
  }
  multiClick(countElem)
}

function multiAuto(num) {
  for (let i = 0; i < num; i++) {
    mine()
  }
}

function autoCollect() {
  let collectElem = (autoUp.rover.multiplier * autoUp.rover.quantity) + (autoUp.grater.multiplier * autoUp.grater.quantity)
  multiAuto(collectElem)
}


function updateTot() {
  drawStats()
  drawRsc()

}

updateTot()
autoInt()