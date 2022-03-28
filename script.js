
var currentDay = moment();
//console.log(currentDay);
var currentHour = currentDay.format("hA");
//console.log(currentHour);
var currentTime = moment().format("DD.MM.YYYY HH");
//console.log(currentTime);

var toDoitem = $('input[name="todo-item"]');
var firstNameEl = $('input[name="first-name"]');
var saveBtnEl = $('.saveBtn')


// set date for today
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));


//checking in time is past present or future 
//getting any data already in local storage
    
    $("tr").each(function() {
        
        var thisTime = $(this).children("th").children("span").text()
        var taskTime = localStorage.getItem(thisTime)
        if(taskTime){
            $(this).find('input').val(taskTime)
        }
        console.log($(this).children("th").children("span").text())
        console.log($(this))
        var time = moment(thisTime, 'hA').format("DD.MM.YYYY HH")
        console.log(thisTime)

        var timeEql = currentTime == time
        console.log(timeEql)
        if (timeEql === true) {
            $(this).addClass('present').removeClass('past future');
            $(this).find('input').addClass('present').removeClass('past future');
            
        } else if (timeEql === false && currentTime > time){
            $(this).addClass('past').removeClass('present future');
            $(this).find('input').addClass('past').removeClass('present future');
            
        }else {
            $(this).addClass('future').removeClass('present past');
            $(this).find('input').addClass('future').removeClass('past present');
        }   
    });


//saves to do list to local storage
saveBtnEl.on('click', function () {
    console.log($(this).prev())
    var userInput = $(this).prev().val()
    console.log(userInput)
    var time = $(this).closest("tr").find('span').text()
    console.log(time)
    
    //selected.push($(this));
    localStorage.setItem(time, userInput)
  });

