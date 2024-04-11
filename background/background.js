// Create context menu item
chrome.contextMenus.create({
  id: "convertLink",
  title: "Convert link with PMT Link Converter",
  contexts: ["link"]
});

// Add listener for context menu item click
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "convertLink") {
    convert(info.linkUrl);
  }
});

// Add listener for web navigation to detect valid PMT links
chrome.webNavigation.onCompleted.addListener(function(details) {
  if(details.url.startsWith("https://www.physicsandmathstutor.com/") && details.url.includes("pdf-pages/?pdf=")) {
    convert(details.url);
  }
});

// Function to convert PMT link
function convert(url) {
  if (url.startsWith("https://www.physicsandmathstutor.com/") && url.includes("pdf-pages/?pdf=")) {
    let convertedUrl = decodeURIComponent(url.substring(url.indexOf("pdf-pages/?pdf=") + 15));
    chrome.tabs.update({ url: convertedUrl });
  } else {
    alert("Invalid PMT link. Please enter a correct URL.");
  }
}
