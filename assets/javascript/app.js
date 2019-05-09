
// put it in the object
$('#start').on('click', function () {
    game.start();
})

$(document).on('click', '#end',function(){
    game.done();
})
var questions = [
    {
        question: "Who wrote the 1859 novel Oblomov, whose lazy, daydreaming titular character satirizes the contemporary Russian nobility??",
        answers: ["Andrey Bely", "Ivan Bunin", "Ivan Goncharov"],
        correctAnswer: "Ivan Goncharov"
    },
    {
        question: "What is the famous opening line of Leo Tolstoy’s novel Anna Karenina??",
        answers: ["All happy families are alike", "It was a bright cold day", "It is a truth universally acknowledge"],
        correctAnswer: "All happy families are alike"
    },
    {
        question: "What novel written by Nikolai Gogol traces the adventures of the landless social-climbing Pavel Ivanovich Chichikov, a dismissed civil servant out to seek his fortune???",
        answers: ["Nevsky Prospect", "Dead Soul", "The Overcoat"],
        correctAnswer: "Dead Soul"
    }];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 10,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter=== 0){
            clearInterval(counter)
            // console.log("time is up");
            game.done();
        }
    },

    start: function (){
        timer = setInterval(game.countdown,1000);
        $('.subwrapper').prepend('<h2>Time Remaining: <span id="counter">10</span> Seconds </h2>');
        $('#start').remove()
        for (var i = 0; i < questions.length; i++) {
            $('.subwrapper').append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                $('.subwrapper').append("<input type='radio' name='question-" + i + "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);

            }
        }
        $('.subwrapper').append('<br><button id="end">DONE</button>');
    },
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },

    result: function () {
        clearInterval(timer);
        $('.subwrapper h2').remove();
        $('.subwrapper').html("<h2> All Done!</h2>");
        $('.subwrapper').append("<h3> Correct Answers: " + this.correct + "</h3>");
        $('.subwrapper').append("<h3> Incorrect Answers: " + this.correct + "</h3>");
        $('.subwrapper').append("<h3> Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
    
};

