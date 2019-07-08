$(document).ready(function(){
    // Initial values which will be incremented as the game progresses
    var totalScore = 0;
    var totalWins = 0;
    var totalLosses = 0;
    // Randomly generated values
    var winningNum = Math.floor((Math.random() * 51) + 25);
    var crysNum1 = Math.floor((Math.random() * 15) + 1);
    var crysNum2 = Math.floor((Math.random() * 15) + 1);
    var crysNum3 = Math.floor((Math.random() * 15) + 1);
    var crysNum4 = Math.floor((Math.random() * 15) + 1);
    console.log(crysNum1);
    console.log(crysNum2);
    console.log(crysNum3);
    console.log(crysNum4);

    // Randomly generated number to be matched to win game
    $('#random-number').text(winningNum);

    // Clicking events assigned to images which will increment the total score by its randomly assigned number
    // Function to be called to determine if user score matches randomly generated winning number
    $('#crys-1').on('click', function(){
        totalScore += crysNum1;
        $('#total-score').text(`Total score: ${totalScore}`);
        winOrLose();
    })

    $('#crys-2').on('click', function(){
        totalScore += crysNum2;
        $('#total-score').text(`Total score: ${totalScore}`);
        winOrLose();
    })

    $('#crys-3').on('click', function(){
        totalScore += crysNum3;
        $('#total-score').text(`Total score: ${totalScore}`);
        winOrLose();
    })

    $('#crys-4').on('click', function(){
        totalScore += crysNum4;
        $('#total-score').text(`Total score: ${totalScore}`);
        winOrLose();
    })

    // Function which determines if user has won or lost
    // Wins and losses are updated on markup
    // Wining number and crystal numbers are reset and randomly generated again
    function winOrLose(){
        if(totalScore === winningNum){
            alert('YOU WON!');
            totalWins++;
            $('#win').text(`Wins: ${totalWins}`);
            totalScore = 0;
            $('#total-score').text(`Total score: ${totalScore}`);
            winningNum = Math.floor((Math.random() * 51) + 25);
            $('#random-number').text(winningNum);
            crysNum1 = Math.floor((Math.random() * 15) + 1);
            crysNum2 = Math.floor((Math.random() * 15) + 1);
            crysNum3 = Math.floor((Math.random() * 15) + 1);
            crysNum4 = Math.floor((Math.random() * 15) + 1);

            console.log('-----');
            console.log(crysNum1);
            console.log(crysNum2);
            console.log(crysNum3);
            console.log(crysNum4);
        } else if(totalScore > winningNum){
            alert('YOU LOST!');
            totalLosses++;
            $('#loss').text(`Losses: ${totalLosses}`);
            totalScore = 0;
            $('#total-score').text(`Total score: ${totalScore}`);
            winningNum = Math.floor((Math.random() * 51) + 25);
            $('#random-number').text(winningNum);
            crysNum1 = Math.floor((Math.random() * 15) + 1);
            crysNum2 = Math.floor((Math.random() * 15) + 1);
            crysNum3 = Math.floor((Math.random() * 15) + 1);
            crysNum4 = Math.floor((Math.random() * 15) + 1);

            console.log('-----');
            console.log(crysNum1);
            console.log(crysNum2);
            console.log(crysNum3);
            console.log(crysNum4);
        }
    }
    
    

})