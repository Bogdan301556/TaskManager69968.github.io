const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      error.textContent = data.message;
      error.style.color = "red";
      return;
    }

    localStorage.setItem("token", data.token);
    window.location.href = "tasks.html";

  } catch (err) {
    error.textContent = "Błąd połączenia z serwerem";
    error.style.color = "red";
  }
});
