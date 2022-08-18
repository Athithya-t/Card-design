function SubmitHandler() {
  let card_number = document.getElementById("cardnumber-input").value;
  let name_on_card = document.getElementById("cardholder-input").value;
  let expiry_month = document.getElementById("month-input").value;
  let expiry_year = document.getElementById("year-input").value;
  let cvc = document.getElementById("cvc-input").value;
  var flag = true;
  if (card_number == "") {
    document.querySelector("#cardnumber-input").style.border = "1px solid red";
    document.querySelector("#card-number-error").style.display = "block";
    flag = false;
  } else if (!card_number.match(/^[0-9 a-z]+$/)) {
    document.querySelector("#cardnumber-input").style.border = "1px solid red";
    document.querySelector("#card-number-type-error").style.display = "block";
    flag = false;
  }
  if (name_on_card == "") {
    document.querySelector("#cardholder-input").style.border = "1px solid red";
    document.querySelector("#card-holder-error").style.display = "block";
    flag = false;
  }
  if (expiry_month == "" || expiry_year == "") {
    flag = false;
    if (expiry_month == "") {
      document.querySelector("#month-input").style.border = "1px solid red";
      document.querySelector("#expiry-date-error").style.display = "block";
      flag = false;
    }
    if (expiry_year == "") {
      document.querySelector("#year-input").style.border = "1px solid red";
      document.querySelector("#expiry-date-error").style.display = "block";
      flag = false;
    } else {
      document.querySelector("#month-input").style.border = "1px solid black";
      document.querySelector("#year-input").style.border = "1px solid black";
      flag = false;
    }
  }
  if (cvc == "") {
    document.querySelector("#cvc-input").style.border = "1px solid red";
    document.querySelector("#cvc-error").style.display = "block";
    flag = false;
  }
  if (flag == true) {
    document.querySelector("#form-section").style.display = "none";
    document.querySelector("#completed-section").style.display = "block";
    document.querySelector("#name-on-card").textContent = name_on_card;
    document.querySelector("#card-number-on-card").textContent = card_number;
    document.querySelector("#expiry-date-on-card").textContent = `${expiry_month}/${expiry_year}`;
    document.querySelector("#card-back-cvc").textContent = cvc;
  }
}

function Backtoform() {
  document.querySelector("#form-section").style.display = "block";
  document.querySelector("#completed-section").style.display = "none";
  document.getElementById("cardnumber-input").value = "";
  document.getElementById("cardholder-input").value = "";
  document.getElementById("month-input").value = "";
  document.getElementById("year-input").value = "";
  document.getElementById("cvc-input").value = "";
}
