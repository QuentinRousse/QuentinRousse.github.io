const container = document.querySelector(".logos-container");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

next.addEventListener("click", () => {

    const maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft >= maxScroll - 5) {
        container.scrollTo({
            left: 0,
            behavior: "smooth"
        });
    } else {
        container.scrollBy({
            left: getScrollAmount(),
            behavior: "smooth"
        });
    }
});

prev.addEventListener("click", () => {

    if (container.scrollLeft <= 5) {
        container.scrollTo({
            left: container.scrollWidth,
            behavior: "smooth"
        });
    } else {
        container.scrollBy({
            left: -getScrollAmount(),
            behavior: "smooth"
        });
    }
});

function getScrollAmount() {

    if (window.innerWidth <= 768) {
        return container.clientWidth;
    }

    return container.clientWidth / 3;
}