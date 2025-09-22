async function scrollToElement(element, maxScrolls = 8) {
    let isDisplayed = await element.isDisplayed().catch(() => false);

    let scrollCount = 0;
    while (!isDisplayed && scrollCount < maxScrolls) {
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 500, y: 1400 },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 300 },
                { type: 'pointerMove', duration: 2000, x: 500, y: 900 },
                { type: 'pointerUp', button: 0 }
            ]
        }]);

        await driver.pause(800);
        isDisplayed = await element.isDisplayed().catch(() => false);
        scrollCount++;
    }

    if (!isDisplayed) {
        throw new Error(`Could not find element after ${maxScrolls} scrolls`);
    }
}

module.exports = { scrollToElement };
