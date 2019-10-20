var date = moment().format('LL')
var dateContent = $("<h3>" + date + "</h3>")
dateContent.addClass("title")
$("#main-content").append(dateContent)
var textArea = $("textarea")




$("button").on("click", function(){
    var targetBtn = $(this).attr("time")
    var caContent = $("#textarea" + $(this).attr("time"))

            var letsGo = caContent.val()
            localStorage.setItem(caContent.attr("id"), letsGo)
})
