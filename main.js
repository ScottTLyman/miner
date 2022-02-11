let cheese = 0;
let knife = 0;
let drill = 0;
let rover = 0
let grater = 0;

let clickUp = {
  cKnife: { price: 100, quantity: 0, multiplier: 1 },
  cDrill: { price: 1000, quantity: 0, multiplier: 4 }
}

let autoUp = {
  rover: { price: 600, quantity: 0, multiplier: 20 },
  grater: { price: 6000, quantity: 0, multiplier: 50 }
}

function mine() {
  cheese++
  drawRsc()
}

function buyCKnife() {
  knife++
  console.log(knife)
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
    <h5>Moustronauts: <span> 0</span></h5>
    <h5>Graters: <span> 0</span></h5>
  </div>
</div>
  `
  }
  document.getElementById('resources').innerHTML = template
}

drawRsc()