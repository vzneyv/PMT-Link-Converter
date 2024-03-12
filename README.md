# PMT-Link-Converter
Extension which takes PDF links from Physics and Maths Tutor, and converts it into non bloated raw pdf file links


This code was made with ChatGPT and allows users to paste a link from PMT and removes the AD sidebar which no one likes, by keeping only the raw pdf link and decoding any encoded URI components using the decodeURIComponent() function.
This also includes a right click context menu option which does the same function as the extension, without needing to copy and paste the link.

## How to install


## Key components include:

### Manifest File (manifest.json):
Specifies basic information about the extension such as its name, version, description, permissions required, icons, and background service worker.

### Popup Interface (popup.html):
Provides a simple interface for users to input URLs and trigger the conversion process.

### Stylesheet (popup.css):
Contains basic styling rules for the popup interface.

### Popup Script (popup.js):
Handles user interaction within the popup interface, particularly triggering the conversion process when the user clicks the "Convert" button.

### Background Script (background.js):
Adds a context menu item to the browser, allowing users to right-click on links and convert them directly. This script also handles the conversion process when triggered through the context menu.
