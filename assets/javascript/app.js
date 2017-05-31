
var startButton = $("#startButton").html("<img src ='assets/images/playNowTrans.png' width='250px'/>");
timer = 30;
var answer = $("#answer");
var questions = $("#questions")
var pics = $("pics");
var wait;
var questions;
var button = $(".button");
$("#startButton").show();
$("#timer").hide();
$("#questionChoice").hide();

var questions = [
{
	question:'What technology is apart of c++?',
	key:'OOP',
	choices:['OOP','CCT' ,'ODW' ,'C-+']
},
{
	question:'What does CSS stand for?',
	key:'Cascading Style Sheet',
	choices:['Complex Style Syntax','Complete Sound Sheet' ,'Cascading Style Sheet' ,'None of the above']
},
{
	question:'What does a compiler do?',
	key:'Converts the coding into another computer language',
	choices:['Makes code start','Tests to see if program runs fine' ,'usually to make an executable program' ,'Converts the coding into another computer language']
},
{
	question:'Which is the correct CSS syntax?',
	key:'body {color: black}',
	choices:['{body;color:black}','body {color: black}' ,'body:color=black(body}' ,'body:color=black']
},
{
	question:'Why are the marquee and blink elements not used in most sites?',
	key:'They are distracting and decrease Usability',
	choices:['They are distracting and decrease Usability','Because they are complex' ,'You need to pay for a lisencse to use them' ,'None of the above']
}
];

/*
 for (var i = 0 ; i < questions.length ; i++) {
		console.log(questions[0].choices[i]);
}
*/

////////////////////////////////////////////////
/////////////Set time Interval/////////////////
////////////////////////////////////////////////

var score = 0;
var timer = 30;
var intervalId;
var totalScore = score;
function run() {
	intervalId = setInterval(decrement, 1000);
}
function decrement(){
	timer--;
	$("#timer").html(timer);

if (timer === 0) {
	stop();
	alert("Time Up!!");
	$("#questionChoice").empty();
	$("#pics").html('<img src="assets/images/byeGif.gif" width="80% height="auto"/>');
	$("#timer").hide;
	$("#questions").document.write("YOU LOST!!");
  }
}

function stop() {
	clearInterval(intervalId);
}

