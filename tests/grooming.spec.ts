import {test} from "@playwright/test"


test("test_title",async({page})=>{
    // let context= await browser.newContext()
    // let page= await context.newPage()  //!page--> tab
    //!script
    //launch the url
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    //fill the username TF
    //click on button
})

test.only("test_title 2",async({page})=>{
    // let context= await browser.newContext()
    // let page= await context.newPage()  //!page--> tab
    //!script
    //launch the url
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    //fill the username TF
    //click on button
})