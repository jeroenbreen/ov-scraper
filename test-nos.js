const puppeteer = require('puppeteer');

let browser, page, url, test_element, test_element_selector, test_value;
url = 'https://nos.nl/';

test_element_selector = 'span.js-weather-temp';

(async () => {
    browser = await puppeteer.launch()
    // if you want to see what puppeteer is doing, you can make him actually open the browser:
    // browser = await puppeteer.launch(
    //     {
    //     headless: false,
    //     executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
    //     }
    // );
    page = await browser.newPage();
    await page.goto('https://nos.nl/');
    test_element = await page.$(test_element_selector);
    test_value = await page.evaluate(test_element => test_element.textContent, test_element);

    // should print the temperature in the Netherlands for today in celsius
    console.log(test_value);

    await browser.close();
})();

