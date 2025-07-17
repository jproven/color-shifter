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

    const rgbText = document.createElement('span');
    rgbText.textContent = color.rgb;
    rgbText.style.cursor = 'pointer';
    rgbText.title = `Click to copy RGB`;
    rgbText.addEventListener('click', () => copyToClipboard(color.rgb));

    const separator = document.createElement('span');
    separator.textContent = ' / ';

    const hexText = document.createElement('span');
    hexText.textContent = color.hex;
    hexText.style.cursor = 'pointer';
    hexText.title = 'Click to copy HEX';
    hexText.addEventListener('click', () => copyToClipboard(color.hex));
    
    const label = document.createElement('span');
    label.appendChild(rgbText);
    label.appendChild(separator);
    label.appendChild(hexText);

    entry.appendChild(preview);
    entry.appendChild(label);
    history.appendChild(entry);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert(`Copied: ${text}`))
        .catch(err => console.error('Failed to copy:', err));
}

