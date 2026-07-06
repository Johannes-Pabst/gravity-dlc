async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab.id;
}
console.log("hi1!");
(async () => {
    chrome.scripting.executeScript({
        target: { tabId: await getCurrentTab() },
        files:["dist/script.js"],
    });
})().then(()=>{
    console.log("hi!");
});