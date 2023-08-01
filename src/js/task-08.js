const formElement = document.querySelector(".login-form");

function checkSubmit(event){

    event.preventDefoult();

    const {
        element: {email, password},
    } = event.currentTarget;

    if ( email.value === "" || password.value === "") {

        return alert("Please fill in all fields")
    }

    const result = { email: email.value, password: password.value };
  console.log(result);
  event.currentTarget.reset();
}

formElement.addEventListener("submit", checkSubmit);

