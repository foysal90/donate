const donateNow = document.getElementById("donateNow");
const donateNowFeni = document.getElementById("donateNowFeni");
const donateAmountFeni = document.getElementById("feni-donate-amount");
const donateAmount = document.getElementById("donate-amount");
const initialAmount = document.getElementById("initial-amount");
const noakhaliFloodDonate = document.getElementById("noakhaliFloodDonate");
const feniDonateAmount = document.getElementById("feniDonateAmount");
const quotaBalance = document.getElementById("quota-balance");
const quotaInputField = document.getElementById("quota-input-field");
const quotaDonate = document.getElementById("quotaDonate");
console.log(quotaBalance.innerText);
function donateMoney(event) {
  const initialFund = parseFloat(initialAmount.innerText) || 0;
  if (event.id === "donateNow") {
    const donateAmountValue = parseFloat(donateAmount.value) || 0;
    const remainingFund = initialFund - donateAmountValue;
    initialAmount.innerText = remainingFund.toFixed(2);
    noakhaliFloodDonate.innerText = parseFloat(
      noakhaliFloodDonate.innerText + donateAmountValue
    ).toFixed(2);
  } else if (event.id === "donateNowFeni") {
    //donation for feni flood
    const donateAmountFeniValue =
      parseFloat(donateAmountFeni.value).toFixed(2) || 0;
    const remainingFund = initialFund - donateAmountFeniValue;
    initialAmount.innerText = remainingFund.toFixed(2);
    feniDonateAmount.innerText = parseFloat(
      feniDonateAmount.innerText + donateAmountFeniValue
    ).toFixed(2);
  } else if (event.id === "quotaDonate") {
    const quotaInputFieldValue =
      parseFloat(quotaInputField.value).toFixed(2) || 0;
    const remainingFund = initialFund - quotaInputFieldValue;
    initialAmount.innerText = remainingFund.toFixed(2);
    quotaBalance.innerText = parseFloat(
      quotaBalance.innerText + quotaInputFieldValue
    ).toFixed(2);
  }
}
