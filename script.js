// Agar link bosilganda xabar chiqishini xohlasangiz:
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("Link bosildi: " + btn.href);
  });
});
