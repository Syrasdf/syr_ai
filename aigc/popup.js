document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('changeColorButton');
    
    button.addEventListener('click', async () => {
        const [tab] = await chrome.tabs.query({active: true, currentWindow: true});
        
        chrome.scripting.executeScript({
            target: {tabId: tab.id},
            func: () => {
                document.body.style.backgroundColor = '#00ff00';
            }
        });
    });
});