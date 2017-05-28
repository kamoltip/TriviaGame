
var startButton = $("#startButton").html("<img src ='assets/images/playNowTrans.png' width='250px'/>");
var timer = 30;
var intervalId;
//questions,answer,pics///////////
var answer = $("#answer");
var questions = $("#questions");
var pics = $("pics");
var wait = setTimeout(1000);
$("#startButton").show();
$("#timer").hide();
$("#questionChoice").hide();
$(startButton).on("click", run);
// $("").on("click", stop);

////////////////////////////////////////////////
/////////////Set time Interval/////////////////
////////////////////////////////////////////////
function run() {
	intervalId = setInterval(decrement, 1000);
}

function decrement() {
	timer--;
	$("#timer").html(timer);

if (timer === 0) {
	stop();
	alert("Time Up!!");
  }
}

function stop() {
	clearInterval(intervalId);
}

///////////start game///////////////////
$(startButton).click(function(){
	$(startButton).hide();
	$("#timer").show();
	$("#questionChoice").show();
	$("#b").on("click", function(){
		$("#questionChoice").empty();
		stop();
		$("#pics").html('<img src="assets/images/niceGif.gif" width="80% height="auto"/>');
		$("#answer").html("CORRECT!! " + "'" + key[0] + "'" + " is an answer.");

	});

});


var quiz = []; 
var intervalId;
var questions = [["What technology is apart of c++?"], ["What does CSS stand for?"], ["What does a compiler do?"], ["Which is the correct CSS syntax?"], ["What does HTML stand for?"]];
var selectList = new Array(5);
selectList[0] = ["CCT","OOP","ODW","C-+"];
selectList[1] = ["Cascading Style Sheet","Complex Style Syntax","Complete Sound Sheet"];
selectList[2] = ["Makes code start.","Tests to see if program runs fine","Converts the coding into another computer language","usually to make an executable program."];
selectList[3] = ["body {color: black}","{body;color:black}","{body:color=black(body}", "body:color=black"];
selectList[4] = ["Hyper type marked language","Hyper text markup language","Hyped terrain mock language","Hyper typeface main loop"];
// console.log(questions[0]);
$("#questions").html(questions[0]);




var key = ["OOP","Cascading Style Sheet","Converts the coding into another computer language, usually to make an executable program.","Body {color: black}","Hyper text markup language"];
function webDevQuiz(questions, selectList, key,) {
	this.questions = questions;
	this.selectList = selectList;
	this.key = key;
	this.result = true;
}

for (var i = 0; i < 1; i++) {
	var inputQuiz = new webDevQuiz (questions[i],selectList[i],key[i]);
	
	$("#a").html(inputQuiz.selectList[0]);
	$("#b").html(inputQuiz.selectList[1]);
	$("#c").html(inputQuiz.selectList[2]);
	$("#d").html(inputQuiz.selectList[3]);


	quiz.push(inputQuiz);

	   function htmlEncode(value) {
         return $(document.createElement('div')).text(value).html();
     }
}
	

