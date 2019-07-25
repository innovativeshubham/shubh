//https://github.com/jonasschmedtmann/complete-javascript-course
window.onload=function(){
    var scores, roundScore, activePlayer, gamePlaying, winScore, dice_2;
    winScore = 20;
    newGame();
    document.querySelector('.btn-warning').addEventListener('click', function() {
        var newWinScore = document.getElementById('newScore').value;
        if(newWinScore) {
            winScore = newWinScore;
            document.getElementById('winningScore').textContent = 'Your new winning score is ' + winScore;
            console.log(winScore);
        } else {
            winScore = 20;
            document.getElementById('winningScore').textContent = 'Your default winning score is ' + winScore;
            alert('Your winning score is set to default');
        }
    });
    document.querySelector('.btn-primary').addEventListener('click', function() {
        if (gamePlaying) {
            document.getElementById('update').style.display = 'none';
            var dice = Math.floor(Math.random() * 6) + 1;
            var diceImg = document.querySelector('#diceimg');
            diceImg.style.display = 'block';
            diceImg.src = 'dice-' + dice + '.png';

            if (dice === 6 && dice_2 === 6) {
                scores[activePlayer] = 0;
                document.getElementById('score-' + activePlayer).textContent = 0;
                changePlayer();
            } else if (dice !== 1) {
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            } else {
                changePlayer();
            }
            dice_2 = dice;
        }
        
    });
    
    
    document.querySelector('.btn-danger').addEventListener('click', function(){
        if (gamePlaying) {
            document.getElementById('update').style.display = 'none';
            scores[activePlayer] += roundScore;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            if (scores[activePlayer] >= winScore) {
                document.getElementById('winner-' + activePlayer).textContent = 'Winner!';
                document.getElementById('player-' + activePlayer).classList.toggle('bg-info');
                document.getElementById('player-' + activePlayer).classList.toggle('bg-light');
                document.getElementById('currentdisplay-' + activePlayer).classList.toggle('bg-danger');
                document.getElementById('currentdisplay-' + activePlayer).classList.toggle('bg-light');
                document.getElementById('currentdisplay-' + activePlayer).classList.toggle('text-light');
                document.querySelector('#diceimg').style.display = 'none';
                gamePlaying = false;
            } else {
                changePlayer();
            } 
        }       
    });
    
    document.querySelector('.btn-success').addEventListener('click', newGame);
    
    function changePlayer() {
        activePlayer === 0 ? activePlayer =  1 : activePlayer = 0;
            roundScore = 0;
            
            document.getElementById('current-0').textContent = 0;
            document.getElementById('current-1').textContent = 0;
            var player_0 = document.getElementById('player-0').classList;
            var player_1 = document.getElementById('player-1').classList;
            var cScore = document.getElementById('currentdisplay-0').classList;
            var cScore_1 = document.getElementById('currentdisplay-1').classList;

            player_0.toggle('bg-info');
            player_0.toggle('bg-light');
            player_1.toggle('bg-light');
            player_1.toggle('bg-info');
            cScore.toggle('bg-light');
            cScore.toggle('text-light');
            cScore.toggle('bg-danger');
            cScore_1.toggle('bg-light');
            cScore_1.toggle('text-light');
            cScore_1.toggle('bg-danger');
    }
    
    function newGame() {
        scores = [0,0];
        roundScore = 0;
        activePlayer = 0;
        gamePlaying = true;
        winScore = 20;
        document.getElementById('winningScore').textContent = 'Your default winning score is ' + winScore;
        document.getElementById('update').style.display = 'block';
        document.querySelector('#diceimg').style.display = 'none';
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        document.getElementById('score-0').textContent = 0;
        document.getElementById('score-1').textContent = 0;
        var player_0 = document.getElementById('player-0').classList;
        var player_1 = document.getElementById('player-1').classList;
        var cScore = document.getElementById('currentdisplay-0').classList;
        var cScore_1 = document.getElementById('currentdisplay-1').classList;
        document.getElementById('winner-0').textContent = 'Player-1';
        document.getElementById('winner-1').textContent = 'Player-2';
        player_0.remove('bg-light');
        player_0.remove('bg-info');
        player_0.add('bg-info');
        player_1.remove('bg-info');
        player_1.remove('bg-light');
        player_1.add('bg-light');
        cScore.remove('bg-danger');
        cScore.remove('text-light');
        cScore.remove('bg-light');
        cScore.add('bg-light');
        cScore_1.remove('bg-light');
        cScore_1.remove('bg-danger');
        cScore_1.remove('text-light');
        cScore_1.add('text-light');
        cScore_1.add('bg-danger');
    };
}