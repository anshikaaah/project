document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
document.getElementById("pop-button").onclick = function () {
    window.location.href = "page3.html"; // Replace with your target URL
};
