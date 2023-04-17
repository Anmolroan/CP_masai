function generateNumber() {
  // generate a random integer(hint : Math.random)
    let num = Math.ceil(Math.random()*100);
    let numberDiv = document.getElementById("number");
    numberDiv.innerHTML=num;
    checkOddEven(+num)
   
}

function checkOddEven(num) {
  const oddEven = document.getElementById("odd-even");

  // logic for even / odd
  if(num%2===0){
    oddEven.innerHTML="The number is even"
  }else{
    oddEven.innerHTML="The number is odd"
  }
}

let numberButton = document.getElementById("generate-number");

window.onload = function () {
  // add event listeners to the button here;
  numberButton.addEventListener("click", generateNumber);
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
