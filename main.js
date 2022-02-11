let cheese = 0;
let knife = 0;
let drill = 0;
let rover = 0
let grater = 0;
let multiTotal = 0;

let clickUp = {
  cKnife: { price: 100, quantity: 0, multiplier: 2 },
  cDrill: { price: 1000, quantity: 0, multiplier: 5 }
}

let autoUp = {
  rover: { price: 600, quantity: 0, multiplier: 15 },
  grater: { price: 6000, quantity: 0, multiplier: 30 }
}

function mine() {
  if (clickUp.cKnife.quantity > 0) {
    cheese += 10(clickUp.cKnife.multiplier)
  } else {
    cheese += 10
  }
  drawRsc()
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
    <h5>Cheese: <span id="cTotal"> ${cheese}</span></h5>
    <h5>Cheese Knives: <span id="knife"> ${knife}</span></h5>
    <h5>Cheese Drill: <span> ${drill}</span></h5>
    <h5>Moustronauts: <span> ${rover}</span></h5>
    <h5>Graters: <span> ${grater}</span></h5>
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
      <h5>CPS (Cheese per second) <span> = 0</span></h5>
      <h5>CM (Cheese Multiplier) <span> x ${multiTotal}</span></h5>
    </div>

    `
  }
  document.getElementById('stats').innerHTML = template
}

function buyCKnife() {
  if (cheese >= clickUp.cKnife.price) {
    knife++
    cheese -= clickUp.cKnife.price
    clickUp.cKnife.multiplier++
  } else {
  } update()
}

function buyCDrill() {
  console.log(drill)
  if (cheese >= clickUp.cDrill.price) {
    drill++
    cheese -= clickUp.cDrill.price
    console.log(drill)
  } else {
  } update()
}

function buyRover() {
  if (cheese >= autoUp.rover.price) {
    rover++
    cheese -= autoUp.rover.price
  } else {
  } update()
}

function buyGrater() {
  if (cheese >= autoUp.grater.price) {
    grater++
    cheese -= autoUp.grater.price
    console.log(grater)
  } else {
  } update()
}
function update() {
  drawRsc()
  drawStats()
}

drawRsc()
drawStats()