import {test} from '@playwright/test'

test('hard_coded_waits',async({page})=>{
    await page.waitForTimeout(2000)
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.waitForTimeout(2000)

    await page.locator('//input[@id="username"]').fill("student")
    await page.waitForTimeout(2000)

    await page.getByLabel("Password",{exact:true}).fill("Password123")
    await page.waitForTimeout(2000)

    await page.getByRole("button",{name:"Submit",exact:true}).click()
    await page.waitForTimeout(2000)

})