function getRandomColorRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { rgb: `rgb(${r}, ${g}, ${b})`, hex: rgbToHex(r, g, b) };
}

function rgbToHex(r, g, b) {
    return `#${[r, g, b]
        .map(x => x.toString(16).padStart(2, '0'))
        .join('')}`;
}

function setRandomBackgroundColor() {
    const color = getRandomColorRGB();
    document.body.style.backgroundColor = color.rgb;
    document.getElementById('colorValue').textContent = `${color.rgb} / ${color.hex}`;
    addToHistory(color);
}

function addToHistory(color) {
    const history = document.getElementById('color-history');

    const entry = document.createElement('div');
    entry.className = 'color-entry';

    const preview = document.createElement('div');
    preview.className = 'color-preview';
    preview.style.backgroundColor = color.rgb;

    const label = document.createElement('span');
    label.textContent = `${color.rgb} / ${color.hex}`;

    entry.appendChild(preview);
    entry.appendChild(label);
    history.appendChild(entry);
}
