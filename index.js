const puppeteer = require('puppeteer');

let browser, page, url, elements, element_selector;
url = 'https://app.powerbi.com/view?r=eyJrIjoiMDNmZWQ5ZDYtMmI5OS00ZTgyLWI2NjgtY2I0NDhmNzQ5OWZhIiwidCI6IjVjMTM0ZjEzLWE1MmUtNDFhNi1iOGIwLWNiYzY0NDhiMzczYSIsImMiOjh9';

element_selector = 'rect.column.setFocusRing';

(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage();
    await page.goto('https://app.powerbi.com/view?r=eyJrIjoiMDNmZWQ5ZDYtMmI5OS00ZTgyLWI2NjgtY2I0NDhmNzQ5OWZhIiwidCI6IjVjMTM0ZjEzLWE1MmUtNDFhNi1iOGIwLWNiYzY0NDhiMzczYSIsImMiOjh9');
    // wait for BI to load
    await page.waitForTimeout(3000);
    elements = await page.$$(element_selector);
    for (let element of elements) {
        let value = await page.evaluate(element => element.getAttribute('height'), element);
        console.log(value);
    }

    await browser.close();
})();




