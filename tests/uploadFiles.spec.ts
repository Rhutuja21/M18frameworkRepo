import {test} from "@playwright/test"
import path from "path"

test('upload files',async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

//!--------Apporach 1--------
    //! single file upload
    // await page.locator("#singleFileInput").setInputFiles("C:/Users/rhutuja/Desktop/PW_PM/uploadFiles/demo.txt")

    // await page.getByRole('button',{name:"Upload Single File",exact:true}).click()

    //!multiple file
    // await page.locator('#multipleFilesInput').setInputFiles(["C:/Users/rhutuja/Desktop/PW_PM/uploadFiles/demo.txt","C:/Users/rhutuja/Desktop/PW_PM/uploadFiles/demo1.txt"])

    // await page.getByRole('button',{name:"Upload Multiple Files",exact:true}).click()



    //!-------------------Approach2------------------------------
    // await page.locator("#singleFileInput").setInputFiles([path.join(__dirname,"../uploadFiles/demo.txt"),path.join(__dirname,"../uploadFiles/demo.txt")])


    // await page.getByRole('button',{name:"Upload Single File",exact:true}).click()




    //!------------Approach 3-----------------------
    await page.locator("#singleFileInput").setInputFiles("C:/Users/rhutuja/Desktop/User Management Requirements Specification.docx")
    
    await page.getByRole('button',{name:"Upload Single File",exact:true}).click()

})