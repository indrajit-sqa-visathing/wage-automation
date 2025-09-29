async function scrollToElement(element, maxScrolls = 8) {
    let isDisplayed = await element.isDisplayed().catch(() => false);

    let scrollCount = 0;
    let startY = 1400;
    let endY = 800; // swipe target

    while (!isDisplayed && scrollCount < maxScrolls) {
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 500, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 50 },
                { type: 'pointerMove', duration: 500, x: 500, y: endY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.pause(300);

        isDisplayed = await element.isDisplayed().catch(() => false);
        scrollCount++;

        // move the swipe "window" down a bit each time
        startY += 50;
        endY += 50;
    }

    if (!isDisplayed) {
        throw new Error(`Could not find element after ${maxScrolls} scrolls`);
    }
}

module.exports = { scrollToElement };
