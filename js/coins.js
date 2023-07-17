// Registering component in Collider.js
AFRAME.registerComponent("coins", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `coin${i}`;
  
        var position = { x: -3, y: 3, z: Math.random() * -200};
  
        //call the function
        this.coins(id, position);
      }
    },
    coins: (id, position) => {
      console.log("spawned")
      var sceneEl = document.querySelector("#scene");
  
      var coinEl = document.createElement("a-entity");

      coinEl.setAttribute("id",id);
      coinEl.setAttribute("position",position);
      
      coinEl.setAttribute("material","color","#ff9100");
      
      coinEl.setAttribute("gltf-model", "./assets/stylized_coin/scene.gltf")
  
      coinEl.setAttribute("static-body", {
        shape:'sphere',
        sphereRadius:2
      })
  
      coinEl.setAttribute("animation",{
        property:"rotation",
        to:"0 360 0",
        loop:"true",
        dur:1000
      })
  
      
      coinEl.setAttribute("game-play", {
        elementId: `#${id}`,
      });

      sceneEl.appendChild(coinEl);
    },
  });
  