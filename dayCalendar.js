$(function(){

var date = moment().format('LL')
var currentHour = new Date().getHours()
var dateContent = $("<h4>" + date + "</h4>")
dateContent.addClass("title")

var liveHour = moment().format('LT')
var liveHourEl = $("<h4 id='timeh4' class='title' style='padding-top:0px'>" + liveHour + "<h4>")
var textArea = $("textarea")


var buttons = $("button")
buttons.addClass("btnColor")

$("#main-content").append(liveHourEl)
$("#main-content").append(dateContent)

function currentStatus(){
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

// inserts the information from the local storage to the text area
function fillInCalender(){
for (var i = 0; i < textArea.length; i++){
    var itemName = textArea[i].getAttribute("id")
    var getContent = localStorage.getItem(itemName)
    textArea[i].textContent = getContent
}

}


// takes the info from the textarea and save it to the localStorage
$("button").on("click", function(){

    var caContent = $("#textarea" + $(this).attr("time"))

            var letsGo = caContent.val()
            localStorage.setItem(caContent.attr("id"), letsGo)
})

fillInCalender()
currentStatus()
})