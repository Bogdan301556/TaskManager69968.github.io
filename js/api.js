document.addEventListener("DOMContentLoaded", () => {
  const factEl = document.getElementById("fact");
  const btn = document.getElementById("newFact");

  async function loadFact() {
    try {
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      factEl.textContent = `🐱 ${data.fact}`;
    } catch (err) {
      console.error(err);
      factEl.textContent = "Błąd ładowania faktu o kotach.";
    }
  }

  btn.addEventListener("click", loadFact);
  loadFact();
});
