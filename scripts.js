const dino = document.getElementById("dino")
const cactus = document.getElementById("cactus")

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump")

    setTimeout(() => {
      dino.classList.remove("jump")
    }, 300)
  }
}

let isAlive = setInterval(function() {
  
  // get current dino y-position
  let dinoTop =  parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
   
  //get current dino x-position
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

  //direct collision 
  if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    //collision 

    alert("Game Over")
  }

}, 10)

document.addEventListener("keydown", function(event) {
  jump()
})