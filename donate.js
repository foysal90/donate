const donateNow = document.getElementById("donateNow");
const donateAmount = document.getElementById("donate-amount");
const initialAmount = document.getElementById("initial-amount");

function donateMoney(event) {
  const remainingFund = initialAmount.innerText - donateAmount.value
  initialAmount.innerText = remainingFund
  console.log(remainingFund);
  
}
