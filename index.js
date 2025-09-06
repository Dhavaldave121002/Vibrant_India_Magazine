// Load header dynamically
fetch("/components/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
    initHeaderAnimations();
  });

// Load footer dynamically
fetch("/components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
    initFooterAnimations();
  });

// Header animations

function initHeaderAnimations() {
  const navbar = document.querySelector(".navbar");

  // Scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // GSAP Animations
  gsap.from(".navbar-brand", {
    y: -60,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.from(".nav-link", {
    y: -20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
    delay: 0.3
  });

  gsap.from(".btn-gradient", {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)",
    delay: 0.6
  });
}



// Footer animations
function initFooterAnimations() {
  gsap.from(".footer-logo", { x: -40, opacity: 0, duration: 0.8, ease: "power2.out" });
  gsap.from(".footer h5, .footer h6", { y: 20, opacity: 0, duration: 0.6, stagger: 0.2, ease: "power2.out" });
  gsap.from(".footer-link", { x: -20, opacity: 0, duration: 0.5, stagger: 0.1, delay: 0.5, ease: "power2.out" });
  gsap.from(".footer-social", { scale: 0, opacity: 0, duration: 0.5, stagger: 0.15, delay: 1, ease: "back.out(1.7)" });
}

