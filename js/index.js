document.addEventListener("DOMContentLoaded", function () {
  // Elements for login and signup sections
  let loginSec = document.querySelector(".loginsec");
  let signupSec = document.querySelector(".loginsec2");
  let logoutSec = document.querySelector(".loginsec3");

  // Elements for buttons and status messages
  let loginBtn = document.getElementById("loginbtn");
  let signupBtn = document.getElementById("signupbtn");
  let logOutBtn = document.getElementById("logoutbtn");
  let upBtn = document.getElementById("upbtn");
  let inBtn = document.getElementById("inbtn");

  let p1 = document.getElementById("p1"); // Success
  let p2 = document.getElementById("p2"); // All inputs required
  let p4 = document.getElementById("p4"); // Invalid email or password

  let p1Signup = document.getElementById("p11"); // Success
  let p2Signup = document.getElementById("p21"); // All inputs required
  let p3Signup = document.getElementById("p31"); // Email already exists

  let showUserName = document.getElementById("username");

  // Switch to signup page
  upBtn.addEventListener("click", function () {
    loginSec.classList.add("d-none");
    signupSec.classList.remove("d-none");
  });

  // Switch to login page
  inBtn.addEventListener("click", function () {
    signupSec.classList.add("d-none");
    loginSec.classList.remove("d-none");
  });

  // switch to login page2 and clear all messages

  logOutBtn.addEventListener("click", function () {
    loginSec.classList.remove("d-none");
    signupSec.classList.add("d-none");
    logoutSec.classList.add("d-none");
    p1.classList.add("d-none");
    p2.classList.add("d-none");
    p4.classList.add("d-none");
    p1Signup.classList.add("d-none");
    p2Signup.classList.add("d-none");
    p3Signup.classList.add("d-none");
  });

  // Login functionality
  loginBtn.addEventListener("click", function () {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Hide all messages before showing the relevant one
    p1.classList.add("d-none");
    p2.classList.add("d-none");
    p4.classList.add("d-none");

    // Validate inputs
    if (email === "" || password === "") {
      p2.classList.remove("d-none");
    } else {
      // Check if the email exists in localStorage
      let userData = JSON.parse(localStorage.getItem(email)); // Get user data from localStorage
      if (userData && userData.password === password) {
        p1.classList.remove("d-none"); // Success
        loginSec.classList.add("d-none");
        signupSec.classList.add("d-none");
        logoutSec.classList.remove("d-none");

        // clear input after success
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
      } else {
        p4.classList.remove("d-none"); // Invalid email or password
      }
    }
  });

  // Signup functionality
  signupBtn.addEventListener("click", function () {
    let name = document.getElementById("nameinput2").value;
    let email = document.getElementById("emailinput2").value;
    let password = document.getElementById("passwordinput2").value;

    // Hide all messages before showing the relevant one
    p1Signup.classList.add("d-none");
    p2Signup.classList.add("d-none");
    p3Signup.classList.add("d-none");

    // Validate inputs
    if (name === "" || email === "" || password === "") {
      p2Signup.classList.remove("d-none");
    } else {
      // Check if the email already exists in localStorage
      let existingUser = localStorage.getItem(email);
      if (existingUser) {
        p3Signup.classList.remove("d-none"); // Email already exists
      } else {
        // Save user data to localStorage
        let newUser = {
          name: name,
          email: email,
          password: password,
        };
        localStorage.setItem(email, JSON.stringify(newUser)); // Store user data in localStorage
        p1Signup.classList.remove("d-none"); // Success
        showUserName.innerHTML += document.getElementById("nameinput2").value;

        //clear input for security
        document.getElementById("nameinput2").value = "";
        document.getElementById("emailinput2").value = "";
        document.getElementById("passwordinput2").value = "";
      }
    }
  });
});
