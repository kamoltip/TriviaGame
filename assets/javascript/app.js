
var startButton = $("#startButton").html("<img src ='assets/images/playNowTrans.png' width='250px'/>");
var timer = 30;
var intervalId;

$("#startButton").show();
$("#timer").hide();
$(startButton).on("click", run);
// $("").on("click", stop);

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

$(startButton).click(function(){
	$(startButton).hide();
	// run();
	$("#timer").show();
	
});



// var questionOne = []
// var questOne = function("question", "choices", "answer"){
// 	var questionOne = "What is the newest version of HTML being developed?"
// 	var 
	
// };


