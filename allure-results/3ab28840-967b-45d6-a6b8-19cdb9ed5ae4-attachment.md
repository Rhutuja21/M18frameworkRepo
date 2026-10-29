# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: jsondata.spec.ts >> for application--> multiple set
- Location: tests\jsondata.spec.ts:26:6

# Error details

```
TypeError: _jsondata.default is not iterable
```

# Test source

```ts
  1  | 
  2  | import {test} from "@playwright/test"
  3  | import data from "../DDT/jsondata.json"
  4  | 
  5  | test("Single set",async()=>{
  6  |     // console.log(data.greet);
  7  |     // console.log(data.subject);  
  8  | })
  9  | 
  10 | test("multiple json bject in array",async()=>{
  11 |     // data.forEach((d)=>{
  12 |     //     console.log(d.greet);
  13 |     // })
  14 | })
  15 | 
  16 | 
  17 | test("for appliaction--> single set of data",async({page})=>{
  18 |     // await page.goto(data.url)
  19 |     // await page.getByLabel("Username",{exact:true}).fill(data.username)
  20 |     // await page.getByLabel("Password",{exact:true}).fill(data.password)
  21 | 
  22 |     // await page.getByRole("button",{name:"Submit",exact:true}).click()
  23 | })
  24 | 
  25 | 
  26 | test.only("for application--> multiple set",async({page})=>{
  27 | 
> 28 |     for(let testdata of data){
     |                         ^ TypeError: _jsondata.default is not iterable
  29 |         let url=testdata.url
  30 |         let username=testdata.username
  31 |         let password=testdata.password
  32 | 
  33 |         await page.goto(url)
  34 |         await page.getByLabel("Username",{exact:true}).fill(username)
  35 |         await page.getByLabel("Password",{exact:true}).fill(password)
  36 | 
  37 |         await page.getByRole("button",{name:"Submit",exact:true}).click()
  38 |     } 
  39 | 
  40 | })
  41 | test.only("for application--> valid set",async({page})=>{
  42 | 
  43 |     for(let testdata of data.valid){
  44 |         let url=testdata.url
  45 |         let username=testdata.username
  46 |         let password=testdata.password
  47 | 
  48 |         await page.goto(url)
  49 |         await page.getByLabel("Username",{exact:true}).fill(username)
  50 |         await page.getByLabel("Password",{exact:true}).fill(password)
  51 | 
  52 |         await page.getByRole("button",{name:"Submit",exact:true}).click()
  53 |     } 
  54 | 
  55 | })
  56 | 
  57 | 
  58 | test.only("for application--> invalid set",async({page})=>{
  59 | 
  60 |     for(let testdata of data.invalid){
  61 |         let url=testdata.url
  62 |         let username=testdata.username
  63 |         let password=testdata.password
  64 | 
  65 |         await page.goto(url)
  66 |         await page.getByLabel("Username",{exact:true}).fill(username)
  67 |         await page.getByLabel("Password",{exact:true}).fill(password)
  68 | 
  69 |         await page.getByRole("button",{name:"Submit",exact:true}).click()
  70 |     } 
  71 | 
  72 | })
```