//What to Do:
// Add Date
// Colour code the timeblocks made in html
// Local storage 

$('.saveBtn').click(function (event) {
    var text = $(event.target).prev().val();
    var dateKey = $(event.target).parent().attr("id");

    // var data = text.data().time;
    // console.log(text.val(), text.data().time);

    localStorage.setItem(dateKey, text);
})


// Adding Date

function setDate() {
    $("#currentDay").html(moment().format('dddd, MMMM Do YYYY, h:mm a'));
}
setDate();



// Colour-coding blocks
$(".time-block").each(function () {
    var timeSlot = moment().hour();
    var timeBlock = parseInt($(this).attr("id"));
    
$(this).children("textarea").val(localStorage.getItem(timeBlock));
    if (timeBlock < timeSlot) {
        $(this).addClass("past");
    }
    else if (timeBlock === timeSlot) {
        $(this).removeClass("past");
        $(this).addClass("present");
    }

    else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
})

