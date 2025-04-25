javascript:(function() {
    function mmToInches(mm) {
        const inches = mm / 25.4;
        return inches.toFixed(2);
    }
  
    function inchesToMm(inches) {
        const mm = inches * 25.4;
        return mm.toFixed(2);
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
                    span.style.backgroundColor = '#3498db'; 
                    span.style.color = 'white';
                    span.style.padding = '2px 8px';
                    span.style.borderRadius = '12px';
                    span.style.fontSize = '0.9em';
                    span.style.margin = '0 4px';
                    span.style.display = 'inline-block';
                    span.textContent = `${inchesValue} in`;
                    element.appendChild(span);
                }
            } else if (text.includes(' inches') || text.includes('"') || text.includes(' "')) {
                const match = text.match(/(\d+(\.\d+)?)\s*(inches|"|"\s*)/);
                if (match) {
                    const inchesValue = parseFloat(match[1]);
                    const mmValue = inchesToMm(inchesValue);
                    const span = document.createElement('span');
                    span.style.backgroundColor = '#3498db';
                    span.style.color = 'white';
                    span.style.padding = '2px 8px';
                    span.style.borderRadius = '12px';
                    span.style.fontSize = '0.9em';
                    span.style.margin = '0 4px';
                    span.style.display = 'inline-block';
                    span.textContent = `${mmValue} mm`;
                    element.appendChild(span);
                }
            }
        }
    });
  })();