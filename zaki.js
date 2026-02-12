// typing animation
const text = ["Teknik Komputer dan Jaringan", "Instalasi dan Troubleshooting", "Belajar • Praktik • Berkembang"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;
const target = document.getElementById("typing");

function typeEffect() {
    if (!target) return;

    if (!isDeleting && j <= text[i].length) {
        current = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
        current = text[i].substring(0, j--);
    }

    target.innerHTML = current;

    if (j === text[i].length) isDeleting = true;
    if (j === 0 && isDeleting) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// dark mode
function toggleDark() {
    document.body.classList.toggle("dark");
}

// menu aktif otomatis
const links = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// animasi masuk saat halaman dibuka
window.addEventListener("load", () => {
    document.querySelectorAll(".fade-up").forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("show");
        }, i * 200);
    });
});

// cek mode tersimpan
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

function toggleDark() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}
