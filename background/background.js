chrome.contextMenus.create({
    id: "convertLink",
    title: "Convert link with PMT Link Converter",
    contexts: ["link"]
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "convertLink") {
      convert(info.linkUrl);
    }
  });
  
  function convert(url) {
    let convertedUrl = "";
    if (url.startsWith("https://www.physicsandmathstutor.com/") && url.includes("pdf-pages/?pdf=")) {
      convertedUrl = decodeURIComponent(url.substring(url.indexOf("pdf-pages/?pdf=") + 15));
    } else {
      alert("Invalid PMT link. Please enter a correct URL.");
      return;
    }
    chrome.tabs.create({ url: convertedUrl });
  }
  