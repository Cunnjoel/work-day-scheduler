function updateTime() {
    var today= moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").text(today)
};

updateTime();
setInterval(function(){
    updateTime();
},1000);
