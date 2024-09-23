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
const titleNoakhali = document.getElementById("title-noakhali");
const titleFeni = document.getElementById("title-feni");
const titleQuota = document.getElementById("title-quota");

let initialDonationModal = null;

//donation history
const donations = [];

function donateMoney(event) {
  let initialFund = parseFloat(initialAmount.innerText) || 0;
  const currentDate = new Date().toLocaleDateString();
  if (event.id === "donateNow") {
    let donateAmountValue = parseFloat(donateAmount.value) || 0;
    if (donateAmountValue > 0 && donateAmountValue <= initialFund) {
      initialFund -= donateAmountValue;
      initialAmount.innerText = initialFund.toFixed(2);
      noakhaliFloodDonate.innerText = (
        parseFloat(noakhaliFloodDonate.innerText) + donateAmountValue
      ).toFixed(2);
      donations.push({
        date: currentDate,
        cause: titleNoakhali.innerText,
        amount: donateAmountValue,
      });
    } else {
      return alert("invalid Amount");
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

      donations.push({
        date: currentDate,
        cause: titleFeni.innerText,
        amount: donateAmountFeniValue,
      });

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
      donations.push({
        date: currentDate,
        cause: titleQuota.innerText,
        amount: quotaInputFieldValue,
      });
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

//history function

const donationBtn = document.getElementById("donation");
const historyBtn = document.getElementById("history");
const donationSections = document.querySelectorAll(".donation-section");
const historySection = document.getElementById("history-section");

function toggle(showDonation) {
  donationSections.forEach((section) => {
    section.style.display = showDonation ? "block" : "none";
  });
  historySection.style.display = showDonation ? "none" : "block";
  
  
  //active button
  if (showDonation) {
    donationBtn.classList.add("bg-[#B4F461]", "text-white");
    donationBtn.classList.remove("bg-white", "text-black");
    historyBtn.classList.remove("bg-[#B4F461]", "text-white");
    historyBtn.classList.add("bg-white", "text-black");
  } else {
    historyBtn.classList.add("bg-[#B4F461]", "text-white");
    historyBtn.classList.remove("bg-white", "text-black");
    donationBtn.classList.remove("bg-[#B4F461]", "text-white");
    donationBtn.classList.add("bg-white", "text-black");
  }
}
toggle(true);

donationBtn.addEventListener("click", function () {
  toggle(true);
});

historyBtn.addEventListener("click", function () {
  toggle(false);

  donationHistory();
});

function donationHistory() {
  const tableBody = document.getElementById("history-table-body");
  tableBody.innerHTML = "";
  donations.forEach((donation) => {
    const row = `<tr>
    <td>${donation.date}</td>
    <td>${donation.cause}</td>
    <td>${donation.amount}</td>
</tr>`;
    tableBody.innerHTML += row;
  });
}
