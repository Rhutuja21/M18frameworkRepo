# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: readexcel.spec.ts >> for appliaction
- Location: tests\readexcel.spec.ts:41:6

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://practicetestautomation.com/practice-test-login/", waiting until "load"

```

# Test source

```ts
  1  | import {test} from "@playwright/test"
  2  | import excel from "exceljs"
  3  | import path from "path"
  4  | 
  5  | test("read single data",async({page})=>{
  6  |     let book=new excel.Workbook()
  7  |     await book.xlsx.readFile(path.join(__dirname,"../DDT/excelfile1.xlsx"))
  8  | 
  9  |     let sheet=await book.getWorksheet("Sheet1")
  10 |     let data1=await sheet?.getRow(1).getCell(1).toString()
  11 | 
  12 |     console.log(data1);
  13 | 
  14 |     let data2=await sheet!.getRow(1).getCell(2).toString()
  15 |     console.log(data2);
  16 | 
  17 | 
  18 |     let data3= await sheet?.getRow(2).getCell(1).toString()
  19 |     console.log(data3);
  20 | 
  21 | })
  22 | 
  23 | test('multiple data',async()=>{
  24 |     let book=new excel.Workbook()
  25 |     await book.xlsx.readFile(path.join(__dirname,"../DDT/excelfile1.xlsx"))
  26 | 
  27 |     let sheet=await book.getWorksheet("Sheet2")
  28 | 
  29 |     for(let c=1;c<=sheet!.actualColumnCount;c++){
  30 |         for(let row=1;row<=sheet!.actualRowCount;row++){
  31 |             let data=await sheet?.getRow(row).getCell(c).toString()
  32 |             console.log(data);
  33 |         
  34 |         }
  35 | 
  36 |     }
  37 | 
  38 | })
  39 | 
  40 | 
  41 | test.only("for appliaction",async({page})=>{
  42 |     let book= new excel.Workbook()
  43 |     await book.xlsx.readFile(path.join(__dirname,"../DDT/excelfile1.xlsx"))
  44 | 
  45 |     let sheet=await book.getWorksheet("Sheet3")
  46 | 
  47 |     let alldata:any[]=[]
  48 |     let headers=sheet?.getRow(1).values
  49 | 
  50 | 
  51 |     let urlIndex;  //1
  52 |     let usernameIndex;  //2
  53 |     let passwordIndex; //3
  54 |     if(Array.isArray(headers)){
  55 |          urlIndex=headers.findIndex(value=>value==="URL")
  56 |          usernameIndex=headers.findIndex(value=>value==="username")
  57 |          passwordIndex=headers.findIndex(value=>value==="password")
  58 |     }
  59 | 
  60 |     for(let row=2;row<=sheet!.actualRowCount;row++){
  61 |         let url=sheet?.getRow(row).getCell(urlIndex).toString()
  62 |         let username=sheet?.getRow(row).getCell(usernameIndex).toString()
  63 |         let password=sheet?.getRow(row).getCell(passwordIndex).toString()
  64 | 
  65 |         alldata.push({
  66 |             link:url,
  67 |             user:username,
  68 |             password:password
  69 |         })
  70 | 
  71 |         console.log(alldata);
  72 | 
  73 |         for(let d of alldata){
> 74 |             await page.goto(d.link)
     |                        ^ Error: page.goto: Target page, context or browser has been closed
  75 |             await page.getByLabel("Username",{exact:true}).fill(d.user)
  76 |             await page.getByLabel("Password",{exact:true}).fill(d.password)
  77 |             await page.getByRole("button",{name:"Submit"}).click()
  78 | 
  79 |         }
  80 | 
  81 |     }
  82 | 
  83 |  
  84 | 
  85 | 
  86 | 
  87 | })
```