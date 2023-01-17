let beginBtn = document.querySelector(".begin-btn");
let numOfPlayers = 0;
let players = [];
let playerName = document.querySelector('.player-name');
console.log(playerName);
let nextButton = document.querySelector('.next-btn');
console.log(nextButton);
playerName.classList.add('hide');
nextButton.classList.add('hide');
beginBtn.addEventListener("click",(e)=>{
    playerName.classList.remove('hide');
    nextButton.classList.remove('hide');
    numOfPlayers = Number(document.querySelector(".player-num").value);
    document.querySelector(".player-num").value = "";
    if(numOfPlayers<=1){
        alert("please enter a valid number");
        return;
    }

    localStorage.setItem("numOfPlayers",numOfPlayers);

    let nextBtn = document.querySelector(".next-btn");

    nextBtn.addEventListener("click",(e)=>{
        let playerRef = document.querySelector(".player-name");
        let playerName = playerRef.value;
        if(!playerName){
            alert("please enter a valid player name");
            return;
        }
        players.push(playerName);
         //console.log(playerName);
        playerRef.value = "";
        numOfPlayers--;
        if(numOfPlayers==0){
            console.log(players)
            console.log(JSON.stringify(players));
            localStorage.setItem("players",JSON.stringify(players))
            window.location.href = "./game.html";
            return;
        }
    })
})