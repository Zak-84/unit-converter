function mmToInches(mm) {
    const inches = mm / 25.4;
    return inches.toFixed(2);
}

function inchesToMm(inches) {
    const mm = inches * 25.4;
    return mm.toFixed(2);
}

function applyPillStyle(element) {
    element.style.backgroundColor = '#3498db';
    element.style.color = 'white';
    element.style.padding = '2px 8px';
    element.style.borderRadius = '12px';
    element.style.fontSize = '0.9em';
    element.style.margin = '0 4px';
    element.style.display = 'inline-block';
}

document.querySelectorAll('*').forEach(element => {
    if (element.children.length === 0) {
        const text = element.textContent.trim();

        if (text.includes(' mm') || text.includes('mm')) {
            const match = text.match(/(\d+(\.\d+)?)\s*mm/);
            if (match) {
                const mmValue = parseFloat(match[1]);
                const inchesValue = mmToInches(mmValue);
                const span = document.createElement('span');
                applyPillStyle(span);
                span.textContent = `${inchesValue} in`;
                element.appendChild(span);
            }
        } else if (text.includes(' inches') || text.includes('"') || text.includes(' "')) {
            const match = text.match(/(\d+(\.\d+)?)\s*(inches|"|"\s*)/);
            if (match) {
                const inchesValue = parseFloat(match[1]);
                const mmValue = inchesToMm(inchesValue);
                const span = document.createElement('span');
                applyPillStyle(span);
                span.textContent = `${mmValue} mm`;
                element.appendChild(span);
            }
        }
    }
});
