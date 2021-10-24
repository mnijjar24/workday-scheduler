//What to Do:
// 1. Add Date
// 3. Colour code the timeblocks made in html
// 4. Save in local storage when sumbit button clicked

$('.saveBtn').click(function (event) {
    var text = $(event.target).prev().val();
    var dateKey = $(event.target).parent().attr("id");

    // var data = text.data().time;
    // console.log(text.val(), text.data().time);

    localStorage.setItem(dateKey, text);
})

// var grabButton = document.querySelector('.saveBtn');    
// grabButton.onclick=function(){
//     var textBoxes = {

//     }
//     console.log(textBoxes);
//     textBox.push(textBoxes);
//     localStorage.setItem("textBox",JSON.stringify(textBoxes));
//     getTextBoxes();
// }


// const storageInput = document.querySelector(".col-md-10");
// const textType = document.querySelector(".textBox");
// const saveButton = document.querySelector(".saveBtn");

// const savLocalStorage = () => {
//     localStorage.setItem('textinput', 'storageInput');
// }

// saveButton.addEventListener('click', savLocalStorage);





// const addtaskinput = document.getElementsByClassName("time-block");
// const addtaskbtn = document.getElementsByClassName("saveBtn");

// addEventListener.addtaskbtn("click", function(){
//     addtaskinputval = addtaskinput.value;
//     let webtask = localStorage.getItem("localtask");
//     if (webtask == null){
//         taskObj = [];
//     }
//     else{
//         taskObj = JSON.parse(webtask);
//     }
//     taskObj.push(addtaskinputval);
//     localStorage.setItem("localtask", JSON.stringify(taskObj));
// })

// 1. Adding Date

function setDate() {
    $("#currentDay").html(moment().format('dddd, MMMM Do YYYY, h:mm a'));
}
setDate();



// 3. Colour-coding blocks
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

//3. local storage with sumbit button click
// when sumbit button is clicked, saved on local storage(go over challenge4 and modeule 3 notes)

// })

// $('.saveBtn').click(function(event){

//     var text = $(event.target).prev();
//     var data = text.data().time;
//     console.log(text.val(), text.data().time);

//     localStorage.setItem(data, text.val());
// })