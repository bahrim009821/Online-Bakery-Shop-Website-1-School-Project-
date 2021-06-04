//var countOrder;
    var countOrder1 = 0;
    var countOrder2 = 0;
    var countOrder3 = 0;
    var countOrder4 = 0;

var totalOrder1;
function startUp() {
    p1 = document.getElementById("para1");
    p2 = document.getElementById("para2");
    p3 = document.getElementById("para3");
    p4 = document.getElementById("para4");
}

function orderChocolate() {
    if (confirm("Would You Like To Order Chocolate Donut")) {
        countOrder1 = prompt("How Many Of Chocolate Donut Would You Like To Order");
        if (confirm("You Ordered " + countOrder1 + " Numbers Of Chocolate Donut")) {
        }
        else {
            alert("You Canceled Ordering");
        }
    } else {
        alert("You Canceled Ordering");
    }
    document.getElementById("totalorderChocolate").innerHTML = "your total order of Chocolate donut is: " + countOrder1;
sessionStorage.setItem("v1LocalStorage", countOrder1);  

}

function orderStrawbery() {
    if (confirm("Would You Like To Order Strawberry Donut")) {
        countOrder2 = prompt("How Many Of Strawberry Donut Would You Like To Order");
        if (confirm("You Ordered " + countOrder2 + " Numbers Of Strawberry Donut")) {
        }
        else {
            alert("You Canceled Ordering");
        }
    } else {
        alert("You Canceled Ordering");
    }
    document.getElementById("totalorderStrawberry").innerHTML = "your total order of Strawbery donut is: " + countOrder2;
sessionStorage.setItem("v2LocalStorage", countOrder2);  

}

function orderBlueberry() {
    if (confirm("Would You Like To Order Blueberry Donut")) {
        countOrder3 = prompt("How Many Of Blueberry Donut Would You Like To Order");
        if (confirm("You Ordered " + countOrder3 + " Numbers Of Blueberry Donut")) {
        }
        else {
            alert("You Canceled Ordering");
        }
    } else {
        alert("You Canceled Ordering");
    }
    document.getElementById("totalorderBlueberry").innerHTML = "your total order of Blueberry donut is: " + countOrder3;
sessionStorage.setItem("v3LocalStorage", countOrder3);  

}

function orderSpecial() {
    if (confirm("Would You Like To Order Special Donut")) {
        countOrder4 = prompt("How Many Of Special Donut Would You Like To Order");
        if (confirm("You Ordered " + countOrder4 + " Numbers Of Special Donut")) {
        }
        else {
            alert("You Canceled Ordering");
        }
    } else {
        alert("You Canceled Ordering");
    }
        document.getElementById("totalorderSpecial").innerHTML = "your total order of Special donut is: " + countOrder4;
sessionStorage.setItem("v4LocalStorage", countOrder4);  

}

function chocolateDonutDescription() {
    pic1Legit = document.getElementById("pic1");
    description1 = "Chocolate Donut <br> for <br> 3$ <br><br><br><br><br><br><br><br> ";
    pic1Legit.style.display = "none";
    p1.innerHTML = description1;
}

function noDescription() {
    p1.innerHTML = null;
    pic1Legit.style.display = "inline";
}

function strawberryDonutDescription() {
    pic2Legit = document.getElementById("pic2");
    description2 = "Strawberry Donut <br> for <br> 4$ <br><br><br><br><br><br><br><br>";
    pic2Legit.style.display = "none";
    p2.innerHTML = description2;
}

function noDescription2() {
    p2.innerHTML = null;
    pic2Legit.style.display = "inline";
}

function blueberryDonutDescription() {
    pic3Legit = document.getElementById("pic3");
    description3 = "Blueberry Donut <br> for <br> 5$ <br><br><br><br><br><br><br><br>";
    pic3Legit.style.display = "none";
    p3.innerHTML = description3;
}

function noDescription3() {
    p3.innerHTML = null;
    pic3Legit.style.display = "inline";
}

function specialDonutDescription() {
    pic4Legit = document.getElementById("pic4");
    description4 = "Special Donut <br> for <br> 7$ <br><br><br><br><br><br><br><br>";
    pic4Legit.style.display = "none";
    p4.innerHTML = description4;
}

function noDescription4() {
    p4.innerHTML = null;
    pic4Legit.style.display = "inline";
}

