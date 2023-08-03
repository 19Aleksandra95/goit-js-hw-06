const emailElement = document.querySelector(".login-form");
emailElement.addEventListener("submit", emailElementSubmite);
function emailElementSubmite(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const userAcount = { email: email.value, password: password.value };
  console.log("userAcount", userAcount);

  event.currentTarget.reset();
}