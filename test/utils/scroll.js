async function scrollToElement(element, maxScrolls = 5) {
    let isDisplayed = await element.isDisplayed().catch(() => false);

    let scrollCount = 0;
    while (!isDisplayed && scrollCount < maxScrolls) {
        // Swipe up using W3C actions
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 500, y: 1600 },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 500 },
                { type: 'pointerMove', duration: 1000, x: 500, y: 400 },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.pause(1000);
        isDisplayed = await element.isDisplayed().catch(() => false);
        scrollCount++;
    }

    if (!isDisplayed) {
        throw new Error(`❌ Could not find element after ${maxScrolls} scrolls`);
    }
}

module.exports = { scrollToElement };
