// Deans page stuff
const deans_deansPerPage = 4;
const deans_container = document.getElementById("dean-list")
const deans_pagination = document.getElementById("deans-paginate");
const deans_pageLinks = document.querySelectorAll(".deans-pagination-link");
const deans_deanCards = Array.from(deans_container.getElementsByClassName("deanlist-item"));
const deans_totalPages = Math.ceil(deans_deanCards / deans_deansPerPage);
let deans_currentPage = 1;

// Display content for certain "page"
function deans_displayPage(pageNum) {
    const pageStart = (pageNum - 1) * deans_deansPerPage;
    const pageEnd = pageStart + deans_deansPerPage;
    deans_deanCards.forEach((deanItem, i) => {
        if (i >= pageStart && i < pageEnd) {
            deanItem.style.display = "block";
        }
        else {
            deanItem.style.display = "none";
        }
    })
    deans_pageLinks.forEach((link, i) => {
        if (i + 1 == pageNum) {
            link.style.fontSize = "1.25em";
        }
        else {
            link.style.fontSize = "1em";
        }
    })
}

//Event listener for pagination buttons
deans_pageLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedPage = parseInt(link.getAttribute("data-pageNum"));
        deans_currentPage = selectedPage;
        deans_displayPage(deans_currentPage);
        
    })
})
//Make first pagination button selected by default
deans_displayPage(1)
// End of deans page