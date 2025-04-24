# Measurement Converter Bookmarklet

A simple JavaScript bookmarklet that converts measurements on websites between inches and millimeters (and vice versa). This tool scans the page for numerical measurements, detects their units, and replaces them with the converted values.
https://zak-84.github.io/unit-converter/

## Project Structure

- `index.js`: The source JavaScript file containing the full, human-readable code for the bookmarklet.
- `dist/index.js`: The compiled, minified JavaScript file ready to be used as a bookmarklet.

## How It Works

The bookmarklet searches the webpage for text containing measurements (e.g., "12 inches" or "300 mm") and converts them to the opposite unit (inches to millimeters or millimeters to inches). Clicking the bookmarklet toggles between the units.

## Installation and Usage

### Step 1: Get the Bookmarklet Code
1. Open the `dist/index.js` file in the repository.
2. Copy the entire minified JavaScript code.

### Step 2: Create the Bookmark
1. In your browser, right-click the **Bookmarks** menu (or use the bookmark manager).
2. Select **Add Bookmark** or **New Bookmark**.
3. For the **Name**, enter something like "Measurement Converter".
4. For the **URL**, paste the copied code from `dist/index.js`.
5. Save the bookmark.

### Step 3: Use the Bookmarklet
1. Navigate to any webpage containing measurements (e.g., "10 inches" or "254 mm").
2. Click the **Measurement Converter** bookmark from your bookmarks menu.
3. The script will scan the page and convert all detected measurements to the opposite unit (inches to mm or mm to inches).
4. Click the bookmark again to toggle back to the original units.

## Notes
- The bookmarklet does not require any dependencies or npm installation. It is a standalone JavaScript script.
- It works on most websites but may not detect measurements in complex formats or dynamically loaded content.
- For development or customization, edit `index.js` and recompile to `dist/index.js` using a minifier (e.g., UglifyJS or any online minifier).

## Contributing
Feel free to fork this repository, make improvements, and submit pull requests. Suggestions for better measurement detection or additional unit conversions are welcome!

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.