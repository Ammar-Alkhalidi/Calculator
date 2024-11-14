// File: tests/task2.test.js
import puppeteer from "puppeteer";
import liveServer from "live-server";

const browserOptions = {
  headless: true,
  ignoreHTTPSErrors: true,
};

let browser;
let page;

beforeAll(async () => {
  liveServer.start({
    port: 8181,
    open: false,
    logLevel: 0,
  });
  await new Promise((resolve) => liveServer.watcher.on("ready", resolve));
  browser = await puppeteer.launch(browserOptions);
  page = await browser.newPage();
  await page.goto("http://localhost:8181");
}, 30000);

afterAll((done) => {
  liveServer.shutdown();
  browser.close();
  done();
});

describe("Percentage Calculation", () => {
  it("Page should display correct difference percentage result based on entered values", async () => {
    await page.click("#change_1", { clickCount: 3 });
    await page.type("#change_1", "10");
    await page.click("#change_2", { clickCount: 3 });
    await page.type("#change_2", "3");
    await page.keyboard.press("Enter");
    await new Promise((resolve) => setTimeout(resolve, 500));
    const result = await page.$eval("#change_result", (el) => el.value);
    expect(result).toBe("-70.00");
  });
});
