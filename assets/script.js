var textArea = document.querySelector("textarea")


function updateTime() {
    var today= moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(today)
};

updateTime();
    setInterval(function(){
        updateTime();
},1000);

var currentTime=$('.time-block').each(function(){
    const currentElement = $(this);
    console.log(currentElement);

    if (updateTime = currentTime){
        $("textarea").addClass("present")
    }else if (updateTime < this){
        $("textarea").addClass("past")
    }else $("textarea").addClass("future")
    })
    
