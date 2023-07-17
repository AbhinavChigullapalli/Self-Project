AFRAME.registerComponent("drive",{
    schema:{
        carMovement:{type:"number", default:0},
    },
    init:function(){
        window.addEventListener("keydown", (e) => {
            if(e.key === "ArrowUp"){
                this.data.carMovement = 0
                this.data.carMovement -= 0.1
            }
            if(e.key === "ArrowDown"){
                this.data.carMovement = 0
                this.data.carMovement += 0.1
            }
        })
    },
    tick:function(){
        var carPosition = this.el.getAttribute("position")

        carPosition.z += this.data.carMovement

        this.el.setAttribute("position", {
            x:carPosition.x,
            y:carPosition.y,
            z:carPosition.z
        })
    }
})

AFRAME.registerComponent("camera-angle",{
    schema:{
        cameraPosition:{type:"number", default:0},
    },
    init:function(){
        window.addEventListener("keydown", (e) => {
            if(e.key === "m"){
                this.data.cameraPosition = 0
                this.data.cameraPosition -= 9
                this.move()
            }
            if(e.key === "n"){
                this.data.cameraPosition = 0
                this.data.cameraPosition += 9
                this.move()
            }
        })
    },
    move:function(){
        var cameraMovement = this.el.getAttribute("position")

        cameraMovement.z += this.data.cameraPosition

        this.el.setAttribute("position", {
            x:cameraMovement.x,
            y:cameraMovement.y,
            z:cameraMovement.z
        })
    }
})



