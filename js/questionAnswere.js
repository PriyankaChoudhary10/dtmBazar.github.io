
$('.questionAnswereSection').hide();
$('#starttest').click(function(){
    $('.questionAnswereSection').show();
    $('html,body').animate({
        scrollTop: $(".questionAnswereSection").offset().top},
        'slow');
});

(function() {
  var questions = 
     [{
        question: "How many womens are working in Your Company ?",
        choices: [500, 5, 10, 15, 20],
      }, 
      {
        question: "How many Mens are working in Your Company ?",
        choices: [3, 6, 9, 12, 18],
      }, 
      {
        question: "How many Children are working in Your Company ?",
        choices: [72, 99, 108, 134, 156],
      },
      {
        question: "How many Staffs are working in Your Company ?",
        choices: [4, 5, 6, 7, 8],
      },
      {
        question: "Temprory Workers are working in Your Company ?",
        choices: [20, 30, 40, 50, 64],
      }];
  
    
 
  var totalQuestions = questions.length;
  var questionCounter = 0;
  $('#prev').hide();
    $('.questionslist').show();
  $('.circularloaderwraper').hide();
  
$('#start').click(function(){
    if(questionCounter = -1){
        
        questionCounter  = questionCounter + 1;
       PaintQuestion();
        $(this).hide();
        $('#next').show();
        $('#prev').show();
    }
   
     
    
 });    
$('#next').click(function(){
    if(questionCounter <  (totalQuestions-1)){
        questionCounter  = questionCounter + 1;   
       PaintQuestion();
        $('#prev').show();
    } 
    else if(questionCounter =totalQuestions)
        {
             $('.circularloaderwraper').show();
             $('.questionslist').hide();
            $("#div_question_list").empty();
            $('#next').hide();
            $('#prev').hide();
            
        }
    
 });
    
$('#prev').click(function(){
    if(questionCounter > 0){
            questionCounter  = questionCounter -1;  
            PaintQuestion();
    }    
});
    
function PaintQuestion(){
    var question = questions[questionCounter];
     $("#div_question_list").html($("#question_list").tmpl([question]));
    return false;
}
    PaintQuestion();

  

})();