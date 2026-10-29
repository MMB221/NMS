// Personnalisation rapide : change le mot de passe ici si tu veux.
const SECRET_PASSWORD = "babygirl"; // Le mot de passe est visible dans le code source : ce n'est pas une vraie protection de sécurité.

const menuToggle = document.querySelector("#menuToggle");
const navMenu = document.querySelector("#navMenu");
menuToggle.addEventListener("click", () => {
  const opened = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(opened));
  menuToggle.setAttribute("aria-label", opened ? "Fermer le menu" : "Ouvrir le menu");
});
navMenu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

const dialog = document.querySelector("#memoryDialog");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogMessage = document.querySelector("#dialogMessage");
function openMemory(title, message) {
  dialogTitle.textContent = title;
  dialogMessage.textContent = message;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else alert(`${title}\n\n${message}`);
}
document.querySelectorAll(".photo-card, .reason-card").forEach(card => {
  card.addEventListener("click", () => {
    openMemory(card.dataset.title || "Un souvenir", card.dataset.message || "Un petit moment précieux. ♡");
    if (card.classList.contains("reason-card")) card.classList.add("opened");
  });
});
document.querySelector("#dialogClose").addEventListener("click", () => dialog.close());
document.querySelector("#dialogOk").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
});

const secretForm = document.querySelector("#secretForm");
const secretInput = document.querySelector("#secretPassword");
const secretMessage = document.querySelector("#secretMessage");
const secretError = document.querySelector("#secretError");
secretForm.addEventListener("submit", event => {
  event.preventDefault();
  if (secretInput.value.trim().toLowerCase() === SECRET_PASSWORD.toLowerCase()) {
    secretMessage.hidden = false;
    secretError.textContent = "";
    secretForm.hidden = true;
    document.querySelector(".secret-hint").hidden = true;
    secretMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    burstHearts(18);
  } else {
    secretError.textContent = "Pas encore, Babygirl… essaie encore ♡";
    secretInput.select();
  }
});

function burstHearts(count = 12) {
  const container = document.querySelector("#floatingHearts");
  const symbols = ["♥", "♡", "✧", "❤"];
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "float-heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${14 + Math.random() * 25}px`;
    heart.style.animationDuration = `${2.1 + Math.random() * 2.2}s`;
    heart.style.animationDelay = `${Math.random() * .7}s`;
    container.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
  }
}
document.querySelector("#kissButton").addEventListener("click", () => burstHearts(35));

// Révèle les sections avec douceur quand elles entrent dans l'écran.
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".letter-paper, .photo-card, .reason-card").forEach(el => observer.observe(el));
}