/////////start game///////////////////
	$("#startButton").click(function(){
	$(startButton).hide();
	$("#timer").show();
	$("#questionChoice").show();
	
	run();

	// $("button").on("click", function(){
	// 	if(questions[0].choices[i]) !== question[0].key){
	// 		alert("air");
	// 	}
	// });
   
    buttonWork(0);
  
});

  function buttonWork(index) {
    

  	$("#questions").html(questions[index].question);
	$("#a").html(questions[index].choices[0]);
	$("#b").html(questions[index].choices[1]);
	$("#c").html(questions[index].choices[2]);
	$("#d").html(questions[index].choices[3]);




	$("#a").unbind().on("click", function(){
		 if(questions[index].choices[0] === questions[index].key ){
		 	console.log("correct");
		 	score++;
		 	console.log(score);
		 	$("#answer").show();
		 	$("#pics").show();
		 	$("#pics").html('<img src="assets/images/niceGif.gif" width="80% height="auto"/>');
			$("#answer").html("CORRECT!! " + "'" + questions[index].key + "'" + " is an answer.");
			
		 }else{
		 	console.log("wrong");
		 	$("#answer").show();
		 	$("#pics").show();
		 	$("#pics").html('<img src="assets/images/noGif.gif" width="80% height="auto"/>');
			$("#answer").html("INCORRECT!! " + "'" + questions[index].key + "'" + " is an answer.");
			
		 }

		$("#questionChoice").hide();
		stop();
		
		   setTimeout(function(){
			//$("#content").empty();
            console.log("hi");
            $("#pics").hide();
            $("#answer").hide();
           // $("#timer").show();
	        $("#questionChoice").show();
	         if(index < 4){
	          index = index+1;	
	          stop();
	          timer =31 ;
	          run();
	          buttonWork(index);
              }else{

              	$("#content").empty();
              }
             

			}, 5000);



	})	

	$("#b").unbind().on("click", function(){
          if(questions[index].choices[1] === questions[index].key ){
		 	console.log("correct");
		 	score++;
		 	console.log(score);
		 	$("#answer").show();
		 	$("#pics").show();
		 	$("#pics").html('<img src="assets/images/ahGif.gif" width="80% height="auto"/>');
		$("#answer").html("CORRECT!! " + "'" + questions[index].key + "'" + " is an answer.");
		 }else{
		 	console.log("wrong");
		 	$("#answer").show();
		 	$("#pics").show();
		 	$("#pics").html('<img src="assets/images/failGif.gif" width="80% height="10px"/>');
		$("#answer").html("INCORRECT!! " + "'" + questions[index].key + "'" + " is an answer.");
		 }

		$("#questionChoice").hide();
		stop();
		
			setTimeout(function(){
			  console.log("hi");
            $("#pics").hide();
            $("#answer").hide();
           // $("#timer").show();
	        $("#questionChoice").show();
	         if(index < 4){
	          index = index+1;	
	          //console.log(index);
	          stop();
	          timer =31 ;
	          run();
	          buttonWork(index);
              }else{

              	$("#content").empty();
              }
             
   
             

			}, 5000);
	})	

	$("#c").unbind().on("click", function(){
		if(questions[index].choices[2] === questions[index].key ){
		 	console.log("correct");
		 	score++;
		 	
		 	$("#answer").show();
		 	$("#pics").show();
		 	$("#pics").html('<img src="assets/images/ahGif.gif" width="80% height="auto"/>');
		$("#answer").html("CORRECT!! " + "'" + questions[index].key + "'" + " is an answer.");
		 }else{
		 	console.log("wrong");
		 	$("#answer").show();
		 	$("#pics").show();
		 	$("#pics").html('<img src="assets/images/toughGif.gif" width="80% height="auto"/>');
		$("#answer").html("INCORRECT!! " + "'" + questions[index].key + "'" + " is an answer.");
		 }

		$("#questionChoice").hide();
		stop();
		
			setTimeout(function(){
			  // console.log("hi");
            $("#pics").hide();
            $("#answer").hide();
           // $("#timer").show();
	        $("#questionChoice").show();
	        if(index < 4){
	          stop();
	          timer =31;
	          run();
	          index = index+1;	
	          buttonWork(index);

              }else{

              	$("#content").empty();

              }
             
   
             
			}, 5000);
	})

	$("#d").unbind().on("click", function(){

		if(questions[index].choices[3] === questions[index].key ){
		 	console.log("correct");
		 	score++;
		 	
		 	$("#answer").show();
		 	$("#pics").show();
			$("#pics").html('<img src="assets/images/yayGif.gif" width="80% height="auto"/>');
			$("#answer").html("CORRECT!! " + "'" + questions[index].key + "'" + " is an answer.");
		 }else{
		 	console.log("wrong");
		 	$("#answer").show();
		 	$("#pics").show();
			$("#pics").html('<img src="assets/images/breakdownGif.gif" width="80% height="auto"/>');
			$("#answer").html("INCORRECT!! " + "'" + questions[index].key + "'" + " is an answer.");
		 }

		$("#questionChoice").hide();
		stop();

			setTimeout(function(){
			  console.log("hi");
            $("#pics").hide();

            $("#answer").hide();
           // $("#timer").show();
	        $("#questionChoice").show();
	         if(index < 4){
	          stop();
	          timer =31 ;
	          run();	
	          index = index+1;	
	          buttonWork(index);
              }else{


              	$("#content").empty();
              }
             
             
			}, 5000);
	})







  } 	





		   

            /*

		    $("#content").show();
			$("#questions").html(questions[1].question);
			$("#a").html(questions[1].choices[0]);
			$("#b").html(questions[1].choices[1]);
			$("#c").html(questions[1].choices[2]);
			$("#d").html(questions[1].choices[3]);
			$(timer).reset;

	        */



	
	 
	// var fadeOut = setTimeout (function(){
	// 	$("#content").fadeOut();},5000);

				

	// setTimeout(function(){
	// $("#content").empty();
	// }, 8000);



// score = 0;
// $("button").click(function(){
// score++;
// console.log(score);
// });