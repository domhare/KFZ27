/*
 * Shared loader for "PAM PREISE CSV - Homepage.csv" (columns: Name, Preis, Gruppe).
 * Used by werkstatt.js (price list) and marquee.js (scrolling text band on the home page).
 */
window.PreiseCSV = (function () {
    const URL = "PAM PREISE CSV - Homepage.csv";

    // Minimal CSV parser: handles quoted fields containing commas, e.g. "13,00/h"
    function parse(text) {
        const rows = [];
        let row = [], field = "", quoted = false;
        for (let i = 0; i < text.length; i++) {
            const c = text[i];
            if (quoted) {
                if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
                else if (c === '"') quoted = false;
                else field += c;
            } else if (c === '"') quoted = true;
            else if (c === ",") { row.push(field); field = ""; }
            else if (c === "\n" || c === "\r") {
                if (c === "\r" && text[i + 1] === "\n") i++;
                row.push(field); field = "";
                if (row.some(f => f.trim() !== "")) rows.push(row);
                row = [];
            } else field += c;
        }
        row.push(field);
        if (row.some(f => f.trim() !== "")) rows.push(row);
        return rows;
    }

    // Resolves to [{ name, preis, gruppe }] in CSV order
    function load() {
        return fetch(encodeURI(URL))
            .then(res => {
                if (!res.ok) throw new Error(res.status);
                return res.text();
            })
            .then(text => {
                const rows = parse(text.replace(/^﻿/, ""));
                const header = rows.shift().map(h => h.trim().toLowerCase());
                const iName = header.indexOf("name"), iPrice = header.indexOf("preis"), iGroup = header.indexOf("gruppe");
                return rows.map(r => ({
                    name: (r[iName] || "").trim(),
                    preis: (r[iPrice] || "0").trim(),
                    gruppe: (r[iGroup] || "Sonstiges").trim()
                })).filter(it => it.name);
            });
    }

    return { load: load };
})();
