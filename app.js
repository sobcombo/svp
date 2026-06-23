const API_URL =
"https://script.google.com/macros/s/AKfycbz4JlgvFAPwvjXq_NMZ6Qqrz47RppmnQndXEe8FFrWb1HfFLWWPT0VHXbQF7tJ79Qr7/exec";

console.log("APP LOADED");
console.log(API_URL);

async function loadDashboard() {
  try {
    const response = await fetch(
      API_URL + "?action=dashboard"
    );

    const data = await response.json();

    document.getElementById("totalSales").innerText =
      "₹ " + data.totalSales;

    document.getElementById("totalPurchase").innerText =
      "₹ " + data.totalPurchase;

    document.getElementById("pendingPayments").innerText =
      "₹ " + data.pendingPayments;

  } catch (err) {
    console.error(err);
  }
}

loadDashboard();
