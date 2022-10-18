const playerText = document.querySelector(".player_text")
const blocks = document.querySelectorAll(".block")
const error = document.querySelector(".error")
const playGround = document.querySelector(".play_ground")

let player =`X`
playerText.innerHTML=`${player}'s Turn!`
let gameOver = false


blocks.forEach(function(block){
    block.addEventListener("click",function(){
        if(player ===`X` && block.innerHTML===""){
            block.innerHTML = player
            player ='O'
            playerText.innerHTML=`${player}'s Turn!`
        }
        else if(player ===`O`&& block.innerHTML===""){
            block.innerHTML = player
            player ='X'
            playerText.innerHTML=`${player}'s Turn!`
            
        }
        else if(block.innerHTML==="X" || block.innerHTML==="O"){
                error.style.opacity ="1" 
                block.style.border ="2px solid red"
                setTimeout(()=>{
                    error.style.opacity ="0" 
                    block.style.border ="1px solid #AEBDCA"
                },2000)
        }
            
      
        checkWinnerRow();
        checkWinnerCol();
        checkWinnerDia();
        checkTie();
        gameStatus();
        
        
    });
    
})


function checkWinnerRow(){
    if(blocks[0].innerText === blocks[1].innerText && blocks[0].innerText === blocks[2].innerText && !(blocks[0].innerText==="")){
        playerText.innerHTML= `${blocks[0].innerText}'s Won!`
        playerText.style.scale ="2"
        playerText.style.color ="green"
        gameOver = true
    }else if(blocks[3].innerText === blocks[4].innerText && blocks[3].innerText === blocks[5].innerText && !(blocks[3].innerText==="")){
        playerText.innerHTML= `${blocks[3].innerText}'s Won!`
        playerText.style.scale ="2"
        playerText.style.color ="green"
        gameOver = true
    }else if(blocks[6].innerText === blocks[7].innerText && blocks[6].innerText === blocks[8].innerText && !(blocks[6].innerText==="")){
        playerText.innerHTML= `${blocks[6].innerText}'s Won!`
        playerText.style.scale ="2"
        playerText.style.color ="green"
        gameOver = true
    }
    
};

function checkWinnerCol(){
    if(blocks[0].innerText === blocks[3].innerText && blocks[0].innerText === blocks[6].innerText && !(blocks[0].innerText==="")){
        playerText.innerHTML= `${blocks[0].innerText}'s Won!`
        playerText.style.scale ="2"
        playerText.style.color ="green"
        gameOver = true
    }else if(blocks[1].innerText === blocks[4].innerText && blocks[1].innerText === blocks[7].innerText && !(blocks[1].innerText==="")){
        playerText.innerHTML= `${blocks[1].innerText}'s Won!`
        playerText.style.scale ="2"
        playerText.style.color ="green"
        gameOver = true
    }else if(blocks[2].innerText === blocks[5].innerText && blocks[2].innerText === blocks[8].innerText && !(blocks[2].innerText==="")){
        playerText.innerHTML= `${blocks[2].innerText}'s Won!`
        playerText.style.scale ="2"
        playerText.style.color ="green"
        gameOver = true
    }
};

function checkWinnerDia(){
    if(blocks[0].innerText === blocks[4].innerText && blocks[0].innerText === blocks[8].innerText && !(blocks[0].innerText==="")){
        playerText.innerHTML= `${blocks[0].innerText}'s Won!`
        playerText.style.scale ="2"
        playerText.style.color ="green"
        gameOver = true
    }else if(blocks[2].innerText === blocks[4].innerText && blocks[2].innerText === blocks[6].innerText && !(blocks[2].innerText==="")){
        playerText.innerHTML= `${blocks[2].innerText}'s Won!`
        playerText.style.scale ="2"
        playerText.style.color ="green"
        gameOver = true
    }
};

function checkTie(){
    let values = []
    blocks.forEach((block)=> values.push(block.textContent))
    if(!values.includes("")){
        playerText.innerHTML= `Woov this tie`
        playerText.style.scale ="2"
        playerText.style.color ="red"
        gameOver = true
    }

}


function gameStatus(){
    if(gameOver){
        playGround.classList.add("disabled")
        return
    }
}


