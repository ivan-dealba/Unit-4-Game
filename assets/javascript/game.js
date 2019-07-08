$(document).ready(function(){
    var winningNum = Math.floor((Math.random() * 51) + 25);
    var totalScore = 0;
    var totalWins = 0;
    var totalLosses = 0;
    // console.log(winningNum);
    var crysNum1 = Math.floor((Math.random() * 15) + 1);
    var crysNum2 = Math.floor((Math.random() * 15) + 1);
    var crysNum3 = Math.floor((Math.random() * 15) + 1);
    var crysNum4 = Math.floor((Math.random() * 15) + 1);
    console.log(crysNum1);
    console.log(crysNum2);
    console.log(crysNum3);
    console.log(crysNum4);

    $('#random-number').text(winningNum);

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

    function winOrLose(){
        if(totalScore === winningNum){
            alert('YOU WON!');
            totalWins++;
            $('#win').text(`Wins: ${totalWins}`);
        } else if(totalScore > winningNum){
            alert('YOU LOST!');
            totalLosses++;
            $('#loss').text(`Losses: ${totalLosses}`);
        }
    }
    
    

})