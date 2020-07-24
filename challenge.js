/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer,gamePlaying;
init();    

var lastDice;

document.querySelector('.btn-roll').addEventListener('click',function(){
    
    if(gamePlaying){
        //1. Random Number
    
    var dice0 = Math.floor(Math.random()*6)+1;
    var dice1 = Math.floor(Math.random()*6)+1;

    // 2. Display the result
    var diceDom0 = document.getElementById('dice0');
    var diceDom1 = document.getElementById('dice1');
    diceDom0.style.display = 'block';
    diceDom1.style.display = 'block';
    diceDom0.src = 'dice-'+dice0+'.png';
    diceDom1.src = 'dice-'+dice1+'.png';

     // 3. Update the current score if roll dice is not equal to 1
        if(dice0 !== 1 && dice1 !==1){
        
        //Add score
        roundScore += dice0 +dice1;
        document.querySelector('#current-' +activePlayer).textContent = roundScore;
        
    }else{
        
        //Next player
        nextPlayer();
    };

        
        
//    if(dice===6 && lastDice === 6){
//        //Player looses score
//        scores[activePlayer] = 0;
//        document.querySelector('#score-'+activePlayer).textContent = '0';
//        nextPlayer();
//    }
//    else if(dice !== 1){
//        
//        //Add score
//        roundScore += dice;
//        document.querySelector('#current-' +activePlayer).textContent = roundScore;
//        
//    }else{
//        
//        //Next player
//        nextPlayer();
//    };
//        lastDice = dice;
    };
    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
 if(gamePlaying){
        //1. Add current Scores to Global scores
    scores[activePlayer] += roundScore;
    
    //2. Update UI
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
     
     var input = document.querySelector('.final-score').value;
     //Undefined,0,null or "" are Coerced to false
     //Anythig else is Coerced to true
     var winningScore;
     if(input){
         winningScore = input;
     }else{
         winningScore = 100;
     }
     
     
    //3. Check if the player win the game
    if(scores[activePlayer] >= winningScore){
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
        document.getElementById('dice0').style.display = 'none';
        document.getElementById('dice1').style.display = 'none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying = false;

    }
    else{
       //Next Player
        nextPlayer();  
    }
     
 }
    
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
        roundScore = 0;
        
        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;
       
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
//        document.querySelector('.player-0-panel').classList.remove('active');
//        document.querySelector('.player-1-panel').classList.add('active');
        document.getElementById('dice0').style.display = 'none';
        document.getElementById('dice1').style.display = 'none';


};

document.querySelector('.btn-new').addEventListener('click',init);

function init()
{
    scores= [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice0').style.display = 'none';
    document.getElementById('dice1').style.display = 'none';

    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}



















////console.log(dice);
//

////document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+dice+'</em>'
//
//var x = document.querySelector('#score-0').textContent
//console.log(x)
