var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var female =["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var d = function(cc, yy, mm, dd){
    return (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7
}

function myFunction() {
    var x = document.getElementById("myDate").value
    document.getElementById("demo").innerHTML = x

}
var cc = parseInt(prompt("Enter the century digits.For example 1989 has cc=19"))
var yy = parseInt(prompt("Enter Year digits i.e 1989 has yy=89"))
var mm = parseInt(prompt("Enter the month"))
var dd = parseInt(prompt("Enter the Day of the month"))
