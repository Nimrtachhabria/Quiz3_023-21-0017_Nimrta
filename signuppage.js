const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
  container.classList.toggle("change");
});

document.forms.signupform.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create a new FormData object from the form
    const formData = new FormData(this);

    // Get the values of form fields by their name attributes
    const email = formData.get('email');
    const password = formData.get('password');

    // Print values to the console
    console.log('Email:', email);
    console.log('Password:', password);

    // You can now perform additional actions here, such as sending the data to a server.
});