const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  console.log("Connecting to website..")
  await page.goto('https://iknow.jp/content/japanese');
  console.log("Done!")
})();
