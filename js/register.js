const form = document.getElementById("registerForm");
const error = document.getElementById("error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      error.textContent = data.message || "Błąd rejestracji";
      error.style.color = "red";
      return;
    }

    error.textContent = "Użytkownik zarejestrowany! Przejdź do logowania.";
    error.style.color = "green";
  } catch (err) {
    error.textContent = "Błąd połączenia z serwerem";
    error.style.color = "red";
  }
});
