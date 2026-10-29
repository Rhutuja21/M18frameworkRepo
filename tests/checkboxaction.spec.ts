/**
 * check()--> used to check the checkbox or radiobutton
 * uncheck()--> used  to uncheck the checkbox or radiobutton
 */

import {test} from "@playwright/test"

test('checkbox and radiobutton actions',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/checkbox?sublist=0")

    await page.locator("#d_a").check()
    await page.locator("#domain_b").check()

    await page.locator("#domain_a").uncheck()
})