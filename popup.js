function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  renderStatus("Reloading pusheen");
  chrome.tabs.executeScript(null, {file: 'line.js'});
  // Add 1s timeout for user to read the first message
  setTimeout(function() {renderStatus("Finished reloading pusheen");}, 1000);
});
