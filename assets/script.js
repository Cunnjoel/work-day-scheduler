//variables to be used
var textArea = document.querySelector("textarea")
var saveBtn = $("saveBtn")
var times = "#9,#10,#11,#12,#13,#14,#15,#16,#17"
var currentTime = times.split(" ")

//moment function to make clock
function updateTime() {
    var today= moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(today)
};

setInterval(updateTime,1000)
updateTime();


function timer(){
    //gets current hour
    var nowtime = moment().hour();

    //changes colors of text area based on time
    $('.time-block').each(function(){
        const timeBlock = parseInt($(this).attr("id").split("hour")[1]);

         if (timeBlock < nowtime){
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }else
        if (timeBlock === nowtime){
            $(this).removeClass("future");
            $(this).addClass("present");
            $(this).removeClass("past");
        }else{
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }
    })
}

timer();

//save to local storage upon button click
$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        //get values in jquery 
        var input = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        //save to localstorage
        localStorage.setItem(time,input);
    })
})

//get localstorage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

