
// Home
function populateArea() {
  var city = document.getElementById("city").value;
  var area = document.getElementById("area");

  // Clear previous options
  area.innerHTML = "";

  switch (city) {
    case "city1":
      addOption(area, "area1", "Madinah Town");
      addOption(area, "area2", "Jinnah Town");
      addOption(area, "area3", "Tandian wala town");
      addOption(area, "area4", "Jaran wala town");
      break;

    case "city2":
      addOption(area, "area5", "Gulberg");
      addOption(area, "area6", "Samnabad");
      addOption(area, "area7", "Thokar Niaz Baig");
      addOption(area, "area8", "Model Town");
      break;

    case "city3":
      addOption(area, "area9", "I-8");
      addOption(area, "area10", "G-11");
      addOption(area, "area11", "I-10");
      addOption(area, "area12", "Chak Shahzad");
      break;

    case "city4":
      addOption(area, "area13", "DHA");
      addOption(area, "area14", "Clifton");
      addOption(area, "area15", "Gulshan");
      addOption(area, "area16", "Gulistan-e-Johar");
      addOption(area, "area17", "F.B. Area");
      addOption(area, "area18", "N. Nazimabad");
      break;

    default:
      addOption(area, "", "Select Area");
  }
}

// Auto
function populateVariants() {
  var carName = document.getElementById("carName").value;
  var carVariant = document.getElementById("carVariant");

  // Clear previous options
  carVariant.innerHTML = "";

  switch (carName) {
    case "car1":
      addOption(carVariant, "carVariant1", "Liana");
      addOption(carVariant, "carVariant2", "Alto");
      addOption(carVariant, "carVariant3", "Alto VX");
      addOption(carVariant, "carVariant4", "Alto VXR");
      break;

    case "car2":
      addOption(carVariant, "carVariant5", "Passo");
      addOption(carVariant, "carVariant6", "Corolla XLI");
      addOption(carVariant, "carVariant7", "Corolla GLI");
      addOption(carVariant, "carVariant8", "Fortuner");
      break;

    case "car3":
      addOption(carVariant, "carVariant9", "City");
      addOption(carVariant, "carVariant10", "Civic");
      addOption(carVariant, "carVariant11", "BR-V");
      addOption(carVariant, "carVariant12", "HR-V");
      break;

    case "car4":
      addOption(carVariant, "carVariant13", "Stonic");
      addOption(carVariant, "carVariant14", "Sorento");
      addOption(carVariant, "carVariant15", "Picanto");
      
      break;

    default:
      addOption(carVariant, "", "Select Variant");
  }
}

function addOption(selectElement, value, text) {
  var option = document.createElement("option");
  option.value = value;
  option.text = text;
  selectElement.appendChild(option);
}


// Financing calculator
  
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function calculateMonthlyPayment() {
    var financingAmount = parseFloat(document.getElementById('financingAmount').value);
    var annualInterestRate = parseFloat(document.getElementById('rate').value);
    var tenureMonths = parseFloat(document.getElementById('tenure').value);

    if (isNaN(financingAmount) || isNaN(annualInterestRate) || isNaN(tenureMonths)) {
      alert("Please fill in all the fields.");
      return;
    }

    var monthlyInterestRate = annualInterestRate / 12 / 100;
    var monthlyPayment = (financingAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -tenureMonths));

    var paymentDetails = "<h2 style='color: #333;'>Monthly Payment: PKR " + numberWithCommas(monthlyPayment.toFixed(2)) + "</h2>";
    paymentDetails += "<h2 style='color: #333;'>Month-wise Payment Schedule:</h2>";
    paymentDetails += "<table style='border-collapse: collapse; width: 100%;' border='1'>";
    paymentDetails += "<tr style='background-color: #f2f2f2; color: #333;'><th>Month</th><th>Principal</th><th>Interest</th><th>Monthly Payment</th><th>Balance</th></tr>";
    var remainingBalance = financingAmount;

    for (var i = 1; i <= tenureMonths; i++) {
      var interestPayment = remainingBalance * monthlyInterestRate;
      var principalPayment = monthlyPayment - interestPayment;
      remainingBalance -= principalPayment;
      var rowColor = i % 2 === 0 ? '#fff' : '#f9f9f9'; // Alternate row color
      paymentDetails += "<tr style='background-color: " + rowColor + "; color: #333;'><td>" + i + "</td><td>PKR " + numberWithCommas(principalPayment.toFixed(2)) + "</td><td>PKR " + numberWithCommas(interestPayment.toFixed(2)) + "</td><td>PKR " + numberWithCommas(monthlyPayment.toFixed(2)) + "</td><td>PKR " + numberWithCommas(remainingBalance.toFixed(2)) + "</td></tr>";
    }
    paymentDetails += "</table>";

    var paymentWindow = window.open('', '_blank');
    paymentWindow.document.write(paymentDetails);
  }

