# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: mouseactions.spec.ts >> drag and drop
- Location: tests\mouseactions.spec.ts:100:6

# Error details

```
Error: locator.hover: Error: strict mode violation: locator('//div[.="Mobile Accessories"]/..') resolved to 2 elements:
    1) <section class="w-[50%] flex flex-col gap-4 shadow-md rounded-md">…</section> aka getByText('Mobile AccessoriesLaptop')
    2) <div class="drop-column  min-h-[200px] bg-slate-100">…</div> aka locator('div').filter({ hasText: /^Mobile Accessories$/ }).first()

Call log:
  - waiting for locator('//div[.="Mobile Accessories"]/..')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - link [ref=e6] [cursor=pointer]:
      - /url: /
    - combobox [ref=e11]:
      - option "UI" [selected]
      - option "API"
      - option "DataBase"
      - option "UI Integrations"
  - generic [ref=e13]:
    - main [ref=e15]:
      - generic:
        - article:
          - complementary:
            - generic [ref=e16]:
              - complementary [ref=e17]:
                - generic [ref=e18]: Write a script to drag & drop an element in the web page
                - generic [ref=e22]:
                  - generic [ref=e23]:
                    - generic [ref=e24]: Accessories
                    - generic [ref=e25]:
                      - generic [ref=e26]: Mobile Charger
                      - generic [ref=e27]: Laptop Charger
                      - generic [ref=e28]: Mobile Cover
                      - generic [ref=e29]: Laptop Cover
                  - generic [ref=e30]:
                    - generic [ref=e31]: Mobile Accessories
                    - generic [ref=e33]: Laptop Accessories
              - article [ref=e35]:
                - paragraph [ref=e37]: Scenarios
                - main [ref=e39]:
                  - complementary [ref=e40] [cursor=pointer]:
                    - paragraph [ref=e41]: Write a script to drag and drop an element in the webpage ?
                  - complementary [ref=e47] [cursor=pointer]:
                    - paragraph [ref=e48]: Write a script to drag & drop the WebElement by using dragAndDrop method?
                  - complementary [ref=e54] [cursor=pointer]:
                    - paragraph [ref=e55]: Write a script to drag & drop the WebElement by using clickAndHold and release method?
                  - complementary [ref=e61] [cursor=pointer]:
                    - paragraph [ref=e62]: Write a script to drag & drop the WebElement by using moveByOffset method?
        - generic [ref=e70]:
          - paragraph [ref=e71]: Actions
          - list [ref=e72]:
            - listitem [ref=e73] [cursor=pointer]:
              - link "Default" [ref=e74]:
                - /url: /ui/dragDrop?sublist=0
            - listitem [ref=e75] [cursor=pointer]:
              - link "Axis Restricted" [ref=e76]:
                - /url: /ui/dragDrop/axisRestricted?sublist=1
            - listitem [ref=e77] [cursor=pointer]:
              - link "Drag Position" [ref=e78]:
                - /url: /ui/dragDrop/dragToCorrect?sublist=2
            - listitem [ref=e79] [cursor=pointer]:
              - link "Drag Multiple" [ref=e80]:
                - /url: /ui/dragDrop/dragToMultiple?sublist=3
    - complementary [ref=e81]:
      - generic [ref=e82]:
        - generic [ref=e86]:
          - img "searchIcon" [ref=e88]
          - textbox "Search..." [ref=e90]
        - list [ref=e93]:
          - listitem [ref=e94] [cursor=pointer]:
            - generic [ref=e95]: Web Elements
          - list [ref=e100]:
            - listitem [ref=e101]:
              - link "Text Field" [ref=e102] [cursor=pointer]:
                - /url: /ui
            - listitem [ref=e105]:
              - link "Button" [ref=e106] [cursor=pointer]:
                - /url: /ui/button
            - listitem [ref=e109]:
              - link "Link" [ref=e110] [cursor=pointer]:
                - /url: /ui/link
            - listitem [ref=e113]:
              - link "Check Box" [ref=e114] [cursor=pointer]:
                - /url: /ui/checkbox
            - listitem [ref=e117]:
              - link "Radio Button" [ref=e118] [cursor=pointer]:
                - /url: /ui/radio
            - listitem [ref=e121]:
              - link "Image" [ref=e122] [cursor=pointer]:
                - /url: /ui/image
            - listitem [ref=e125]:
              - link "Toggle" [ref=e126] [cursor=pointer]:
                - /url: /ui/toggle
            - listitem [ref=e129]:
              - link "Slider" [ref=e130] [cursor=pointer]:
                - /url: /ui/slider
            - listitem [ref=e133]:
              - link "Dropdown" [ref=e134] [cursor=pointer]:
                - /url: /ui/dropdown
            - listitem [ref=e137]:
              - link "Web Table" [ref=e138] [cursor=pointer]:
                - /url: /ui/table
            - listitem [ref=e141]:
              - link "FormValidation" [ref=e142] [cursor=pointer]:
                - /url: /ui/formValidation
            - listitem [ref=e145]:
              - link "Captcha" [ref=e146] [cursor=pointer]:
                - /url: /ui/captcha
            - listitem [ref=e149]:
              - link "Audio" [ref=e150] [cursor=pointer]:
                - /url: /ui/audio
            - listitem [ref=e153]:
              - link "Video" [ref=e154] [cursor=pointer]:
                - /url: /ui/video
          - listitem [ref=e157] [cursor=pointer]:
            - generic [ref=e158]: X Path
          - listitem [ref=e162] [cursor=pointer]:
            - generic [ref=e163]: Popups
          - listitem [ref=e167] [cursor=pointer]:
            - generic [ref=e168]: Date & Time Picker
          - listitem [ref=e172] [cursor=pointer]:
            - generic [ref=e173]: Scroll
          - listitem [ref=e177] [cursor=pointer]:
            - generic [ref=e178]: Synchronization
          - listitem [ref=e182] [cursor=pointer]:
            - generic [ref=e183]: Frames
          - listitem [ref=e187] [cursor=pointer]:
            - generic [ref=e188]: Mouse Actions
          - listitem [ref=e192] [cursor=pointer]:
            - generic [ref=e193]: Keyboard Actions
          - listitem [ref=e197] [cursor=pointer]:
            - generic [ref=e198]: Shadow Root Elements
          - listitem [ref=e202] [cursor=pointer]:
            - generic [ref=e203]: Others
```

