//all the audio files
const audio_1 = new Audio('sounds/CONTINUE_SOUND_1.mp3');
const audio_2 = new Audio('sounds/CONTINUE_SOUND_2.wav');
const audio_3 = new Audio('sounds/CONTINUE_SOUND_3.wav');
const audio_4 = new Audio('sounds/LOST_SOUND.mp3');
const audio_5 = new Audio('sounds/CONTINUE_SOUND_4.mp3');
const audio_6 = new Audio('sounds/CONTINUE_SOUND_5.mp3');
const audio_7 = new Audio('sounds/CONTINUE_SOUND_6.mp3');

var fileArr = [audio_1, audio_2, audio_3,audio_4,audio_5,audio_6,audio_7];
var min=0;
var max= (fileArr.length -1);
//getting all the players
let players = JSON.parse(localStorage.getItem("players"));
// console.log(players);
//showing all the players
for(let i=0;i<players.length;i++){
    let element = document.createElement('div');
    element.className = 'child';
    element.id =`player${i+1}`;
    element.innerText = `${players[i]}`;
    let ul = document.querySelector('div.rem-players');
    //console.log(ul)
    ul.appendChild(element);
}
let limit = players.length;
//console.log(limit);

///function to remove a player
function removePlayer (playerId){
    let pp = document.getElementById(`player${playerId}`);
    //console.log(pp);
    pp.remove();
    limit--;
}

/////////////////////////////////////////////////////////////////////////////////////

let prev = false; //check to remove the 'red' class
let currentPlayer;
let playerid = 0;
for(let i=1;i<=7;i++){
    const btn = document.getElementById(`${i}`);
    btn.addEventListener("click",(e)=>{
        console.log(`limit ${limit}`);
        if(limit == 1){
            let winn = document.querySelector('.winner');
            console.log(winn);
            winn.innerText  = `${players[0]} is the winner`;
            winn.classList.add('win');
        }
        if(playerid == limit){playerid = 0;}
        playerid++;
        console.log(playerid);
        audio=btn;
        if(prev == true){
            for(let i = 1;i<=7;i++){
                let ele = document.getElementById(`${i}`);
                let audi = ele;
                audi.classList.remove('red');
                audi.classList.add('audio');
            }
            prev = false;
        }
        //console.log("element clicked");
        var random = Math.floor(Math.random() * (+max - +min) + +min);
        let audio_69 = fileArr[random];
        if(currentPlayer && currentPlayer!=audio_69){
            currentPlayer.pause();
        }
        //checking for the lost_sound file
        if(String(audio_69.src) == String(audio_4.src)){
            audio_69.currentTime = 0;
            audio_69.play();
            //console.log(audio);
            audio.classList.remove('audio');
            audio.classList.add('red');
            prev = true;
            //calling player remover function
            removePlayer(playerid);
            playerid = 0;
        }else{
            audio_69.currentTime = 0;
            audio_69.play();
        }
        currentPlayer = audio_69;
    });
}