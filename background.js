chrome.runtime.onInstalled.addListener(() => {
  console.log("hello");

  //create context menu
  chrome.contextMenus.create({
      id: "vocabulary",
      title: "Search for: \"%s\"  ",
      contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  //the URL that will be added to based on the selection
  const baseURL = "http://localhost:3000/search";
  const word = info.selectionText;
  const url = baseURL;

  // Post request with selected text in body
  fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ word: word })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.text();
  })
  .then(data => {
      console.log(data);
  })
  .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      // Handle errors here
  });
});
