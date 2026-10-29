/**
 * 1- press()
 * 2- insertText()
 * 3- type()
 * 4-down()
 * 5-up()
 */

import {test} from "@playwright/test"

test("type(),insertText()",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.getByPlaceholder("Enter your name",{exact:true}).click()
    await page.keyboard.type('john')
    //!type() is used to fill the text in human format if the element is focused

    await page.keyboard.insertText("demo")
    //! insertText() is used to fill the text in the focused element in one go
    await page.keyboard.press("Control+A") // selection all text
    await page.keyboard.press("Control+C") // copy all the selected text

    await page.keyboard.press("Tab")
    //! press() is used to press the keyboard key [combination of keys also ]
    await page.keyboard.press("Control+V") //paste the copied text

    //!down()--> press the keyboard key but not release it
    await page.keyboard.down("Tab")

    //!up() --> it is used to release the currently pressed button
    await page.keyboard.up("Tab")
    await page.keyboard.insertText("123")

    await page.locator('//span[@class="absolute text-slate-600 text-[18px] bg-gray-100"]').click()
})