var date = moment().format('LL')
var dateContent = $("<h3>" + date + "</h3>")
dateContent.addClass("title")
$("#main-content").append(dateContent)



$("button").on("click", function(){
    var targetBtn = $(this).attr("time")
    var caContent = $("textarea")
    for (var i = 0; caContent.length; i++){
        if (targetBtn == caContent.attr("time")){
            var letsGo = caContent.val()
            console.log(letsGo)
            break
        }
    }

})