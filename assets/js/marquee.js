/*
 * Scrolling text band on the home page (#csv-marquee), filled from the price CSV:
 *   data-marquee="gruppen" -> all groups in CSV order
 *   data-marquee="shop"    -> all item names of the group "Shop"
 * The HTML already contains the same entries as a fallback; this keeps them in sync with the CSV.
 */
document.addEventListener("DOMContentLoaded", function () {
    const band = document.getElementById("csv-marquee");
    if (!band) return;
    const SPEED = 60; // pixels per second, same for both rows

    function fill(row, words, iconClass) {
        row.querySelectorAll(".marqee-list").forEach(list => {
            list.innerHTML = "";
            words.forEach(word => {
                const li = document.createElement("li");
                li.className = "marquee-item";
                const icon = document.createElement("span");
                icon.className = "text-slider";
                const i = document.createElement("i");
                i.className = "fa-solid " + iconClass;
                icon.appendChild(i);
                const text = document.createElement("span");
                text.className = "text-slider";
                text.textContent = word;
                li.append(icon, text);
                list.appendChild(li);
            });
        });
    }

    // Each row holds 3 identical lists and scrolls by exactly one list width, so the loop is seamless
    function setSpeed() {
        band.querySelectorAll(".marquee-inner").forEach(inner => {
            const list = inner.querySelector(".marqee-list");
            if (list) inner.style.animationDuration = (list.offsetWidth / SPEED) + "s";
        });
    }

    setSpeed();
    window.addEventListener("resize", setSpeed);

    if (!window.PreiseCSV) return;
    PreiseCSV.load().then(rows => {
        const groups = [...new Set(rows.map(r => r.gruppe))];
        const shop = rows.filter(r => r.gruppe === "Shop").map(r => r.name);
        const top = band.querySelector('[data-marquee="gruppen"]');
        const bottom = band.querySelector('[data-marquee="shop"]');
        if (top && groups.length) fill(top, groups, "fa-wrench");
        if (bottom && shop.length) fill(bottom, shop, "fa-cart-shopping");
        setSpeed();
    }).catch(() => { /* keep the fallback entries from the HTML */ });
});
