import puppeteer from "puppeteer";
import fs from "fs";
import liveServer from "live-server";
const browserOptions = {
  headless: "new",
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
  try {
    liveServer.shutdown();
    this.puppeteer.close();
  } catch (e) {}
  done();
});

describe("Export", () => {
  it("`percentage.js` has a `difference` export", async () => {
    const { difference } = await import("../modules/percentage.js");
    expect(difference).toBeDefined();
  });
});

describe("Import", () => {
  it("`main.js` imports the `difference` function", async () => {
    const indexFileContents = fs
      .readFileSync("./modules/main.js")
      .toString("utf-8")
      .replace(/ /g, "");
    expect(indexFileContents).toMatch(
      /import.*difference.*from.*\/percentage.js/
    );
  });
  it("`modules/main.js` should be included in `index.html` using script tag", async () => {
    const scriptTag = await page.$eval(
      'script[src="modules/main.js"]',
      (el) => el.outerHTML
    );
    expect(scriptTag).toBeDefined();
  });
});
