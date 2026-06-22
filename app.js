async function loadDashboard(){

  try{

    const response =
      await fetch(
        API_URL + "?action=dashboard"
      );

    const data =
      await response.json();

    document.getElementById(
      "totalSales"
    ).innerText =
      "₹ " + data.totalSales;

    document.getElementById(
      "totalPurchase"
    ).innerText =
      "₹ " + data.totalPurchase;

    document.getElementById(
      "pendingPayments"
    ).innerText =
      "₹ " + data.pendingPayments;

  }
  catch(err){

    console.error(err);

  }
}

loadDashboard();
