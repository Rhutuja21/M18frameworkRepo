import {test,expect} from "@playwright/test"

// test("auto_retrying_assertion",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

//     await expect(page).toHaveURL("https://demoapps.qspiders.com/ui?scenario=1")
//     //!only excat match --> not partial match

//     await expect(page).toHaveTitle("DemoApps | Qspiders | Text Box",{timeout:2000})
//     //!only exact title ---> not partial title    

//     await expect(page.getByPlaceholder("Enter your name",{exact:true})).toBeVisible({timeout:1000})
//     //! IT WILL CHECK WHETHER THE ELEMENT IS VISIBLE OR NOT
//     // inside expect use locator of the element

//     await page.getByPlaceholder("Enter your name",{exact:true}).fill("user")

//     await expect(page.getByPlaceholder("Enter your name",{exact:true})).toHaveValue("user")
//     //! if u want to print the value which is present in the input field use ---> inputValue()
//     //! if u want to validate the value present in the input field use --> toHaveValue()
//     //? toHaveValue---> will accept the argument which is the expected text present in the input field
    

//     await expect(page.locator('//h1[text()="Register"]')).toContainText("Regis")
//     //! it will check for partial/ substring
//     //? visible text

//     await expect(page.locator('//h1[text()="Register"]')).toHaveText("Regis")
//     //! it will check for exact text / string
//     //? visible text

//     await page.screenshot({path:"screenshot/ss1.png"})

//     // await page.getByPlaceholder("Enter your name",{exact:true}).fill("username")

//     await expect(page).toHaveScreenshot("screenshot/ss1.png")
// })


// test("non retrying assertion",async({page})=>{

//     await page.goto('https://demoapps.qspiders.com/ui?scenario=1')

//     let text=await page.locator('//h1[.="Register"]').textContent()

//     await expect(text).not.toBe("Regis")

//     let title=await page.title()
//     let url=await page.url()

//     // await page.mouse.click(200,200)

//     await expect(title).not.toContain("DemoApps | Qspiders ")  

//     await expect.soft(url).toMatch(/scenario=1/)

//     // let status="hii"
//     // await expect(status).toBeTruthy() 

//     // let name="rohit";
//     // await expect(name).toBeUndefined()


//     // await expect("hiii").toBeTruthy()

// })


// test("assymetric matchers",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

//     let text=await page.locator('//button').textContent()  //!Register
//     // expect(text).toEqual("Regis")   //? in respect to non retrying assertion
//     expect(text).toEqual(expect.stringContaining("Regis"))
//     //! used to check whether a string contains a specified subsubstring

//     expect(text).toEqual(expect.stringMatching(/Register/))
//     //! used to check whether a string contains a specified subsubstring or regular expression

//     const products=["laptop","mobile","keyboard","mouse"]
//     expect(products).toEqual(expect.arrayContaining(["laptop","mouse"]))
//     //! checks whether an array contains the specified elements

//     const user={
//         name:"john",
//         age:25,
//         city:"bangalore"
//     }
//     expect(user).not.toEqual(expect.objectContaining({
//         name:"john",
//         age:27
//     }))
//     //! check whether an object contains the specified properties


//     //! expect.anything()
//     //? matches any value expect null and undefined

//     let a=true;
//     expect(a).toEqual(expect.anything())

//     const user1={
//         name:"john",
//         age:25,
//     }
//     expect(user1).toEqual({
//         name:expect.anything(),
//         age:expect.anything()
//     })

//     //!expect.any()
//     //?matches any value of a specified datatype

//     expect(user1).toEqual({
//         name:expect.any(String),
//         age:expect.any(Number)
//     })

//     let stud=true
//     expect(stud).toEqual(expect.any(Boolean))
  
// })

test.only("poll assertion",async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    await expect.poll(async()=>{
        return await page.title()
    }).toContain("Demo")
})