# Test source

```ts
  15  |     await page.locator("#btn_a").click({button:"right",clickCount:6})
  16  |     await page.getByText('Yes',{exact:true}).click({delay:5000,force:true,})
  17  | 
  18  |     let value='You selected "Yes"'
  19  |     await expect(value).toContain('You selected "Yes"')
  20  | 
  21  |     //? button --> it wil specify which mouse button should be clicked, btdefault it will click perform left click
  22  | 
  23  |     //? clickcount --> it will specify the number of mouce clicks
  24  | 
  25  |     //? delay --> it will specify the time between the press and release of the mouse button
  26  | 
  27  |     //? force --> if the element is disabled force will help to forcefully click on it, byf=eault the value for force is false
  28  | })
  29  | 
  30  | test("dblclick",async({page})=>{
  31  |     await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2")
  32  | 
  33  |     // await page.locator("#btn_a").click({clickCount:2})
  34  |     await page.locator("#btn_a").dblclick()
  35  | 
  36  | 
  37  | })
  38  | 
  39  | 
  40  | test("hover,down,up",async({page})=>{
  41  | 
  42  |     await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
  43  | 
  44  |     await page.locator('#circle').hover()
  45  |     //!hover --> it will hover the curosr on the specified element 
  46  | 
  47  |     //? down --> it is used to press the mouse button
  48  |     //? up --> it is used to release the mouse button
  49  | 
  50  |     await page.mouse.down()
  51  | 
  52  |     await page.waitForTimeout(5000)
  53  | 
  54  |     await page.mouse.up()
  55  | 
  56  |     await page.locator('#circle').click({delay:5000})
  57  | })
  58  | 
  59  | test("move , boundingBox",async({page})=>{
  60  |     await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
  61  | 
  62  |     //!boundingBox()-->A bounding box is the position and sixe of a web element on the page, represented using X and Y coordinates, width and height
  63  |     let box=await page.locator('.w-5.h-5.mt-5.ml-3.cursor-pointer ').boundingBox()
  64  |     console.log(box);
  65  |     
  66  | 
  67  |     //! move() means movig the mouse pointer from its current position to a specified location or web element
  68  |     await page.locator('.w-5.h-5.mt-5.ml-3.cursor-pointer ').hover()
  69  |     await page.mouse.move(768.3500366210938,251.52500915527344)
  70  | 
  71  |     // let text=await page.locator('//ul[@class="p-4"]').textContent()
  72  |     let text=await page.locator('//li[@class="text-sm list-disc ml-5 p-1"]').allTextContents()
  73  |     console.log(text);
  74  |     
  75  | 
  76  | })
  77  | 
  78  | test("scolling",async({page})=>{
  79  |     await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
  80  | 
  81  |     // await page.locator('[type="checkbox"]').scrollIntoViewIfNeeded() //external
  82  | 
  83  |     // await page.locator('[type="checkbox"]').click() //built in
  84  | 
  85  | 
  86  |     //!vertical scrolling
  87  |     await page.mouse.wheel(0,1000)
  88  |     await page.mouse.wheel(0,-900)
  89  | 
  90  | 
  91  |     //!horizontal scrolling
  92  | 
  93  |     await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabHorizontal')
  94  |     await page.mouse.wheel(1000,0)
  95  |     await page.mouse.wheel(-600,0)
  96  | 
  97  | })
  98  | 
  99  | 
  100 | test.only("drag and drop",async({page})=>{
  101 | 
  102 |     //?case 1
  103 |     // await page.goto("https://demoapps.qspiders.com/ui/dragDrop?sublist=0")
  104 |     // await page.getByText("Drag Me",{exact:true}).hover()
  105 | 
  106 |     // await page.mouse.down()
  107 |     // await page.mouse.move(200,500)
  108 |     // await page.mouse.up()
  109 | 
  110 | 
  111 |     //!case 2
  112 |     await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
  113 |     await page.getByText("Mobile Charger",{exact:true}).hover()
  114 |     await page.mouse.down()
> 115 |     await page.locator('//div[.="Mobile Accessories"]/..').hover()
      |                                                            ^ Error: locator.hover: Error: strict mode violation: locator('//div[.="Mobile Accessories"]/..') resolved to 2 elements:
  116 |     await page.mouse.up()
  117 | 
  118 | })
  119 | 
  120 | 
```