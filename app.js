var head = document.querySelector("#head")
var tale = document.querySelector("#tale")
var result = document.querySelector("#result")
var img = document.querySelector("img")
var score1 = document.querySelector("#score")
var count1 = document.querySelector("#count")

score = 0
count = 0

function clickHead(){
       userChoise = 1
       compChoise = Math.ceil(Math.random()*2)
       console.log(compChoise)
       if(compChoise===1){
         img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-PtiC-NYMo3H-AEjSp6UvNbL_qfXjK68GQ&s"
         result.innerHTML = `You won The Toss`
         count++
         score++
         count1.innerHTML=`Attempt Count : ${count}`
         score1.innerHTML=`Score : ${score}`
        }else{
            
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREDHkvxtlR3dK9-_bdve9QVxiKwITtBu_beQ&s"
            result.innerHTML = `You loss The Toss `
            count++
        count1.innerHTML=`Attempt Count : ${count}`
         score1.innerHTML=`Score : ${score}`
       }
}
function clickTall(){
       userChoise = 0
       compChoise = Math.ceil(Math.random()*2)
       console.log(compChoise)
       if(compChoise===1){
         img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-PtiC-NYMo3H-AEjSp6UvNbL_qfXjK68GQ&s"
         result.innerHTML = `You loss The Toss`
         count++
                  count1.innerHTML=`Attempt Count : ${count}`
         score1.innerHTML=`Score : ${score}`
        }else{
            
            img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREDHkvxtlR3dK9-_bdve9QVxiKwITtBu_beQ&s"
            result.innerHTML = `You won The Toss`
            count++
            score++
         count1.innerHTML=`Attempt Count : ${count}`
         score1.innerHTML=`Score : ${score}`
       }
}