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
const blogBtn = document.getElementById("blog");
//navigate to blog page
blogBtn.addEventListener("click", function () {
  window.location.href = "./blog.html";
});

//initial modal
let initialDonationModal = null;

//donation history
const donations = [];

function donateMoney(event) {
  let initialFund = parseFloat(initialAmount.innerText) || 0;
  const currentDate = new Date();

  if (event.id === "donateNow") {
    let donateAmountValue = parseFloat(donateAmount.value) || 0;
    if (donateAmountValue > 0 && donateAmountValue <= initialFund) {
      initialFund -= donateAmountValue;
      initialAmount.innerText = initialFund.toFixed(2);
      noakhaliFloodDonate.innerText = (
        parseFloat(noakhaliFloodDonate.innerText) + donateAmountValue
      ).toFixed(2);
      //Clear input field
      donateAmount.value = "";
      donations.push({
        date: currentDate,
        title: titleNoakhali.innerText,
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
      //Clear input field
      donateAmountFeni.value = "";

      donations.push({
        date: currentDate,
        title: titleFeni.innerText,
        amount: donateAmountFeniValue,
      });

      // alert("donated");
    } else {
      return alert("Invalid Amount");
    }
  } else if (event.id === "quotaDonate") {
    let quotaInputFieldValue = parseFloat(quotaInputField.value) || 0;
    if (quotaInputFieldValue > 0 && quotaInputFieldValue <= initialFund) {
      initialFund -= quotaInputFieldValue;
      initialAmount.innerText = initialFund.toFixed(2);
      quotaBalance.innerText = (
        parseFloat(quotaBalance.innerText) + quotaInputFieldValue
      ).toFixed(2);
      //Clear input field
      quotaInputField.value = "";
      donations.push({
        date: currentDate,
        title: titleQuota.innerText,
        amount: quotaInputFieldValue,
      });
    } else {
      return alert("invalid Amount");
    }
  }
}

//toggle
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
    donationBtn.classList.add("bg-[#B4F461]", "text-black");
    donationBtn.classList.remove("bg-white", "text-black");
    historyBtn.classList.remove("bg-[#B4F461]", "text-black");
    historyBtn.classList.add("bg-white", "text-black");
  } else {
    historyBtn.classList.add("bg-[#B4F461]", "text-black");
    historyBtn.classList.remove("bg-black", "text-black");
    donationBtn.classList.remove("bg-[#B4F461]", "text-black");
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

//showing history
function donationHistory() {
  const historyBody = document.getElementById("history-body");
  historyBody.innerHTML = "";
  donations.forEach((donation) => {
    const row = `
     <div class="w-full border border-zinc-300 p-5 my-3 sm:my-5">
   <div class="flex   text-4xl sm:text-xl gap-1 font-bold">
    <p>${donation.amount} Taka is <span>${donation.title}</span> </p> 
    
    </div>
    <p class="text-xl my-2 text-gray-500">Date: ${donation.date}</p>
    
     </div>

    
    
`;
    historyBody.innerHTML += row;
  });
}

//navbar blur when scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  if (window.screenY > 0) {
    navbar.classList.add("backdrop-blur-md", "bg-transparent", "bg-opacity-80");
  } else {
    navbar.classList.remove(
      "backdrop-blur-lg",
      "bg-transparent",
      "bg-opacity-80"
    );
  }
});
