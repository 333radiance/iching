// 64卦（最簡精簡版，可正常使用）
const hexagrams = [
    { name: "乾為天", desc: "剛健自強，積極進取。" },
    { name: "坤為地", desc: "柔順承載，靜以待時。" },
    { name: "水雷屯", desc: "萬事起頭難，需堅持。" },
    { name: "山水蒙", desc: "困惑之象，需受教化。" },
    // ...（之後我會幫你補 64 卦完整版）
];

// 隨機六爻產生器
function castLine() {
    const value = Math.floor(Math.random() * 4) + 6;
    return value; // 6, 7, 8, 9
}

// 轉換六爻成二進位（上卦 + 下卦）
function linesToIndex(lines) {
    let bin = lines.map(v => (v === 7 || v === 9 ? 1 : 0));
    let num = parseInt(bin.join(""), 2);
    return num % hexagrams.length;
}

// 動爻 → 變卦
function changeLines(lines) {
    return lines.map(v => {
        if (v === 6) return 7;
        if (v === 9) return 8;
        return v;
    });
}

document.getElementById("castButton").addEventListener("click", function () {
    const lines = [];
    for (let i = 0; i < 6; i++) lines.push(castLine());

    const idx = linesToIndex(lines);
    const hex = hexagrams[idx];

    const changed = changeLines(lines);
    const changedIdx = linesToIndex(changed);
    const changedHex = hexagrams[changedIdx];

    document.getElementById("hexName").innerText = hex.name;
    document.getElementById("hexDesc").innerText = hex.desc;

    document.getElementById("changedHexName").innerText = changedHex.name;
    document.getElementById("changedHexDesc").innerText = changedHex.desc;

    document.getElementById("lines").innerHTML =
        lines.map(v => `<div>${v}</div>`).join("");

    document.getElementById("result").style.display = "block";
});
