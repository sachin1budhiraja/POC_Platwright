import {test, expect, Browser, Page, chromium, firefox} from '@playwright/test'


test('login to page', async()=>{
    const browser = await firefox.launch({headless:false});
    const page = await browser.newPage();
    await page.goto("https://google.com");
    const searchTextBox = await page.locator('textarea[title="Search"]').fill("hi this is my script");
    console.log("Printing the title: "+ await page.title());
});