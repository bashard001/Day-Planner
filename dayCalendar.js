$(function(){

var date = moment().format('LL')
var currentHour = new Date().getHours()
var dateContent = $("<h4>" + date + "</h4>")
dateContent.addClass("title")

var liveHour = moment().format('LT')
var liveHourEl = $("<h4 id='timeh4' class='title' style='padding-top:0px'>" + liveHour + "<h4>")

var textArea
var workingHours = ["9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm"]


$("#main-content").append(liveHourEl)
$("#main-content").append(dateContent)

function currentStatus(){
     textArea = $("textarea")
    textArea.each(function(){
        if ($(this).attr("time") > currentHour){
            $(this).attr("class", "green")
        }else if ($(this).attr("time") < currentHour) {
            $(this).attr("class", "red")
        } else {
            $(this).attr("class", "yellow")
        }
    })
}

var createCalendar = new Promise ((resolve, reject) => {
    let i = 9

    resolve(  
    workingHours.forEach(el =>{
        
        $(".container").append(`<div class='hour'>${el}</div>`)
        $(".container").append(`<textarea time=${i}
         id='textarea${el.length > 3 ? el[0]+el[1] : el[0]}'></textarea>`)
        $(".container").append(`<button class="btnColor" time=${el.length > 3 ? el[0]+el[1] : el[0]}>Save</button>`)
        i++
    } ))
})
    

// inserts the information from the local storage to the text area
async function fillInCalendar(){
    await createCalendar.then(currentStatus())
    console.log(textArea.length)
for (var i = 0; i < textArea.length; i++){
    var itemName = textArea[i].getAttribute("id")
    var getContent = localStorage.getItem(itemName)
    textArea[i].textContent = getContent
}}


// takes the info from the textarea and save it to the localStorage
$("button").on("click", function(){

    var caContent = $("#textarea" + $(this).attr("time"))

            var letsGo = caContent.val()
            localStorage.setItem(caContent.attr("id"), letsGo)
})

fillInCalendar()

})