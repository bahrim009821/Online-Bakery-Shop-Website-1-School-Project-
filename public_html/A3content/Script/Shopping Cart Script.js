var total1 = 0;
var total2 = 0;
var total3 = 0;
var total4 = 0;

function showInfo() {
    var v1LS = sessionStorage.getItem("v1LocalStorage");
    var col2 = document.getElementById("row2");
    document.getElementById("row1").innerHTML = "Chocolate Donut";
    col2.innerHTML = v1LS;
    var col3 = document.getElementById("row3");
    total1 = v1LS * 3;
    col3.innerHTML = total1;
}
function showInfo2() {
    var v2LS = sessionStorage.getItem("v2LocalStorage");
    var col4 = document.getElementById("row5");
    document.getElementById("row4").innerHTML = "Strawberry Donut";
    col4.innerHTML = v2LS;
    var col4 = document.getElementById("row6");
    total2 = v2LS * 4;
    col4.innerHTML = total2;
}
function showInfo3() {
    var v3LS = sessionStorage.getItem("v3LocalStorage");
    var col5 = document.getElementById("row8");
    document.getElementById("row7").innerHTML = "Blueberry Donut";
    col5.innerHTML = v3LS;
    var col6 = document.getElementById("row9");
    total3 = v3LS * 5;
    col6.innerHTML = total3;
}
function showInfo4() {
    var v4LS = sessionStorage.getItem("v4LocalStorage");
    var col7 = document.getElementById("row11");
    document.getElementById("row10").innerHTML = "Special Donut";
    col7.innerHTML = v4LS;
    var col8 = document.getElementById("row12");
    total4 = v4LS * 7;
    col8.innerHTML = total4;
}
function shwoTotalPrice() {
    document.getElementById("totalPrice").innerHTML = "Your Total Payment Is:  " + (total4 + total3 + total2 + total1) + "$";
}
function defaultValue() {
    document.getElementById("fname").defaultValue = "Mohammad Hossein";
    document.getElementById("lname").defaultValue = "Bahri";
}
function confirmation(){
    alert ("Your Order Has Been Confirmed Please Fill The Form Bellow");
}