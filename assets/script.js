// REGISTER USER
function registerUser() {
  const role = document.getElementById("role").value;
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(!name || !email || !password) {
    alert("All fields required!");
    return;
  }

  const user = { name, email, password, role };

  localStorage.setItem(email, JSON.stringify(user));

  alert("Registration Successful!");
  window.location.href = "login.html";
}


// LOGIN USER
function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const userData = localStorage.getItem(email);

  if (!userData) {
    alert("User not found");
    return;
  }

  const user = JSON.parse(userData);

  if (user.password !== password) {
    alert("Incorrect password");
    return;
  }

  // STORE LOGGED-IN USER SESSION
  localStorage.setItem("loggedUser", JSON.stringify(user));

  // REDIRECT BASED ON ROLE
  if (user.role === "landlord") {
    window.location.href = "landlord-dashboard.html";
  } else {
    window.location.href = "tenant-dashboard.html";
  }
}
// PROTECT TENANT PAGE
function checkTenant() {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (!user) {
        window.location.href = "login.html";
        return;
    }
    if (user.role !== "tenant") {
        alert("Access Denied! Landlords cannot view tenant pages.");
        window.location.href = "landlord-dashboard.html";
    }
}

// PROTECT LANDLORD PAGE
function checkLandlord() {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (!user) {
        window.location.href = "login.html";
        return;
    }
    if (user.role !== "landlord") {
        alert("Access Denied! Tenants cannot view landlord pages.");
        window.location.href = "tenant-dashboard.html";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "login.html";
}
