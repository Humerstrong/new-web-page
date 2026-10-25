const links = document.querySelectorAll(".link-list a");
const list = document.querySelector(".link-list");
const status = document.getElementById("link-status");
let clickedLinks = [];

try {
    clickedLinks = JSON.parse(localStorage.getItem("css-page-clicked-links")) || [];
    if (!Array.isArray(clickedLinks)) clickedLinks = [];
} catch {
    clickedLinks = [];
}

links.forEach(function (link) {
    if (clickedLinks.includes(link.href)) {
        link.classList.add("clicked");
    }

    link.addEventListener("click", function () {
        link.classList.add("clicked");
        if (!clickedLinks.includes(link.href)) {
            clickedLinks.push(link.href);
        }
        try {
            localStorage.setItem("css-page-clicked-links", JSON.stringify(clickedLinks));
        } catch {}
        status.textContent = "Link marked as clicked. Move the pointer away to see purple.";
    });
});

document.getElementById("reset-links").addEventListener("click", function () {
    clickedLinks = [];
    links.forEach(function (link) {
        link.classList.remove("clicked");
    });
    list.classList.add("reset-demo");
    try {
        localStorage.removeItem("css-page-clicked-links");
    } catch {}
    status.textContent = "Demo reset to blue. Browser history has not been cleared.";
});
