# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: multipletabs.spec.ts >> multiple tabs
- Location: tests\multipletabs.spec.ts:15:6

# Error details

```
TypeError: browser.newContext: Cannot read properties of undefined (reading 'delegate')
```

# Test source

```ts
  1  | import {test} from "@playwright/test"
  2  | 
  3  | test("new tab",async({browser})=>{
  4  |     //creating multiple tabs manually
  5  | 
  6  |     let context=await browser.newContext()
  7  |     let page= await context.newPage()
  8  |     await page.goto("https://www.flipkart.com/")
  9  | 
  10 |     let page2=await context.newPage()
  11 |     await page.goto("https://www.amazon.in/")
  12 | 
  13 | })
  14 | 
  15 | test.only("multiple tabs",async({browser})=>{
> 16 |     let context=await browser.newContext()
     |                 ^ TypeError: browser.newContext: Cannot read properties of undefined (reading 'delegate')
  17 |     let page=await context.newPage()
  18 | 
  19 |     await page.goto("https://www.flipkart.com/")
  20 |     await page.locator('(//input[@class="nw1UBF v1zwn26"])[1]').fill("shoes")
  21 |     await page.locator('//button[@class="XFwMiH" and @type="submit"]/*[name()="svg"]').click()
  22 | 
  23 |     let [page2]=await Promise.all([
  24 |         page.waitForEvent("popup"),
  25 |         page.locator('(//img[@class="MZeksS"])[1]').click()
  26 |     ])
  27 | 
  28 | 
  29 |     await page2.locator('(//div[@class="v1zwn21n v1zwn26 _1psv1zeb9 _1psv1ze0 _1psv1ze90 _1psv1ze6r _1psv1zel0 _1psv1zeir"])[1]').click()
  30 | 
  31 | })
```