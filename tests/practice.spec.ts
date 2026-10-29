import {test} from "@playwright/test"

test("tokyo",async({page})=>{

    await page.goto("https://www.olympics.com/en/olympic-games/tokyo-2020/athletes")
    // await page.locator('//p[text()="See table"]/..').click()
    // await page.locator('//a[text()="Athletes" and @data-cy="link"]').click()

    let text=await page.locator('(//h3[text()="Emma MCKEON"]/ancestor::div[@class="sc-27739b6-2 hJGCPo"]/following-sibling::div//span[@data-cy="ocs-text-module"])[1]').textContent()

    console.log(text);
    
})

test("make_my_trip",async({page})=>{
    await page.goto("https://www.makemytrip.com/")

    await page.click('//span[text()="Departure"]')
    //only applicable for css and xpath not for getbymethod

    // await page.locator('//span[@aria-label="Next Month"]').click()
    // await page.locator('//span[@aria-label="Next Month"]').click()
    // await page.locator('//span[@aria-label="Next Month"]').click()


    let nextmonth=await page.locator('//span[@aria-label="Next Month"]')
    for(let i=0;i<3;i++){
        await nextmonth.click()
    }


    await page.locator('//div[@class="DayPicker-Day" and @aria-label="Sun Jan 24 2027"]').click()

})


test.only("icc cricket ranking",async({page})=>{
    await page.goto('https://www.icc-cricket.com/rankings')

    let name="Steve"

    let ratings=await page.textContent(`//span[text()="${name}"]/ancestor::td[@class="w-[calc(100%-110px)] align-middle"]/preceding-sibling::td//span[@class="text-xs font-extrabold uppercase text-primary pr-2"]`)

    console.log(ratings);
    
})