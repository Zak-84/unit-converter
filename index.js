// Bookmarklet to convert mm to inches and vice versa on the entire page
javascript:(function() {
    // Function to convert mm to inches
    function mmToInches(mm) {
        const inches = mm / 25.4; // 1 inch = 25.4 mm
        return inches.toFixed(2); // Round to 2 decimal places
    }
  
    // Function to convert inches to mm
    function inchesToMm(inches) {
        const mm = inches * 25.4; // 1 inch = 25.4 mm
        return mm.toFixed(2); // Round to 2 decimal places
    }
  
    // Find and convert " mm" or " inches" values on the entire page
    document.querySelectorAll('*').forEach(element => {
        if (element.children.length === 0) { // Only process leaf nodes (no child elements)
            const text = element.textContent.trim();
  
            if (text.includes(' mm') || text.includes('mm')) {
                const match = text.match(/(\d+(\.\d+)?)\s*mm/); // Extract numeric value
                if (match) { // Ensure match is not null
                    const mmValue = parseFloat(match[1]);
                    const inchesValue = mmToInches(mmValue);
                    const span = document.createElement('span'); // Create a new span element
                    // Style as a blue pill with white text
                    span.style.backgroundColor = '#3498db'; 
                    span.style.color = 'white';
                    span.style.padding = '2px 8px';
                    span.style.borderRadius = '12px';
                    span.style.fontSize = '0.9em';
                    span.style.margin = '0 4px';
                    span.style.display = 'inline-block';
                    span.textContent = `${inchesValue} in`; // Set the conversion text
                    element.appendChild(span); // Append the span to the element
                }
            } else if (text.includes(' inches') || text.includes('"') || text.includes(' "')) {
                const match = text.match(/(\d+(\.\d+)?)\s*(inches|"|"\s*)/); // Extract numeric value
                if (match) { // Ensure match is not null
                    const inchesValue = parseFloat(match[1]);
                    const mmValue = inchesToMm(inchesValue);
                    const span = document.createElement('span'); // Create a new span element
                    // Style as a blue pill with white text
                    span.style.backgroundColor = '#3498db';
                    span.style.color = 'white';
                    span.style.padding = '2px 8px';
                    span.style.borderRadius = '12px';
                    span.style.fontSize = '0.9em';
                    span.style.margin = '0 4px';
                    span.style.display = 'inline-block';
                    span.textContent = `${mmValue} mm`; // Set the conversion text
                    element.appendChild(span); // Append the span to the element
                }
            }
        }
    });
  })();