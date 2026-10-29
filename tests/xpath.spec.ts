import {test} from "@playwright/test"

test('xpath ex1',async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.locator('//input[@id="username"]').fill("student")

})