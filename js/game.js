AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default: "#coin1" },    
    },
    update: function () {
      this.isCollided(this.data.elementId);
    },
    isCollided: function (elemntId) {
      const element = document.querySelector(elemntId);
      console.log("test")
      console.log(element)
      element.addEventListener("collide", (e) => {
        console.log("test2")
        var id = element.getAttribute("id")
        if (id.includes("#coin")) {
          console.log("collided")  
          element.setAttribute("visible", false)
          this.updateScore()
        } else {
          this.gameOver()
        }
      });
    },
    updateScore:function(){
      var element = document.querySelector("#score")
      var count = element.getAttribute("text").value;
      var currentScore = parseInt(count)
      currentScore += 10
      element.setAttribute("text", {
        value:currentScore
      })
    },
    gameOver:function(){
      var carE1 = document.querySelector("#car_model")
      var element = document.querySelector("#game_over_text")
      element.setAttribute("visible", true)
      carE1.setAttribute("dynamic-body", {
        mass:1
      })
    }
    
  });
  