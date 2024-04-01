function calculate() {
    // Gets the input value from the element's id of cost and number
    var cost = document.getElementById("petrol-price").value;
    var number = document.getElementById("liters").value;
    // innerHTML changes the content of the element and returns the result of cost multiplied by number as a string
    // toFixed() rounds off the result into 2 decimal points
    document.getElementById("display-cost").innerHTML = (cost * number).toFixed(2);
}