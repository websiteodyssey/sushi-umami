import pkg from "file:///C:/Users/linje/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.js";
const { chromium } = pkg;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:5180/");
await page.waitForTimeout(2200);

// move mouse over plain area
await page.mouse.move(300, 600, { steps: 10 });
await page.waitForTimeout(400);
await page.screenshot({ path: "/tmp/screenshots2/cursor_plain.png" });

// move mouse over the CTA button (hover state)
const button = await page.locator("a", { hasText: "Découvrir" }).first();
const box = await button.boundingBox();
if (box) {
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2, { steps: 10 });
}
await page.waitForTimeout(400);
await page.screenshot({ path: "/tmp/screenshots2/cursor_hover.png" });

await browser.close();
