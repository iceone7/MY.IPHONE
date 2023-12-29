document.addEventListener("DOMContentLoaded", function () {
    const adBanner = document.querySelector(".ad-banner");
    const closeBtn = document.querySelector(".close-btn");

    setTimeout(() => {
        adBanner.classList.add("fade-in-out");
    }, 1000);

    closeBtn.addEventListener("click", function () {
        adBanner.style.display = "none";
    });
});

function closeBanner() {
    const adBanner = document.querySelector(".ad-banner");
    adBanner.style.display = "none";
}
