function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "none" || menu.style.display === "")
    ? "flex"
    : "none";
} 
if (!localStorage.getItem("accounts")) {
  const demoAccounts = [
    { email: "juandelacruz@gmail.com", password: "676767" },
  ];
  localStorage.setItem("accounts", JSON.stringify(demoAccounts));
}
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const accounts = JSON.parse(localStorage.getItem("accounts"));

  const user = accounts.find(
    acc => acc.email === email && acc.password === password
  );

  if (user) {
    localStorage.setItem("loggedInUser", email);

    // 👉 REDIRECT HERE
    window.location.href = "main.html";
  } else {
    alert("Invalid email or password");
  }
}
