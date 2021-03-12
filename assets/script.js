var textArea = document.querySelector("textarea")
var saveBtn = $("saveBtn")
var times = "#9,#10,#11,#12,#13,#14,#15,#16,#17"
var currentTime = times.split(" ")

function updateTime() {
    var today= moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(today)
};

setInterval(updateTime,1000)
updateTime();



var colorBlocks=$('.time-block').each(function(){
    const currentElement = $(this);
    console.log(currentElement);

    if (moment().isAfter(currentElement)){
        $("textarea").addClass("past")
    }else if (moment().isBefore(currentElement)){
        $("textarea").addClass("future")
    }else $("textarea").addClass("present")
    })
    
console.log(colorBlocks)

saveBtn.on("click", function(){
    var text = $(this).prev()
    localStorage.setItem("textArea", textArea);
});
console.log(textArea)
localStorage.getItem(textArea)