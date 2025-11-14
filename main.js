// ---------------------------
// Lease Connect Dashboard JS
// ---------------------------

// 1️⃣ Highlight active sidebar link when clicked
const sidebarLinks = document.querySelectorAll(".sidebar a");

sidebarLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    sidebarLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// 2️⃣ Simple data update simulation for dashboard cards
const dashboardStats = {
  totalLeases: 120,
  activeTenants: 85,
  pendingPayments: 45000,
  vacantProperties: 12,
};

// Function to update dashboard stats dynamically
function updateDashboard() {
  const cards = document.querySelectorAll(".card p");
  const values = Object.values(dashboardStats);

  cards.forEach((card, index) => {
    if (index === 2) {
      // Format payment value with ₹
      card.textContent = `₹ ${values[index].toLocaleString()}`;
    } else {
      card.textContent = values[index];
    }
  });
}

// Simulate live data update every 5 seconds
setInterval(() => {
  dashboardStats.pendingPayments = Math.floor(Math.random() * 90000);
  dashboardStats.vacantProperties = Math.floor(Math.random() * 20);
  updateDashboard();
}, 5000);

// Initial load
updateDashboard();

// 3️⃣ Welcome message popup
window.addEventListener("load", () => {
  console.log("Welcome to Lease Connect Dashboard 🚀");
});

// 4️⃣ User interaction - show alert when user clicks topbar name
const userName = document.querySelector(".user-info span");
if (userName) {
  userName.addEventListener("click", () => {
    alert(`Hello ${userName.textContent}! Have a great day managing leases 👋`);
  });
}
