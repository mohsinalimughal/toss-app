var head = document.querySelector("#head")
var tale = document.querySelector("#tale")
var result = document.querySelector("#result")
var img = document.querySelector("img")


function clickHead(){
       userChoise = 1
       compChoise = Math.ceil(Math.random()*2)
       console.log(compChoise)
       if(compChoise===1){
         img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-PtiC-NYMo3H-AEjSp6UvNbL_qfXjK68GQ&s"
         result.innerHTML = `You won`
        }else{
            
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREDHkvxtlR3dK9-_bdve9QVxiKwITtBu_beQ&s"
            result.innerHTML = `You loss`
       }
}
function clickTall(){
       userChoise = 0
       compChoise = Math.ceil(Math.random()*2)
       console.log(compChoise)
       if(compChoise===1){
         img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-PtiC-NYMo3H-AEjSp6UvNbL_qfXjK68GQ&s"
         result.innerHTML = `You loss`
        }else{
            
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREDHkvxtlR3dK9-_bdve9QVxiKwITtBu_beQ&s"
            result.innerHTML = `You won`
       }
}