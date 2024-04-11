# PMT-Link-Converter-Extension for chrome only for now
Extension which takes PDF links from Physics and Maths Tutor, and converts it into non bloated raw pdf file links which loads 900% faster on average.
You should be able to just click a link and kerblam!
if this doesnt work, right click a link and select the context menu option, or open the extension and paste the link to use the extension


This code was made with ChatGPT and allows users to paste a link from PMT and removes the AD sidebar which no one likes, by keeping only the raw pdf link and decoding any encoded URI components using the decodeURIComponent() function.
This also includes a right click context menu option which does the same function as the extension, without needing to copy and paste the link.

## How to download extension from this page
### Method 1:
##### Press the green "Code" dropdown button and then click "Download ZIP"
##### Extract the newly downloaded ZIP
##### Continue to "How to install" section and follow the steps provided unless you know what you're doing

### Method 2:
##### Press the "Releases" button on the right hand side of this page
##### Scroll to the latest release and press the relevant "PMT.Link.Converter.Zip"
##### Extract the newly downloaded ZIP
##### Continue to "How to install" section and follow the steps provided unless you know what you're doing


## How to install
1. Open Google Chrome
2. Type in the url bar "chrome://extensions" without the quotes (")
3. Turn on developer mode using the switch on the top right of the extensions page you have just navigated to
   You will now see 3 buttons appear on the top of the page
4. Press the "Load unpacked" button
5. Select folder which contains the "PMT Link Converter" extension files and press select folder
6. The extension should be loaded, switch it on if needed
7. ????
8. PROFIT


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
