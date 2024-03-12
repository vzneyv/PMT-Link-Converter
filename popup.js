document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('convertBtn').addEventListener('click', function() {
      let url = document.getElementById('urlInput').value;
      convert(url);
  });
});

function convert(url) {
  let convertedUrl = "";
  if (url.startsWith("https://www.physicsandmathstutor.com/") && url.includes("pdf-pages/?pdf=")) {
      convertedUrl = decodeURIComponent(url.substring(url.indexOf("pdf-pages/?pdf=") + 15));
      document.getElementById('status').textContent = "Link converted successfully!";
  } else {
      document.getElementById('status').textContent = "Invalid PMT link. Please enter a correct URL.";
      return;
  }
  chrome.tabs.create({ url: convertedUrl });
}
