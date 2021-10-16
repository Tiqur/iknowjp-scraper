const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  console.log("Connecting to website..")
  await page.goto('https://iknow.jp/content/japanese');

  // Fetch each vocab word step link ( remove first two since they deal with kana, not vocab )
  const handles = (await page.$$eval('.shiv-border-box-sizing > li > div > a', anchors => [].map.call(anchors, a => a.href))).slice(2);
  console.log(handles.length);

  console.log("Done!");
})();
