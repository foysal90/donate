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

let initialDonationModal = null;

function donateMoney(event) {
  let initialFund = parseFloat(initialAmount.innerText) || 0;
  if (event.id === "donateNow") {
    let donateAmountValue = parseFloat(donateAmount.value) || 0;
    if (donateAmountValue > 0 && donateAmountValue <= initialFund) {
      initialFund -= donateAmountValue;
      initialAmount.innerText = initialFund.toFixed(2);
      noakhaliFloodDonate.innerText = (
        parseFloat(noakhaliFloodDonate.innerText) + donateAmountValue
      ).toFixed(2);
    } else {
      return alert("invalid");
    }
  } else if (event.id === "donateNowFeni") {
    //donation for feni flood

    let donateAmountFeniValue = parseFloat(donateAmountFeni.value) || 0;
    if (donateAmountFeniValue > 0 && donateAmountFeniValue <= initialFund) {
      initialFund -= donateAmountFeniValue;
      initialAmount.innerText = initialFund.toFixed(2);
      feniDonateAmount.innerText = (
        parseFloat(feniDonateAmount.innerText) + donateAmountFeniValue
      ).toFixed(2);
      // alert("donated");
    } else {
      return alert("invalid");
    }
  } else if (event.id === "quotaDonate") {
    let quotaInputFieldValue = parseFloat(quotaInputField.value) || 0;
    if (quotaInputFieldValue > 0 && quotaInputFieldValue <= initialFund) {
      initialFund -= quotaInputFieldValue;
      initialAmount.innerText = initialFund.toFixed(2);
      quotaBalance.innerText = (
        parseFloat(quotaBalance.innerText) + quotaInputFieldValue
      ).toFixed(2);
    } else {
      return alert("invalid");
    }
  }
}

function openModal(eventId) {
  initialDonationModal = eventId;
  const modal = document.getElementById("my_modal_1");
  modal.showModal();
}
function closeModal() {
  const modal = document.getElementById("my_modal_1");
  modal.close();
}
function confirmDonation() {
  if (initialDonationModal) {
    const event = { id: initialDonationModal };
    donateMoney(event);
    closeModal();
  }
}
